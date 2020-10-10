const crocks = require("crocks")
const propPath = require("crocks/Maybe/propPath")
const { safe, isNumber, Maybe } = crocks

const user = {
  username: "tester",
  email: "test@gmail.com",
  address: {
    street: "111 E. West St",
    city: "Anywhere",
    state: "PA",
    postalCode: "19123-4567",
  },
}

const getState = propPath(["address", "state"])
const zip = getState(user).option()
