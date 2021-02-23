# pure functions <a name = "pf"></a>

So what is a pure function?

A pure function is a function that takes a input and returns the same output.
will always be 4.
`2+2=4`
No mather how many times we run the function, we should always get back the sam result if we pass in the same input.

A pure function should not work with any data that comes from the outside world.
for example:

```js
  let name = "Bob"

  const foo () => {
    console.log(name)
  }
```

to solve this problem we simply take the name as a parameter instead.

```js
const foo = name => console.log(name)
```

For example `Array.protoType.push` actually mutates the array when we want to add a new element to the existing array.
Here is a util function how we could use the `Array.protoType.push` in a mure pure and functional way.

```ts
const xs = [1, 2, 3, 4, 5]

const push = <T>(value: T) => (xs: T[]) => {
  const list = [...xs]
  list.push(value)
  return list
}

let newList = push(99)(xs)

console.log(xs)
console.log(newList)
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5, 99 ]
```

A impure function since we working with the DOM, the outside world!

```js
function setColor(R, G, B) {
  const hex = rgbToHex(R, G, B)
  const colorMe = document.getElementById("color-me")
  colorMe.setAttribute("style", "color: " + hex)
}
```

> > do nothing but return output
> > based on nothing but input
