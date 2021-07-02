// We have captured the closure
let i = 0
const closure = (): void => {
  ++i
  console.log(i)
}

closure() // 1
closure() // 2
closure() // 3

// i would be a new valiu for every function call
const nonClosure = (): void => {
  let i = 0
  ++i
  console.log(i)
}

closure() // 1
closure() // 1
closure() // 1
