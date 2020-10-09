const addOne = (x: number): number => x + 1
const removeOne = (x: number): number => x - 1
const odd = (x: number): boolean => x % 2 !== 0

const listCombination = <T>(list: T[], val: T) => {
  list.push(val)
  return list
}

const mapWithReduce = <T>(arr: T[], mappingFn: Function) => {
  return arr.reduce((list: T[], v: T) => {
    return listCombination(list, mappingFn(v))
  }, [])
}

const filterWithReduce = <T>(arr: T[], predicateFn: Function) => {
  return arr.reduce((list: T[], v) => {
    return predicateFn(v) ? listCombination(list, v) : list
  }, [])
}

let list = [2, 5, 100, 23, 45, 24, 17, 19, 3, 4, 5, 6]

let increase = mapWithReduce(list, addOne)
let oddList = filterWithReduce(list, odd)
// console.log(increase, oddList)

const mapWithReduce2 = <T>(arr: T[]) => (mappingFn: Function) => {
  return arr.reduce((list: T[], v: T) => {
    return listCombination(list, mappingFn(v))
  }, [])
}

const filterWithReduce2 = <T>(arr: T[]) => (predicateFn: Function) => {
  return arr.reduce((list: T[], v) => {
    return predicateFn(v) ? listCombination(list, v) : list
  }, [])
}

let increase2 = mapWithReduce2(list)(addOne)
let oddList2 = filterWithReduce2(list)(odd)

export {
  listCombination,
  mapWithReduce,
  filterWithReduce,
  mapWithReduce2,
  filterWithReduce2,
  addOne,
  odd,
}
