// Composition

const f = x => x + 5;

const h = x => x * 2;

// console.log(f(h(5)));

const shout = str => str.toUpperCase();
const shoutLouder = str => `${str}!!!!!!`;
const repeat = str => `${str} ${str} ${str}`;

//  runs from inside out
// 1. shout
// 2. shoutLouder
// 3. repeat
// console.log(repeat(shoutLouder(shout('hello'))));

// better approach to make your code cleaner and to have a compose function , similar how it works in rambda or lodash
// x = initial value
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const iLoveToScream = compose(repeat, shoutLouder, repeat);

// console.log(iLoveToScream('Legia'));

// we can also use the pipe operation in javascript
// x = initial value
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const iLoveToScream2 = pipe(repeat, shoutLouder, shout);

console.log(iLoveToScream2('hello'));
