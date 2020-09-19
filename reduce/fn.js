/**
 *
 * @param {Array} list
 * @param {Function} fn
 * @param {Any} initial
 */
const reducer = (list, fn, initial = 0) => {
  let memo = initial;
  for (let i = 0; i < list.length; i++) {
    memo = fn(list[i], memo);
  }
  return memo;
};

let x = reducer([1, 2, 3], (prev, res) => prev + res, 0);
console.log(x);

// function forEachRight(arr, fn) {
//   for (let i = arr.length; i <= 0; i--) {
//     fn(arr[i]);
//   }
// }

// console.log(forEachRight([1, 2, 3, 4, 5, 6], (x) => x + 1));
