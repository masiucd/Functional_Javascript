const prop = require("crocks/Maybe/prop")

const getUser = id => {
  new Promise((res, rej) => {
    const result = {
      status: 200,
      body: {
        id: 1,
        username: "tester",
        email: "test@gmail.com",
        address: {
          street: "111 E. West St",
          city: "Anywhere",
          state: "PA",
          postalCode: "19123-4567",
        },
      },
    }
    res(prop("body", result))
  })
}

module.exports = { getUser }
