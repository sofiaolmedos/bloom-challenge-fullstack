"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Brand {
  id: string;
  name: string;
  url: string;
  settings?: any;
}

export const BrandSelector = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch('http://localhost:8000/brands');
        if (!response.ok) {
          throw new Error('Error al cargar las marcas');
        }
        const data = await response.json();
        setBrands(data);
      } catch (err) {
        console.error(err);
      } 
    };
    fetchBrands();
  }, []);

  const handleBrandClick = async (brandId: string) => {
    if (isNavigating) return;
    try {
      setIsNavigating(true);
      setSelectedBrand(brandId);
      await router.push(`/frequent-questions/${brandId}`);
    } catch (error) {
      console.error('Error al navegar:', error);
      setIsNavigating(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => handleBrandClick(brand.id)}
            disabled={isNavigating}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedBrand === brand.id
                ? "bg-blue-600 text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
            } ${
              isNavigating ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isNavigating && selectedBrand === brand.id ? "Navegando..." : brand.name}
          </button>
        ))}
      </div>
    </div>
  );
}; 