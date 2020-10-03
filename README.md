<p align="center" <img width=200px height=200px src="https://cdn0.iconfinder.com/data/icons/glyphpack/60/function-128.png" alt="Project logo">
</p>

<h3 align="center">Functional λ💎 programming, JavaScript🄹🅂</h3>

<div align="center">

</div>

---

<p align="center">
Writing functional programming is a very powerful programming paradigm that I really like and trying to get better at for every day. I think it is a massive trend nowadays. Many people see the benefits of writing functional programs that are based on pure functions and to avoid side effects in your programs.
</p>
<br>
<hr>

## 📝 Table of Contents

- [About](#about)
- [Tools](#built_using)
- [Thanks to](#acknowledgement)

## 🧐 About <a name = "about"></a>

Functional programming is about:

1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2. Pure functions - the same input always gives the same output

3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

```sh
  git clone <Project url>
  cd into <Project>

```

And have fun!
Nothing to install!

## 🔧 Running the tests <a name = "tests"></a>

Will run the test inside test folder

```bash
  yarn test
  # or
  yarn test --watch
```

**Functional concepts**

- [Currying](#curry)
- [pure functions](#pf)
- [partial applications](#pa)
- [mutable vs immutable](#mi)
- [function composition](#fc)
- [point free programming](#pfp)
- [reduce function](#rf)
- [recursion](#rcc)
- [compose](#compose)
- [list-transform](#**list-transform**)
- [function shapes](#shapes)
- [higher order functions](#hof)
- [Immutable](#imdb)
- [basic data structures in JavaScript](#bdij)

## ⛏️ Tools in project <a name = "built_using"></a>

- [JS](https://developer.mozilla.org/en-US/) - JavaScript
- [TS](https://www.typescriptlang.org/) - Typescript

## curried functions <a name = "curry"></a>

## pure functions <a name = "pf"></a>

So what is a pure function?
We always expect to take some input and return some output.
I can take the ruturn value and replace the function call with the return.
You receive the same output for every same input, for every time you call the function.

## partial application <a name = "ps"></a>

## compose and pipe function <a name = "compose"></a>

See compose as a effective machine that compose on value into another value.
Like a candy factory , first the candy is mixed with the ingredients (_fn1_),
then it gets its shape _(fn2)_ , then it get its color _(fn3)_ at least it get its taste _(fn3)_. **Function composition** 🚀λ🤩

```js
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
```

with **Typescript**

```ts
const compoese = (...fns: FunctionTypes[]) => <T>(val: T) =>
  fns.reduce(
    (currentValue: T, currentFunction: Function) =>
      currentFunction(currentValue),
    val
  );
```

## List transform <a name = "list-transform"></a>

```js
const game = {
  suspects: [
    {
      name: "Aleks",
      color: "red",
    },
    {
      name: "Bob",
      color: "blue",
    },
  ],
};

/**
 *
 * @param {Array} list
 */
function render(list) {
  return list.map((item) => {
    let obj = {
      name: item.name.toUpperCase(),
      color: item.color.toUpperCase(),
    };
    return obj;
  });
}

// console.log(render(game["suspects"]));

function print() {
  for (let val of game["suspects"]) {
    console.log(val);
  }
}

const print2 = () => {
  game["suspects"].forEach((val) => console.log(val));
};

function findMurderer() {
  for (let val of game.suspects) {
    for (let key in val) {
      if (val[key].toLowerCase() === "bob") {
        console.log("found the murderer");
      }
    }
  }
}
```

## Higher order functions <a name = "hof"></a>

## Immutable <a name = "imdb"></a>

what is read only ?
A data structure that can be read but not written to. A important concept of Immutability.

```ts
type Fn1 = (x: number) => number;

type FunctionsType = Fn1;

export const addByOne = (x: number) => x + 1;
export const pow = (x: number) => x * x;

const doSomeMathPlease = (x: number, fn: FunctionsType) => fn(x);

let giveMeSix = doSomeMathPlease(5, addByOne); // 6
let giveMe25 = doSomeMathPlease(5, pow); // 25
```

## ✍️ Authors <a name = "authors"></a>

Me [Marcell Ciszek Druzynski](#)

## 🎉 Thanks to <a name = "acknowledgement"></a>

- Kent C. Dodds, Kyle Simpson, Kyle Shevlin, Tyler Clark, Bianca Gandolfo
- FreeCode camp, Egghead io , LevelUp Tutorials

For all the inspiration.
