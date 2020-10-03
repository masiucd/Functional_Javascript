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
