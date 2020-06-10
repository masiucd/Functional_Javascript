/**
 *
 * @param {Array} arr
 */
function flatArray(arr) {
  // return myFlat(arr.map((x) => (Array.isArray(x) ? flatArray(x) : x)));
  return [].concat(...arr.map((x) => (Array.isArray(x) ? flatArray(x) : x)));
}

console.log(flatArray([1, 2, 3, 4, [4, 3, 2, [32, 6, 7, 5, 3, [21, 22, 12]]]]));
