const person = {
  name: 'marcell-ciszek',
};

const filters = {
  deslug: x => x.replace('-', ''),
  uppercase: x => x.toUpperCase(),
};

const input = 'name | deslug | uppercase';

const sections = input.split('|').map(x => x.trim());

const reference = person[sections[0]];

const output = sections.slice(1).reduce((prev, next) => {
  if (filters[next]) {
    return filters[next].call(null, prev);
  }
  if (filters[prev]) {
    return filters[prev].call(null, prev);
  }
  return prev;
}, reference);

console.log(output);
