const handleErrors = (fn: Function) => {
  return function (...args: Array<any>) {
    return fn(...args).catch((err: object) => {
      console.log('Ohh noo error');
      console.error(err);
    });
  };
};

const foo = (amount: number): Promise<string> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (amount >= 500) {
        res(`resolved after amount of ${amount}ms`);
      } else {
        rej(`rejected after amount of ${amount}ms`);
      }
    }, amount);
  });
};

const run = async () => {
  let res1 = await foo(900);
  console.log(res1);
  let res2 = await foo(700);
  console.log(res2);
  let res3 = await foo(800);
  console.log(res3);
  let res4 = await foo(200);
  console.log(res4);
  let res5 = await foo(1000);
  console.log(res5);
};

const wrapped = handleErrors(run);
wrapped();
