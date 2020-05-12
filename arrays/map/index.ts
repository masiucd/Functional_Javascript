interface Person {
  name: string;
}
const items: string[] = ['1', '2', '3', '4', '5'];

const itemsNumbers = items.map(x => Number(x) * 2);

const namesArray = ['Mike', 'Sally'];

const persons: Person[] = namesArray.map(x => ({ name: x }));
