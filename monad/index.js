const just = val => ({ map, chain, ap })

const map = fn => val => just(fn(val))

// aka flatmap
const chain = fn => val => fn(val)

const ap = anotherMonad => val => anotherMonad.map(val)

let six = just(6)
let seven = x.map(x => x + 1)

console.log(six)
console.log(seven)
