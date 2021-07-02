import {compose, pipe} from "../utils/funcs.ts"

const shout = (name: string) => name + "!"
const toUpper = (name: string) => name.toUpperCase()
const rev = (name: string) => name.split("").reverse().join("")

let name = "aleks"

let res = compose(shout, toUpper, rev)(name)
let res2 = pipe(shout, rev)(name)
