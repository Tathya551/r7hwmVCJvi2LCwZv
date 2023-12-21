import { calculateBMI } from "./calculateBMI";

describe("BMI Calculation", () => {
  test("calculates BMI correctly for normal inputs", () => {
    expect(calculateBMI(98, 1.91)).toBe("26.9");
  });

  test("handles zero or negative values", () => {
    expect(calculateBMI(0, 1.91)).toBeNull();
    expect(calculateBMI(98, 0)).toBeNull();
    expect(calculateBMI(-98, 1.91)).toBeNull();
    expect(calculateBMI(98, -1.91)).toBeNull();
  });

  test("handles non-numeric inputs", () => {
    expect(calculateBMI("abc", 1.91)).toBeNull();
    expect(calculateBMI(98, "xyz")).toBeNull();
  });

  test("calculates BMI for edge cases", () => {
    expect(calculateBMI(1.0, 3.0)).toBe("0.1");
    expect(calculateBMI(300.0, 0.1)).toBe("30000.0");
  });
});
