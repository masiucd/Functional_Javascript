const a = [1, 2, 3, 4, 5];
const b = a;

console.log(a === b); // true , same reference
b.push(99);
console.log(a, b);
// [ 1, 2, 3, 4, 5, 99 ] [ 1, 2, 3, 4, 5, 99 ]
// Both got effected!

const myPush = value => arr => {
  const cloned = [...arr];
  cloned.push(value);
  return cloned;
};

const xs = [1, 2, 3];
const xs2 = myPush(100)(xs);

console.log(xs, xs2);
// [ 1, 2, 3 ] [ 1, 2, 3, 100 ]
// pure function and we got a new array

console.log(xs === xs2); // false !same array
