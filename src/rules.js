function isStrike(tries) {
  return tries && tries[0] === 10;
}

function isSpare(tries) {
  return tries.length === 2 && tries[0] + tries[1] === 10;
}

function calcPoints({ pins, extra, bonus }) {
  return (bonus + (extra ? 0 : 1)) * pins;
}

module.exports = { isStrike, isSpare, calcPoints };
