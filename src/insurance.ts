/** Insurance for a parcel. */

import { shippingPrice } from "./pricing";

const RATE = 0.02;
const MINIMUM_FEE = 1;
const MAXIMUM_VALUE = 5000;

/** A parcel with the value of its content in euros. */
export interface InsuredParcel {
  readonly weight: number;
  readonly value: number;
  readonly express?: boolean;
}

/** Returns the fee for insuring a parcel worth `value` euros. */
export function insuranceFee(value: number): number {
  if (value <= 0) {
    throw new RangeError("the value must be above zero");
  }
  if (value > MAXIMUM_VALUE) {
    throw new RangeError("the value is too high to insure");
  }
  return Math.max(MINIMUM_FEE, Math.round(value * RATE * 100) / 100);
}

/** Returns the price of a parcel with its insurance fee. */
export const insuredPrice = (parcel: InsuredParcel): number => {
  const price = shippingPrice(parcel.weight, parcel.express ?? false);
  return Math.round((price + insuranceFee(parcel.value)) * 100) / 100;
};

/** Returns the amount that the insurance pays for a parcel. */
export function claim(value: number, damaged: boolean): number {
  if (!damaged) {
    return 0;
  }
  if (value > MAXIMUM_VALUE) {
    return MAXIMUM_VALUE;
  }
  return value;
}
