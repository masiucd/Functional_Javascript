export const unary = (fn: Function) => <T>(arg: T) => fn(arg);

export const addTwo = (n: number): number => {
  return n + 2;
};
export const double = (n: number): number => {
  return n * 2;
};
export const half = (n: number): number => {
  return n / 2;
};

let foo = unary(addTwo)(10);
