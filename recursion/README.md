# Recursion

When we used to talk about recursion we compare a iterative approach to a recursive approach.
In `FP` it is more common to use recursion.

_Iteration_

- imperative
- looping
- stateful

_Recursion_

- functional
- self-referential
- stateless

`sum all numbers with iteration`

```js
const sum = (xs: number[]) => {
  let res = 0
  for (let i = 0; i < xs.length; i++) {
    res += xs[i]
  }
  return res
}
```

`sum all numbers with recursion`

```js
const sum = (xs: number[]): number => (xs.length === 1 ? xs[0] : xs[0] + sum(xs.slice(1)))
```
