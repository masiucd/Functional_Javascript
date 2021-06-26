import {Fn} from "../utils/types.ts"

const Box = <T>(x: T) => ({
  map: (fn: Fn) => Box(fn(x)),
  inspect: () => `Box(${x})`,
  fold: (fn: Fn) => fn(x),
})

const Right = <T>(x: T) => ({
  map: (fn: Fn) => Right(fn(x)),
  fold: (f: Fn, g: Fn) => g(x),
  inspect: () => `Right(${x})`,
})

const Left = <T>(x: T) => ({
  map: (fn: Fn) => Left(x),
  fold: (f: Fn, g: Fn) => f(x),
  inspect: () => `Left(${x})`,
})

const result = Right(2)
  .map(x => x * 2)
  .map(x => x / 2)
  .fold(
    x => "oops we got an error",
    x => x
  )

const users = {
  bruce: "Bruce Wayne",
  peter: "Peter Parker",
  bob: "Bobby Something",
}

const findUser = (userName: keyof typeof users) => {
  const found = users[userName]
  return found ? Right(found) : Left(null)
}

const res = findUser("bruce")
  .map(x => x.slice(0, 1).toLowerCase() + x.slice(1))
  .fold(
    x => "Ohh nnooo",
    x => x
  )
