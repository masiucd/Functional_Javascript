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

**Functional concepts**

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About ](#-about-)
- [⛏️ Tools in project ](#️-tools-in-project-)
- [curried functions ](#curried-functions-)
- [pure functions ](#pure-functions-)
- [partial application ](#partial-application-)
- [compose and pipe function ](#compose-and-pipe-function-)
- [List transform ](#list-transform-)
- [Higher order functions ](#higher-order-functions-)
- [Immutable](#immutable-)
- [Transduction](#transduction-)
- [Monad](#monad)
- [✍️ Authors <a name = "authors"></a>](#️-authors-)
- [🎉 Thanks to <a name = "acknowledgement"></a>](#-thanks-to-)

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

See compose as a effective machine that compose one value into another value.
Like a candy factory , first the candy is mixed with the ingredients (_fn1_),
then it gets its shape _(fn2)_ , then it get its color _(fn3)_ at least it get its taste _(fn3)_. **Function composition** 🚀λ🤩

```js
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
```

with **Typescript**

```ts
const compoese = (...fns: FunctionTypes[]) => <T>(val: T) =>
  fns.reduce(
    (currentValue: T, currentFunction: Function) =>
      currentFunction(currentValue),
    val
  )
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
}

/**
 *
 * @param {Array} list
 */
function render(list) {
  return list.map(item => {
    let obj = {
      name: item.name.toUpperCase(),
      color: item.color.toUpperCase(),
    }
    return obj
  })
}

// console.log(render(game["suspects"]));

function print() {
  for (let val of game["suspects"]) {
    console.log(val)
  }
}

const print2 = () => {
  game["suspects"].forEach(val => console.log(val))
}

function findMurderer() {
  for (let val of game.suspects) {
    for (let key in val) {
      if (val[key].toLowerCase() === "bob") {
        console.log("found the murderer")
      }
    }
  }
}
```

## Higher order functions <a name = "hof"></a>

## Immutable <a name = "imdb"></a>

what is read only ?
A data structure that can be read but not written to, that never has to be mutated. A important concept of Immutability.

```js
// How to make a read only Data structure in Js with Object.freeze.

const dog = {
  name: "doggie",
  legs: 4,
  breed: "pug",
}

const immutableDog = Object.freeze(dog)

dog.name = "Boris"
immutableDog.name = "Logan"

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
}

const fooI = Object.freeze(foo)

foo.a = "bye"
foo.obj.h = 20 // will be 20

// console.log(foo);
// object.freeze will not make a deep freeze on the object
```

```ts
type Fn1 = (x: number) => number

type FunctionsType = Fn1

export const addByOne = (x: number) => x + 1
export const pow = (x: number) => x * x

const doSomeMathPlease = (x: number, fn: FunctionsType) => fn(x)

let giveMeSix = doSomeMathPlease(5, addByOne) // 6
let giveMe25 = doSomeMathPlease(5, pow) // 25
```

Trampoline , how to prevent a stack over flow when working with recursion.
What we want is to move between 0 and 1 , this what the trampoline technique actually does.

```js
function trampoline(fn) {
  return (...args) => {
    let result = fn(...args)
    while (typeof result === "function") {
      result = result()
    }
    return result
  }
}

const isVowel = char => ["a", "e", "i", "o", "u"].includes(char)

let countVowels = trampoline((count, str) => {
  count += isVowel(str[0]) ? 1 : 0
  if (str.length <= 1) return count
  return () => countVowels(count, str.slice(1))
})

countVowels = R.curry(2, countVowels)(0)
```

## Transduction <a name = "transduction"></a>

A mathematical way how we can change/transform the shape of our functions.
For example we want to compose ore pipe our functions but they are not in the given shape, we will make a transduction.

```ts
const addOne = (x: number): number => x + 1
const removeOne = (x: number): number => x - 1
const odd = (x: number): boolean => x % 2 !== 0

const mapWithReduce = <T>(arr: T[], mappingFn: Function) => {
  return arr.reduce((list: T[], v) => {
    list.push(mappingFn(v))
    return list
  }, [])
}

const filterWithReduce = <T>(arr: T[], predicateFn: Function) => {
  return arr.reduce((list: T[], v) => {
    if (predicateFn(v)) list.push(v)
    return list
  }, [])
}

let list = [2, 5, 100, 23, 45, 24, 17, 19, 3, 4, 5, 6]

let increase = mapWithReduce(list, addOne)
let oddList = filterWithReduce(list, odd)
```

## Monad <a name = "monad"></a>

a wrapper around a value with different kind of behaviors, that is going to make it easier to work with other values in a specific way.
Monad is a kind of a functor, any value that we can map a operation over it is a functor

## ✍️ Authors <a name = "authors"></a>

Me [Marcell Ciszek Druzynski]()

## 🎉 Thanks to <a name = "acknowledgement"></a>

- Kent C. Dodds, Kyle Simpson, Kyle Shevlin, Tyler Clark, Bianca Gandolfo
- FreeCode camp, Egghead io , LevelUp Tutorials

For all the inspiration.
