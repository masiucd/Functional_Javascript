const names = ['Bobby', 'Marco', 'Stina', 'Liam'];

// console.log(names.indexOf('bolek')); // if not exists then we get back -1

if (names.indexOf('Linda') === -1) {
  names.push('Linda'); // / now linda will always be in the array
}
