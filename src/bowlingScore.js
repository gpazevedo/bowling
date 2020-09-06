const { isStrike, isSpare, calcPoints } = require("./rules");

const maxTurns = 10;

function bowlingScore(tries) {
  const { points, play, frameEnded } = tries.reduce(
    (acc, knocked) => {
      let {
        points,
        play,
        frameEnded,
        frame,
        bonusNext,
        bonusNextAgain,
        turns,
      } = acc;

      const thisFrame = frame.concat(knocked);
      const extra = turns >= maxTurns;

      points += calcPoints({ pins: knocked, extra, bonus: bonusNext });

      frameEnded = isStrike(thisFrame) || thisFrame.length == 2 || extra;
      frame = frameEnded ? [] : thisFrame;
      turns += frameEnded ? 1 : 0;

      bonusNext =
        bonusNextAgain +
        (!extra && (isStrike(thisFrame) || isSpare(thisFrame) ? 1 : 0));
      bonusNextAgain = isStrike(thisFrame) && !extra ? 1 : 0;

      play = turns < maxTurns || bonusNext > 0;

      return {
        points,
        play,
        frameEnded,
        frame,
        bonusNext,
        bonusNextAgain,
        turns,
      };
    },
    {
      points: 0,
      play: false,
      frameEnded: false,
      frame: [],
      bonusNext: 0,
      bonusNextAgain: 0,
      turns: 0,
    }
  );

  return { points, play, frameEnded };
}

// function tryPoints(pins, extra, bonus) {
//   return (bonus + (extra ? 0 : 1)) * pins;
// }
module.exports = { bowlingScore };
