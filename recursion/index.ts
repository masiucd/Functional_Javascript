// simple counter with forloop

function counterWithForLoop(n: number): void {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

function count(n: number): number {
  console.log(n);
  if (n === 10) return n;
  return count(n + 1);
}

// console.log(count(0));
const numbers: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
const number2: Array<any> = [
  [1, 2, 3],
  [4, 5, [6]],
];

function findNum(items: Array<any>, n: number): string {
  let foundIt = 'No!!!!';
  items.forEach((x, i) => {
    if (x === n) {
      foundIt = `Yes found ${n} at index ${i}`;
    }
    if (Array.isArray(x)) {
      foundIt = findNum(x, n);
    }
  });
  return foundIt;
}

// console.log(findNum(numbers, 6));
// console.log(findNum(number2, 6));

export { findNum, count, counterWithForLoop, number2, numbers };
