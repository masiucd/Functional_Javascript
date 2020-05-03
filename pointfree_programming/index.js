// Point free programming
//  for making easier testing functions
// and of course more readability when working in team

const arr = [1, 2, 3];

// Worse

const double = arr.map(x => x * 2); // we don't know what x is , except that it is some kind of data

// Better

const double2 = n => n * 2;

const doubleMyArrayValues = arr.map(double2);

console.log(doubleMyArrayValues);

// another example

const names = ['Bob', 'Korek', 'Pysia', 'Logan', 'Tina'];

// worse
const namesEndsWithA = names.filter(
  name => name[name.length - 1] === 'a'.toLowerCase()
);

// Better

const filterNames = name => name[name.length - 1] === 'a'.toLowerCase();

const namesEndsWithA2 = names.filter(filterNames);

console.log(namesEndsWithA2);
