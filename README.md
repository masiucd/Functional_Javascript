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

* [About](#about)
* [Tools](#built_using)
* [Thanks to](#acknowledgement)

## 🧐 About <a name = "about"></a>

Functional programming is about:

1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2. Pure functions - the same input always gives the same output

3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

**Functional concepts**

* [Currying](#curry)
* [pure functions](#pf)
* [partial applications](#pa)
* [mutable vs immutable](#mi)
* [function composition](#fc)
* [point free programming](#pfp)
* [reduce function](#rf)
* [recursion](#rcc)
* [compose](#compose)
* [list-transform](#**list-transform**)
* [function shapes](#shapes)
* [higher order functions](#hof)
* [Immutable](#imdb)
* [basic data structures in JavaScript](#bdij)
* [Transduction](#transduction)

## ⛏️ Tools in project <a name = "built_using"></a>

* [JS](https://developer.mozilla.org/en-US/) - JavaScript
* [TS](https://www.typescriptlang.org/) - Typescript

## curried functions <a name = "curry"></a>

## pure functions <a name = "pf"></a>

So what is a pure function?
We always expect to take some input and return some output.
I can take the ruturn value and replace the function call with the return.
You receive the same output for every same input, for every time you call the function.

## partial application <a name = "ps"></a>

## compose and pipe function <a name = "compose"></a>

See compose as a effective machine that compose one value into another value.
Like a candy factory , first the candy is mixed with the ingredients (_fn1_), 
then it gets its shape _(fn2)_ , then it get its color _(fn3)_ at least it get its taste _(fn3)_. **Function composition** 🚀λ🤩

``` js
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
```

with **Typescript**

``` ts
const compoese = (...fns: FunctionTypes[]) => <T>(val: T) =>
  fns.reduce(
    (currentValue: T, currentFunction: Function) =>
      currentFunction(currentValue),
    val,
  );
```

## List transform <a name = "list-transform"></a>

``` js
const game = {
    suspects: [{
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

# <<<<<<< HEAD

## Immutable <a name = "imdb"></a>

what is read only ?
A data structure that can be read but not written to, that never has to be mutated. A important concept of Immutability.

``` js
// How to make a read only Data structure in Js with Object.freeze.

const dog = {
    name: "doggie",
    legs: 4,
    breed: "pug",
};

const immutableDog = Object.freeze(dog);

dog.name = "Boris";
immutableDog.name = "Logan";

// We still have
/**
 * dog = { name: 'doggie', legs: 4, breed: 'pug' }
 * immutableDog = { name: 'doggie', legs: 4, breed: 'pug' }
 */

const foo = {
    a: "hello",
    b: 45,
    obj: {
        h: 10,
    },
};

const fooI = Object.freeze(foo);

foo.a = "bye";
foo.obj.h = 20; // will be 20

// console.log(foo);
// object.freeze will not make a deep freeze on the object
```

``` ts
type Fn1 = (x: number) => number;

type FunctionsType = Fn1;

export const addByOne = (x: number) => x + 1;
export const pow = (x: number) => x * x;

const doSomeMathPlease = (x: number, fn: FunctionsType) => fn(x);

let giveMeSix = doSomeMathPlease(5, addByOne); // 6
let giveMe25 = doSomeMathPlease(5, pow); // 25
```

## λ Transduction <a name = "transduction"></a>

Transduction is a way how we can transform our function in a shape the we want in a mathimtical way. For example when we want to compose our functions.
Declarative way not imperative.
 >> Reshapes our functions
 >> compositions of reducers

## ✍️ Authors <a name = "authors"></a>

Me [Marcell Ciszek Druzynski](#)

## 🎉 Thanks to <a name = "acknowledgement"></a>

* Kent C. Dodds, Kyle Simpson, Kyle Shevlin, Tyler Clark, Bianca Gandolfo
* FreeCode camp, Egghead io , LevelUp Tutorials

For all the inspiration.
