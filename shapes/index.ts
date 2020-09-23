const not = (fn: Function) => {
  return (...params: String[] | number[]) => !fn(...params);
};

const isOdd = (n: number): boolean => {
  return n % 2 === 1;
};

const isEven = (n: number): boolean => {
  return !isOdd(n);
};

const isEvenNumber = not(isOdd);
const isOddNumber = not(isEven);

// console.log(isEvenNumber(6)); // true
// console.log(isOdd(3)); // true

export { not, isOdd, isEven };
