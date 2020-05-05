const increment = x => x + 1;
const decrement = x => x - 1;
const double = x => x * 2;
const initialVal = 1;

// one way od doing it
const final = double(decrement(increment(increment(double(initialVal)))));
const pipeLine = [
  increment,
  double,
  increment,
  increment,
  decrement,
  decrement,
  increment,
  double,
];

// composing our functions with reduce
const finalVal = pipeLine.reduce((acc, fn) => fn(acc), initialVal);
const finalVal2 = pipeLine.reduceRight((acc, fn) => fn(acc), initialVal);

console.log(finalVal, finalVal2);
