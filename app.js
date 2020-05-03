const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const nums2 = [
  [1, 2],
  [7, 5],
  [2, 21],
];

const xs = nums.reduceRight((acc, x) => {
  console.log('acc is ', acc, ' x is ', x);
  const r = acc + x;
  return r;
});
const xs2 = nums.reduce((acc, val) => acc + val, 0);
console.log(xs, xs2);

const xs3 = nums2.reduceRight((acc, cur) => acc.concat(cur));
console.log(xs3);
