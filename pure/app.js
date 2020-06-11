// @ts-nocheck
const fetch = require('node-fetch');

const getData = (url) => (endpoint) => (fn) => {
  fetch(`${url}${endpoint}`)
    .then((res) => res.json())
    .then((data) => fn(data))
    .catch((err) => console.log(err.message));
};

const getJsonData = getData('https://jsonplaceholder.typicode.com');
const getUsers = getJsonData('/users');

// getUsers((data) => data.map((x) => console.log(x)));

function catchErrors(fn) {
  return function (...args) {
    return fn(...args).catch((err) => {
      console.log(`ohhh no`);
      console.error(err);
    });
  };
}

const run = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time >= 500) {
        resolve(`amount run of ${time}ms`);
      } else {
        reject(`Not allowed below ${time}ms`);
      }
    }, time);
  });
};

// (async function () {
// let r1 = await run(700);
// console.log(r1);
// let r2 = await run(920);
// console.log(r2);
// let r3 = await run(300);
// console.log(r3);
// let r4 = await run(900);
// console.log(r4);
// })();

async function go() {
  let r1 = await run(700);
  console.log(r1);
  let r2 = await run(920);
  console.log(r2);
  let r3 = await run(300);
  console.log(r3);
  let r4 = await run(900);
  console.log(r4);
}

const wrappedFunction = catchErrors(go);
wrappedFunction();
