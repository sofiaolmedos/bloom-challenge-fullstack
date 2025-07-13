"use client";
import { useState, useEffect } from "react";

interface FrequentQuestionsProps {
  brandId: string;
}

interface BrandSettings {
    brandId: string;
    shipment: readonly ('home' | 'blue_express')[];
    payment: readonly ('transfer' | 'coupons')[];
    extraCharges?: string;
    coupons: boolean;
}

interface Brand {
    id: string;
    name: string;
    url: string;
    settings?: BrandSettings;
}

export const FrequentQuestions = ({ brandId }: FrequentQuestionsProps) => {
    const [brandInfo, setBrandInfo] = useState<Brand | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBrand = async () => {
          try {
            setLoading(true);
            const response = await fetch(`http://localhost:8000/brands/${brandId}`);
            if (!response.ok) {
              throw new Error('Error al cargar las marcas');
            }
            const data = await response.json();
            setBrandInfo(data);
          } catch (err) {
            console.error(err);
          } finally {
            setLoading(false);
          }
        };
        fetchBrand();
      }, [brandId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="text-lg">Cargando...</div>
            </div>
        );
    }

    if (!brandInfo) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="text-lg text-red-600">Error: No se pudo cargar la información de la marca</div>
            </div>
        );
    }
    
    console.log(brandInfo.settings?.shipment);
    return (
        <div className="mx-auto px-6 py-8">
            <h1 className="text-center text-4xl font-bold mb-4">{brandInfo.name}</h1>
            <h2 className="text-center text-2xl font-semibold mb-8">PREGUNTAS FRECUENTES</h2>
            <hr />
            <div>
                <div className="my-8">
                    <h3 className="text-xl mb-3">
                        ¿Cómo puedo publicar un producto para la venta?
                    </h3>
                    <p className="leading-relaxed text-base">
                        ¡Publicar tu producto es muy fácil! Simplemente haz clic en "Vender", 
                        crea una cuenta y sigue el proceso de publicación. Una vez que completes 
                        el formulario de venta, la publicación será revisada por nuestro equipo 
                        y en un plazo máximo de 24 horas, te avisaremos si está aprobada o rechazada. 
                        Después de ser revisada y aprobada, se hará pública. Si hay algún problema, 
                        recibirás un correo electrónico pidiendo hacer cambios antes de que pueda ser aceptada.
                    </p>
                </div>
                <hr />
                <div className="my-8">
                    <h3 className="text-xl mb-3">
                        ¿Cómo envío mi artículo después de que alguien lo compra?
                    </h3>
                    <p className="leading-relaxed text-base">
                        Después de que alguien compra tu producto, recibirás un correo electrónico que incluye las instrucciones para completar tu venta, que se puede hacer:
                    </p>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed text-base ml-4">
                        {brandInfo.settings?.shipment?.includes('home') && (
                            <li>Solicitando una recolección del producto en tu domicilio.</li>
                        )}
                        {brandInfo.settings?.shipment?.includes('blue_express') && (
                            <li>Llevando el producto a un punto Blue Express.</li>
                        )}
                    </ul>
                </div>
                <hr />
                <div className="my-8">
                    <h3 className="text-xl mb-3">
                        ¿Cómo y cuándo recibo el pago?
                    </h3>
                    <p className="leading-relaxed text-base">
                        Una vez que tu artículo se entrega y es recibido conforme (manualmente por el comprador o 
                        automáticamente después de 72 horas desde que se entregó el producto), recibirás un correo 
                        electrónico donde tendrás la opción de recibir el pago
                        {brandInfo.settings?.payment?.includes('transfer') && (
                            <span> por un 80% a través de una transferencia bancaria</span>
                        )}
                        {brandInfo.settings?.payment?.includes('transfer') && brandInfo.settings?.payment?.includes('coupons') && (
                            <span> o</span>
                        )}
                        {brandInfo.settings?.payment?.includes('coupons') && (
                            <span> por el 100% en un cupón de descuento (créditos) para usar en la tienda</span>
                        )}
                        . 
                    </p>
                </div>
                <hr />
                <div className="my-8">
                    <h3 className="text-xl mb-3">
                        ¿Hay cobros adicionales por vender mi producto por acá?
                    </h3>
                    {brandInfo.settings?.extraCharges ? (
                        <p className="leading-relaxed text-base">
                            {brandInfo.settings.extraCharges}
                        </p>
                    ) : (
                        <p className="leading-relaxed text-base">
                            No existen cobros adicionales por vender el producto en esta modalidad.
                        </p>
                    )}
                </div>
                <hr />

                {brandInfo.settings?.coupons && (
                    <div className="my-8">
                        <h3 className="text-xl mb-3">
                            Política de uso de cupones
                        </h3>
                        <p className="leading-relaxed text-base mb-4">
                            Los cupones que recibas por la venta de tus productos tienen las siguientes 
                            restricciones:
                        </p>
                        <ol className="list-[lower-alpha] list-inside space-y-2 leading-relaxed text-base ml-4">
                            <li>
                                Se pueden utilizar únicamente para compras en el sitio web 
                                <a href={brandInfo.url} target="_blank" rel="noopener noreferrer" 
                                   className="text-blue-600 hover:text-blue-800 underline ml-1">
                                    {brandInfo.url}
                                </a>.
                            </li>
                            <li>
                                Tiene un tiempo máximo para ser utilizado de 6 meses.
                            </li>
                            <li>
                                Está restringido a un monto mínimo de pedido para que pueda utilizarse en el 
                                ecommerce. El monto mínimo está definido por el monto del cupón + $1.000 CLP.
                            </li>
                        </ol>
                    </div>
                )}
            </div>
        </div>
    )
}