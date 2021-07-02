import {pipe} from "../utils/funcs.ts"
const timeOut = (listener: any) => setTimeout(listener, 1000)

const getUrl = () =>
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(res => console.log(res))

getUrl()

const nest = (inner: any) => (outer: any) => (listener: any) => {
  outer((value: any) => {
    inner(listener)
  })
}

const timeURL = pipe(nest(timeOut), nest(getUrl))

console.log(timeURL)
