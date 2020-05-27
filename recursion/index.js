// simple counter with forloop

function counterWithForLoop(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

function count(n) {
  console.log(n);
  if (n === 10) return;
  return count(n + 1);
}

// console.log(count(0));
const items = [
  [1, 2, 3],
  [4, 5, 6],
];
const items2 = [
  [1, 2, 3],
  [4, 5, [6]],
];

/**
 *
 * @param {Array} items
 * @param {number} n
 */
function findNum(items, n) {
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

console.log(findNum(items, 6));
console.log(findNum(items2, 6));
