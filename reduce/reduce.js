// lets make a pure function the reducer it into a mean

function reducer(acc, val, index, array) {
  const interMediantValue = acc + val;
  if (index === array.length - 1) {
    return interMediantValue / array.length;
  }
  return interMediantValue;
}
const initialValue = 0;
const data = [1, 2, 3, 4, 7, 9, 4, 3, 2, 2];
const mean = data.reduce(reducer, initialValue);

// If not passing a initial value,
// the reduce function will automatically take your first
// value in the array to be the initialvalue

const xs = ['apple', 'banana', 'carrot', 'avocado', 'berries'];

const reducer2 = xs.reduce((acc, fruit) => {
  // console.log(acc, fruit);
  acc.push(fruit.slice(0, 2));
  return acc;
}, []);
// console.log(reducer2);
