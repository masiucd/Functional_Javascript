let i = 0 // we need to keep the i outside the function so we can have a closure
// otherwise if we define the i inside the function body we would get a new recreated i for every function call
const callback = (name: string) => {
  console.log(`${name} I am a callback called ${++i} times`)
}

const someRandomFunction = (fn: (name: string) => void) => {
  fn("a")
  fn("b")
  fn("c")
  fn("d")
}

someRandomFunction(callback)
