const Just = val => ({ map, chain, ap })

const map = fn => val => Just(fn(val))

// aka flatmap
const chain = fn => val => fn(val)

const ap = anotherMonad => val => anotherMonad.map(val)

let six = Just(6)
let seven = six.map(v => v + 1)

const identity = x => x

let res = seven().chain(identity)

let user1 = Just("user1")
let user2 = Just("user2")

const tuple = x => y => [x, y]

const users = user1.map(tuple)().ap(user2)

const Nothing = () => ({ map: Nothing, chain: Nothing, ap: Nothing })
const Maybe = { Just, Nothing, of: Just }
