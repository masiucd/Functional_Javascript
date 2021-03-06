const Right = (x) => ({
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => "Right(${x})",
});
const Left = (x) => ({
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  inspect: () => "Left(${x})",
});

const res = Left(5)
  .map((x) => x + 1)
  .map((x) => x / 2)
  .fold(
    (x) => "error",
    (x) => x,
  );

console.log(res);
