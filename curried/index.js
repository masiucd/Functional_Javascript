// Curried function

// Good way of thinking is
// Most specific -> Least Specific

const mapped = cb => arr => arr.map(cb);

const double = x => x * 2;
const withDouble = mapped(double);

// console.log(withDouble([1, 2, 3]));

const prop = key => obj => obj[key];

const propName = prop('name');

const dogs = [
  { id: 1, name: 'Pysia', age: 7 },
  { id: 2, name: 'Kiwi', age: 2 },
  { id: 3, name: 'Felix', age: 3 },
  { id: 4, name: 'Korek', age: 9 },
];

console.log(mapped(propName)(dogs));
console.log(mapped(prop('age'))(dogs));
