type T = string;

interface Person {
  [key: string]: T;
}
interface Filters {
  [key: string]: (x: T) => T;
  uppercase: (x: T) => T;
}
const person: Person = {
  name: 'marcell-ciszek',
};

const filters: Filters = {
  deslug: (x: T): T => x.replace('-', ''),
  uppercase: (x: T): T => x.toUpperCase(),
};

const inputVal: any = 'name | deslug | uppercase';

const sections: Array<string> = inputVal.split('|').map((x: T) => x.trim());

const reference: string = person[sections[0]]; // name

const output = sections.slice(1).reduce((prev: string, next: string) => {
  if (filters[next]) {
    return filters[next].call(null, prev);
  }
  if (filters[prev]) {
    return filters[prev].call(null, prev);
  }
  return prev;
}, reference);

export { Person, Filters, filters, sections, inputVal, output };
console.log(output);
