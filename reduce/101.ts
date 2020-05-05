const data = [10, 15, 30];

function reducer(accumulator: number, item: number): number {
  return accumulator + item;
}

const initialValue = 0;

const total = data.reduce(reducer, initialValue);

const xs = data.reduce((acc: number, cur: number) => acc + cur, 10);
