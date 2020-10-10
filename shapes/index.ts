const not = (fn: Function) => {
  return (...params: String[] | number[]) => !fn(...params)
}

const isOdd = (n: number): boolean => {
  return n % 2 === 1
}

const isEven = (n: number): boolean => {
  return !isOdd(n)
}

const isEvenNumber = not(isOdd)
const isOddNumber = not(isEven)

// console.log(isEvenNumber(6)); // true
// console.log(isOdd(3)); // true

const dog = {
  name: "bob",
  breed: "bug",
}

const transformedMap = (mapFn: Function) => (map: Record<string, any>) => {
  const copyMap = { ...map }
  for (let key of Object.keys(map)) {
    copyMap[key] = mapFn(copyMap[key])
  }
  return copyMap
}

let result = transformedMap((s: string) => s.toUpperCase())(dog)
console.log(result)

export { not, isOdd, isEven }
