const Box = (x) => ({
  chain: (f) => f(x),
  ap: (other) => other.map(x), // other will be BOX
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  inspect: () => `Box(${x})`,
});

const res = Box((x) => (y) => x + y).ap(Box(2));
// console.log(res.map((x) => x + 3));
