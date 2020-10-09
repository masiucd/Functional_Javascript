// @ts-nocheck
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// to transform the array we basically can use map
const double = n => n * 2

const doubleNums = data.map(double)
// console.log(doubleNums);
// [
//   2,  4,  6,  8, 10,
//  12, 14, 16, 18
// ]

// to only get the even number we can use filter
const even = n => n % 2 === 0

const evenNums = data.filter(even)
// console.log(evenNums);
// [ 2, 4, 6, 8 ]

// we can even chain both map and filter together
// check out the difference of time using this implantation vs reduce
// console.time('mappedList');
const mappedList = data.filter(n => n > 5).map(n => n ** 2)
// console.timeEnd('mappedList');

// console.time('mappedListWithReduce');
const mappedList2 = data.reduce((acc, val) => {
  if (val > 5) {
    acc.push(val ** 2)
  }
  return acc
}, [])
// console.timeEnd('mappedListWithReduce');

// mappedList: 0.102ms
// mappedListWithReduce: 0.03ms

const fruits = ["apple", "kiwi", "banana", "berries"]
const filterWithAReducer = fruits.reduce((basket, fruit) => {
  if (fruit.charAt(0) === "b") {
    basket.push(fruit)
  }
  return basket
}, [])

// console.log(filterWithAReducer);

const nums = [
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  2,
  2,
  5,
  6,
  2,
  2,
  2,
  2,
  7,
  1,
  1,
  1,
  1,
  8,
  9,
  10,
]

const filterNumber = nums.reduce((prev, current) => {
  return !prev.includes(current) ? [...prev, current] : prev
}, [])
