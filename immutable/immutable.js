// How to make a read only Data structure in Js with Object.freeze.

const dog = {
  name: "doggie",
  legs: 4,
  breed: "pug",
};

const immutableDog = Object.freeze(dog);

dog.name = "Boris";
immutableDog.name = "Logan";

// We still have
/**
 * dog = { name: 'doggie', legs: 4, breed: 'pug' }
 * immutableDog = { name: 'doggie', legs: 4, breed: 'pug' }
 */

const foo = {
  a: "hello",
  b: 45,
  obj: {
    h: 10,
  },
};

const fooI = Object.freeze(foo);

foo.a = "bye";
foo.obj.h = 20; // will be 20

// console.log(foo);
// object.freeze will not make a deep freeze on the object
