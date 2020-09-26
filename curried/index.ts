interface Bound {
  id: number;
  departure: string;
  arrival: string;
}

interface Flight {
  id: string;
  bounds: Bound[];
}

const flights: Flight[] = [
  {
    id: "sada2121!!",
    bounds: [
      {
        id: 1,
        departure: "Fri Sep 25 2020 12:21:29",
        arrival: "Fri Sep 25 2020 22:21:29",
      },
      {
        id: 2,
        departure: "Fri Sep 26 2020 05:21:29",
        arrival: "Fri Sep 26 2020 14:21:29",
      },
    ],
  },
];

const getArrLength = <T>(list: Array<T>): number => {
  return list.length;
};

const isValidLength = (fn: Function) => (compareLength: number) => <T>(
  list: Array<T>,
) => fn(list) > compareLength;

// console.log(isValidLength(getArrLength)(2)(flights));
