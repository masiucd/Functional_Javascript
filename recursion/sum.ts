const sum = (xs: number[]): number => {
  return xs.length === 1 ? xs[0] : xs[0] + sum(xs.slice(1))
}
const fo = (xs: number[]) => {
  let res = 0
  for (let i = 0; i < xs.length; i++) {
    res += xs[i]
  }
  return res
}

console.log(fo([1, 2, 3, 4, 5, 6]))
