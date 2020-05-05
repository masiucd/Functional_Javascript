const data = [[1, 2, 3], [4, 5, 6], [7, 8, [2, 1, 2], 9], [[]]];

// easy way
const flatData = data.reduce((acc, num) => acc.concat(...num), []);

const input = [
  {
    title: 'Batman Begins',
    year: 2005,
    cast: [
      'Christian Bale',
      'Michael Caine',
      'Liam Neeson',
      'Katie Holmes',
      'Gary Oldman',
      'Cillian Murphy',
    ],
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    cast: [
      'Christian Bale',
      'Heath Ledger',
      'Aaron Eckhart',
      'Michael Caine',
      'Maggie Gyllenhal',
      'Gary Oldman',
      'Morgan Freeman',
    ],
  },
  {
    title: 'The Dark Knight Rises',
    year: 2012,
    cast: [
      'Christian Bale',
      'Gary Oldman',
      'Tom Hardy',
      'Joseph Gordon-Levitt',
      'Anne Hathaway',
      'Marion Cotillard',
      'Morgan Freeman',
      'Michael Caine',
    ],
  },
];

const actors = input.reduce((acc, val) => {
  val.cast.forEach(actor => {
    if (acc.indexOf(actor) === -1) {
      acc.push(actor);
    }
  });
  return acc;
}, []);
