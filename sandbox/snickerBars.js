const prepareCandyBar = (candy) => candy;

const getCandyBar = (amount, candy) => {
  return [...Array(amount).keys()].map((x) => prepareCandyBar(candy));
};

console.log(getCandyBar(25, "snickers"));
