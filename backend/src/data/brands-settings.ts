/** 
* Debes completar este archivo como consideres adecuado
*/

export default [
  {
    brandId: "karyn_coo",
    shipment: ["home", "blue_express"] as const,
    payment: ["transfer", "coupons"] as const,
    coupons: true,
  },
  {
    brandId: "andesgear",
    shipment: ["home", "blue_express"] as const,
    payment: ["transfer"] as const,
    coupons: false,
  },
  {
    brandId: "milu_rugs",
    shipment: ["home"] as const,
    payment: ["transfer", "coupons"] as const,
    extraCharges: `El producto siempre pasa por un lugar de lavado y sanitizado. Se descuenta 
    al vendedor un monto fijo de $10.000 por el lavado.`,
    coupons: true,
  },
  {
    brandId: "kokoro",
    shipment: ["home", "blue_express"] as const,
    payment: ["transfer", "coupons"] as const,
    extraCharges: `El producto siempre debe pasar por el taller de Kokoro para su revisión. 
    En caso que no esté limpio, el costo de la tintorería se descuenta del pago al vendedor.`,
    coupons: true,
  },
];
