const crocks = require("crocks")

const { safe, isNumber } = crocks
const { and, liftA2 } = require("crocks")

const divide = a => b => a / b

const safeNumber = safe(isNumber)

const notZero = safe(and(isNumber, x => x !== 0))

const safeDivide = crocks.curry((x, y) =>
  liftA2(divide, safeNumber(x), notZero(y)),
)

let safeDivedeRes = safeDivide(36, 6).option()
let safeDivedeRes2 = safeDivide(36, 0).option()

console.log(safeDivedeRes)
console.log(safeDivedeRes2)
