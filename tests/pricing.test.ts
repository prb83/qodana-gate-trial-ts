import { describe, expect, it } from "vitest";

import { cheapest, shippingPrice } from "../src/pricing";

describe("shippingPrice", () => {
  it("gives the standard price", () => {
    expect(shippingPrice(2)).toBe(6.9);
  });

  it("gives the express price", () => {
    expect(shippingPrice(2, true)).toBe(10.35);
  });

  it.each([0, -1])("needs a weight above zero (%d)", (weight) => {
    expect(() => shippingPrice(weight)).toThrow("above zero");
  });

  it("has a maximum weight", () => {
    expect(() => shippingPrice(30.1)).toThrow("too heavy");
  });
});

describe("cheapest", () => {
  it("gives the lowest price of several parcels", () => {
    expect(cheapest([5, 1, 3])).toBe(5.7);
  });

  it("needs a parcel", () => {
    expect(() => cheapest([])).toThrow("no parcel");
  });
});
