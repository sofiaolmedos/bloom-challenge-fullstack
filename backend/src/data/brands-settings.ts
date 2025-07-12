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
    extraCharges: "10.000",
    coupons: true,
  },
  {
    brandId: "kokoro",
    shipment: ["home", "blue_express"] as const,
    payment: ["transfer", "coupons"] as const,
    extraCharges: "tintoreria",
    coupons: true,
  },
];
