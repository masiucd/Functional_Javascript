// const nextCharForNumberString = (str) => {
//   const trimmed = str.trim();
//   const number = parseInt(trimmed);
//   const nextNumber = number + 1;
//   return String.fromCharCode(nextNumber);
// };

// const nextCharForNumberString = (str) => {
//   return [str]
//     .map((s) => s.trim())
//     .map((s) => parseInt(s))
//     .map((n) => n + 1)
//     .map((n) => String.fromCharCode(n));
// };
// Code goes here

const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  inspect: () => `Box(${x})`,
});

const nextCharForNumberString = (str) =>
  Box(str)
    .map((s) => s.trim())
    .map((r) => parseInt(r))
    .map((i) => i + 1)
    .map((i) => String.fromCharCode(i))
    .fold((c) => c.toLowerCase());

const result = nextCharForNumberString("  64 ");

console.log(result);
