import { describe, expect, it } from "vitest";

import { insuranceFee, insuredPrice } from "../src/insurance";

describe("insuranceFee", () => {
  it("has a minimum", () => {
    expect(insuranceFee(10)).toBe(1);
  });

  it("follows the value", () => {
    expect(insuranceFee(200)).toBe(4);
  });

  it("needs a value above zero", () => {
    expect(() => insuranceFee(0)).toThrow("above zero");
  });
});

describe("insuredPrice", () => {
  it("adds the fee to the price", () => {
    expect(insuredPrice({ weight: 2, value: 200 })).toBe(10.9);
  });
});
