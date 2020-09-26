const strBuilder: Function = (str: string = "") => {
  return function next(n: string = "") {
    if (typeof n === "string") {
      console.log(str, n);
      return strBuilder(str + n);
    }
  };
};

const hello = strBuilder("Hello, ");
const kyle = hello("Kyle");
const susan = hello("Susan");
const question = kyle("?")();
const greeting = susan("!")();

// console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.");
// console.log(hello() === "Hello, ");
// console.log(kyle() === "Hello, Kyle");
// console.log(susan() === "Hello, Susan");
// console.log(question === "Hello, Kyle?");
// console.log(greeting === "Hello, Susan!");
