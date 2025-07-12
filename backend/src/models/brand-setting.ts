/** 
* Debes completar este modelo como consideres adecuado
*/
export type BrandSettings = {
  brandId: string;
  shipment: readonly ('home' | 'blue_express')[];
  payment: readonly ('transfer' | 'coupons')[];
  extraCharges?: string;
  coupons: boolean;
};