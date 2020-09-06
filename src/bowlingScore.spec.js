const { bowlingScore } = require("./bowlingScore");

describe("Bowling game score", () => {
  it("calculates one simple try", () => {
    expect(bowlingScore([7])).toEqual({
      points: 7,
      play: true,
      frameEnded: false,
    });
  });

  it("calculates one simple frame", () => {
    expect(bowlingScore([7, 1])).toEqual({
      points: 8,
      play: true,
      frameEnded: true,
    });
  });

  it("calculates 3 simple frames", () => {
    expect(bowlingScore([7, 1, 3, 5, 8, 0])).toEqual({
      points: 24,
      play: true,
      frameEnded: true,
    });
  });

  it("2 simple frames and one try", () => {
    expect(bowlingScore([7, 1, 3, 5, 8])).toEqual({
      points: 24,
      play: true,
      frameEnded: false,
    });
  });

  it("game completed", () => {
    expect(
      bowlingScore([7, 1, 3, 5, 8, 1, 1, 2, 1, 1, 2, 2, 3, 3, 4, 4, 0, 0, 2, 3])
    ).toEqual({
      points: 53,
      play: false,
      frameEnded: true,
    });
  });

  it("game completed, rest 1 try", () => {
    expect(
      bowlingScore([
        7,
        1,
        3,
        5,
        8,
        1,
        1,
        2,
        1,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        0,
        0,
        10,
        2,
      ])
    ).toEqual({
      points: 60,
      play: true,
      frameEnded: true,
    });
  });

  it("game completed with 2 extras tries", () => {
    expect(
      bowlingScore([
        7,
        1,
        3,
        5,
        8,
        1,
        1,
        2,
        1,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        0,
        0,
        10,
        2,
        3,
      ])
    ).toEqual({
      points: 63,
      play: false,
      frameEnded: true,
    });
  });

  it("game completed with 1 extra try", () => {
    expect(
      bowlingScore([
        7,
        1,
        3,
        5,
        8,
        1,
        1,
        2,
        1,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        0,
        0,
        7,
        3,
        2,
      ])
    ).toEqual({
      points: 60,
      play: false,
      frameEnded: true,
    });
  });

  it("2 sequential strikes", () => {
    expect(bowlingScore([10, 10])).toEqual({
      points: 30,
      play: true,
      frameEnded: true,
    });
  });

  it("2 sequential strikes + a try ", () => {
    expect(bowlingScore([10, 10, 5])).toEqual({
      points: 45,
      play: true,
      frameEnded: false,
    });
  });

  it("3 sequential strikes", () => {
    expect(bowlingScore([10, 10, 10])).toEqual({
      points: 60,
      play: true,
      frameEnded: true,
    });
  });

  it("3 sequential strikes + a try", () => {
    expect(bowlingScore([10, 10, 10, 5])).toEqual({
      points: 30 + 25 + 15 + 5, // 10 + 20 + 30 + 15
      play: true,
      frameEnded: false,
    });
  });

  it("game completed with maximum points", () => {
    expect(
      bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
    ).toEqual({
      points: 300,
      play: false,
      frameEnded: true,
    });
  });
});
