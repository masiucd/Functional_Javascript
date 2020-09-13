<p align="center" <img width=200px height=200px src="https://cdn0.iconfinder.com/data/icons/glyphpack/60/function-128.png" alt="Project logo">
</p>

<h3 align="center">functional programming , Javascript</h3>

<div align="center">

</div>

---

<p align="center">
Writing functional programming is a very powerful programing paradigm that I really like and trying to get better at for every day. I think it is a really big trend now a days. Many people see the benefits of writing functional programs that are based on pure functions and to avoid side effects in your programs.
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

And Have fun!
Nothing to install!

## 🔧 Running the tests <a name = "tests"></a>

Will run the test inside test folder

```bash
  yarn test
  # or
  yarn test --watch
```

**Functional concepts**

- Currying
- pure functions
- partial applications
- mutable vs immutable
- function composition
- point free programming
- reduce function
- recursion
- [list-transform](#**list-transform**)
- [compose](#**compose_pipe**)
- basic data structures in javascript

## ⛏️ Tools in project <a name = "built_using"></a>

- [JS](https://developer.mozilla.org/en-US/) - Javascript
- [TS](https://www.typescriptlang.org/) - Typescript

## compose and pipe function <a name = "compose_pipe"></a>

```js
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
```

## List transform <a name = "list-transform"></a>

```js
const game = {
  suspects: [
    { name: "Aleks", color: "red" },
    { name: "Bob", color: "blue" },
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

## ✍️ Authors <a name = "authors"></a>

- [@masiuciszek](https://github.com/masiuciszek) 😎🥁

## 🎉 Thanks to <a name = "acknowledgement"></a>

- Kent C. Dodds, Kyle Simpson, Kyle Shevlin, Tyler Clark, Bianca Gandolfo
- FreeCode camp, Egghead io , LevelUp Tutorials

For all the insperation.
