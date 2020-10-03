const lotteryNum = () => {
  return (Math.round(Math.random() * 100) % 58) + 1;
};

const recordNumber = (num: number, list: Array<number>) => {
  if (!list.includes(num)) {
    list = [...list, num];
    list.push(num);
    list.sort((a, b) => a - b);
  }
  return list;
};

let luckyLotteryNumbers: number[] = [];
const NUM_COUNT = 5;

while (luckyLotteryNumbers.length < NUM_COUNT) {
  luckyLotteryNumbers = recordNumber(lotteryNum(), luckyLotteryNumbers);
}

console.log(luckyLotteryNumbers);
