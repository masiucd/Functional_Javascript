<p align="center" <img width=200px height=200px src="https://cdn0.iconfinder.com/data/icons/glyphpack/60/function-128.png" alt="Project logo">
</p>

<h3 align="center">Functional λ💎 programming, JavaScript🄹🅂</h3>

<div align="center">

</div>

---

<p align="center">
  In computer science, functional programming is a programming paradigm, where programs/applications are constructed and composing together using functions.
  It is a Declarative way of writing your code comparing to how you could write it in a Imperative way as well.

In functional programming, functions are treated as first-class citizens, meaning that they can be bound to variables and values, returned from other functions and get passed as arguments, just as any other data type like variables,arrays,vectors ore objects.
Functional programing is based on not causing any side effects and writing and using pure functions, This repo purpose is to go through the very fundamentals in functional programing using `Javascript\TS`.
The rules should be bound to the functional way of writing applications which meaning that any of this concepts/logic works the same in languages like `Haskell`, `Clojure` `Reason ML`, ore `Ocaml`.

</p>
<br>
<hr>

## 📝 Table of Contents

- [About](#about)
- [Tools](#built_using)
- [Thanks to](#acknowledgement)

## 🧐 About <a name = "about"></a>

`FP` is mindset a workflow another way of thinking when writing code.

`Imperative code`: follow my commands, do this then that.
`Declarative code`: I want this, so give me that.
`OOP`: Keep state to yourself send/receive messages.
`FP`: ???

Functional programming is about:

1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2. Pure functions - the same input always gives the same output

3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

**Why should we care?**
`FP` make the code more predictable and safer to use, easier to test and debug.
Writing function code in `JS` feel more of the nature with `JS` with first class functions.

**Imperative**

```js
let a = 99
let b = 21

console.log(`a = ${a} and b = ${b}`)
```

**Declarative**

```js
const identity = n => {
  return `n = ${n}`
}

identity(99)
identity(21)
```

<!-- **Functional concepts** -->

<!-- - [📝 Table of Contents](#-table-of-contents) -->
<!-- - [🧐 About ](#-about-) -->
<!-- - [⛏️ Tools in project ](#️-tools-in-project-) -->

    <!-- - [curried functions ](#curried-functions-) -->
    <!-- - [pure functions ](#pure-functions-) -->

  <!-- - [partial application ](#partial-application-) -->
  <!-- - [compose and pipe function ](#compose-and-pipe-function-) -->
  <!-- - [List transform ](#list-transform-) -->
  <!-- - [Higher order functions ](#higher-order-functions-) -->
  <!-- - [Immutable](#immutable-) -->
  <!-- - [Transduction](#transduction-) -->
  <!-- - [Monad](#monad) -->
  <!-- - [Function inputs](#fn-inp) -->
  <!-- - [✍️ Authors <a name = "authors"></a>](#️-authors-) -->
  <!-- - [🎉 Thanks to <a name = "acknowledgement"></a>](#-thanks-to-) -->

## ⛏️ Tools in project <a name = "built_using"></a>

- [JS](https://developer.mozilla.org/en-US/) - JavaScript
- [TS](https://www.typescriptlang.org/) - Typescript

<!-- ## partial application <a name = "ps"></a>

Partial application works similarly to a curried function, instead you don't use all your function calls at once at you instead pre load the functions with some values, that in alter point using the final argument/arguments, for example with a http request where we can preloaded the `URL` and the add a given endpoint and for the last part add a callback function.

```js
const getData = baseURL => endPoint => cb => {
  const responseData = fetch(`${baseURL}/${endPoint}`)
    .then(data => data.json())
    .then(d => cb(d))
    .catch(err => console.error(err))

  return responseData
}

const jsP = getData("https://jsonplaceholder.typicode.com")
const users = jsP("users")
const posts = jsP("posts")

users(x => console.log(x.map(u => u.name))) // [list of names]
posts(x => console.log(x.map(u => u.title))) // [list of posts]
```

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
const compose = (...fns: FunctionTypes[]) => <T>(val: T) =>
  fns.reduce((currentValue: T, currentFunction: Function) => currentFunction(currentValue), val)
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

Classes is not common ore actually not implemented at all in functional languages like `Haskell` or `O caml`. The reason is that classes are not a pure and immutable way of writing our objects, but to show a example how we could make a pure instance of a class with a Javascript example, take look:

```ts
export class ImmutableGlass {
  name: string
  amount: number
  constructor(name: string, amount: number) {
    this.name = name
    this.amount = amount
  }
  drink(value: number) {
    return new ImmutableGlass(this.name, this.amount - value)
  }
}

const glass = new ImmutableGlass("pepsi", 100)

const newDrink = glass.drink(20)
console.log(glass) // still {name:"pepsi", amount:100}
console.log(newDrink) // {name:"pepsi", amount:80}
```

instead of directly mutate the amount property we create a new class and return it.

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

<hr/>

## Function inputs <a name = "fn-inp">

```ts
const unary = (fn: Function) => <T>(arg: T) => fn(arg)
;["1", "2", "3", "4", "5", "6", "7", "8"].map(parseInt)
// [
//   1, NaN, NaN, NaN,
// NaN, NaN, NaN, NaN
// ]
;["1", "2", "3", "4", "5", "6", "7", "8"].map(unary(parseInt))
/**
 *  [
  1, 2, 3, 4,
  5, 6, 7, 8
]
 */
```

This will happened just of how `parseint` works, it takes a str and a radix as a second argument.
the unary function will help us to ignore the radix argument and get the expected result.

Also a common utility function used by FP:s is a function that takes a argument and does nothing other then returning it.

```ts
const identity = <T>(value: T): T => value
```

```ts
const words = " hello world...".split(/\s|\b/)
// [ "", "hello", "world", "..." ]
const filterWords = words.filter(identity)
// [ "hello", "world", "..." ]
```

The identity simply returns it's input and since filter weill remove all it's falsy values in this case we simply remove the first index of whitespace in our list

```ts
export const output = <T>(input: T, formatFn: Function = identity): T => {
  return formatFn(input)
}

export const uppercase = (s: string): string => s.toUpperCase()

const helloWithNoChange = output("hello") // hello

const helloToUpper = output<string>("hello", uppercase) // HELLO
```

In this case we will always be sure that either we return the same input if no extra function is provided as a second argument or we will transform our input.

```ts
const sum = (x: number, y: number) => {
  return x + y
}

const spreadArgs = (fn: Function) => <T>(argsList: T[]) => fn(...argsList)

const giveMeTheResult = (fn: any) => {
  return fn([1, 2])
}

console.log(giveMeTheResult(spreadArgs(sum))) // 3
```

To make this example to work we need a helper function like `spreadArgs` in this case to spread out the values in the array and use them in our sum function.

We can also create a function that will do the opposite then `spreadArgs`, lets call it `gatherArgs`.

```ts
const gatherArgs = (fn: Function) => <T>(...args: T[]) => fn(args)
```

So let's apply `gatherArgs` into a `reduce`

```ts
const gatherArgs = (fn: Function) => <T>(...args: T[]) => fn(args)

const foo = ([a, b]: number[]) => {
  return a + b
}

;[1, 2, 3, 4, 5].reduce(gatherArgs(foo)) // 15
```

```ts
const partial = <T>(fn: Function, ...presetArgs: T[]) => <T>(...laterArgs: T[]) =>
  fn(...presetArgs, ...laterArgs)

const add = (a: number, b: number) => a + b

const xs = [1, 2, 3].map(partial(add, 10)) // [11, 12, 13]
```

presentArgs in this case will be `[10,10,10]`. ry to use the `partial` function to understand how it works.

## ✍️ Authors <a name = "authors"></a>

Me [Marcell Ciszek Druzynski]()

## 🎉 Thanks to <a name = "acknowledgement"></a>

- Kent C. Dodds, Kyle Simpson, Kyle Shevlin,
- FreeCode camp, Egghead io. -->
