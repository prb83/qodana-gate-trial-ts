/** Prices for sending a parcel. */

const BASE_PRICE = 4.5;
const PRICE_PER_KILOGRAM = 1.2;
const EXPRESS_FACTOR = 1.5;
const MAXIMUM_WEIGHT = 30;
const HEAVY_WEIGHT = 20;
const HEAVY_SURCHARGE = 3;
const FRAGILE_SURCHARGE = 2.5;

/** Returns `amount` as a price with two decimals. */
function rounded(amount: number): number {
  return Math.round(amount * 100) / 100;
}

/** Returns the price for a parcel of `weight` kilograms. */
export function shippingPrice(weight: number, express = false): number {
  if (weight <= 0) {
    throw new RangeError("the weight must be above zero");
  }
  if (weight > MAXIMUM_WEIGHT) {
    throw new RangeError("the parcel is too heavy");
  }
  let price = BASE_PRICE + weight * PRICE_PER_KILOGRAM;
  if (express) {
    price *= EXPRESS_FACTOR;
  }
  return rounded(price);
}

/** Returns the lowest standard price of the parcels. */
export function cheapest(weights: readonly number[]): number {
  if (weights.length === 0) {
    throw new RangeError("no parcel given");
  }
  return Math.min(...weights.map((weight) => shippingPrice(weight)));
}

/** Returns the surcharge for a heavy or a fragile parcel. */
export function surcharge(weight: number, fragile = false): number {
  let extra = 0;
  if (weight > HEAVY_WEIGHT) {
    extra += HEAVY_SURCHARGE;
  }
  if (fragile) {
    extra += FRAGILE_SURCHARGE;
  }
  return extra;
}
