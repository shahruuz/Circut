export function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const SHIPPING_FLAT_RATE = 4.5;
export const FREE_SHIPPING_THRESHOLD = 45;
export const TAX_RATE = 0.0825; // adjust to your state's rate

export function calculateShipping(subtotal) {
  if (subtotal === 0) return 0;
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT_RATE;
}

export function calculateTax(subtotal) {
  return subtotal * TAX_RATE;
}
