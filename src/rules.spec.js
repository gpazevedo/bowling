const { isStrike, isSpare, calcPoints } = require("./rules");

describe("Checking rules", () => {
  it("[3] is NOT Strike", () => {
    expect(isStrike([3])).toEqual(false);
  });

  it("[3, 4] is NOT Strike", () => {
    expect(isStrike([3, 4])).toEqual(false);
  });

  it("[10] is Strike", () => {
    expect(isStrike([10])).toEqual(true);
  });

  it("[3] incompleted turn is NOT Spare", () => {
    expect(isSpare([3])).toEqual(false);
  });

  it("[3, 4] Is NOT Spare ", () => {
    expect(isSpare([3, 4])).toEqual(false);
  });

  it("[3, 7] Is Spare", () => {
    expect(isSpare([3, 7])).toEqual(true);
  });

  it("Points of knocked 7 without bonus", () => {
    expect(calcPoints({ pins: 7, extra: false, bonus: 0 })).toEqual(7);
  });

  it("Points of knocked 7 with 1 bonus ?", () => {
    expect(calcPoints({ pins: 7, extra: false, bonus: 1 })).toEqual(14);
  });

  it("Points of knocked 7 with 2 bonus ?", () => {
    expect(calcPoints({ pins: 7, extra: false, bonus: 2 })).toEqual(21);
  });
});
