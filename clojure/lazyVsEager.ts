const lazyRepeater = (c: number) => {
  return (letter: string = "") => {
    return "".padStart(c, letter);
  };
};

const A = lazyRepeater(10);

A("A"); // AAAAAAAAAA
A("A"); // AAAAAAAAAA

const eagerRepeater = (c: number, letter: string = "") => {
  let str = "".padStart(c, letter);
  return () => str;
};

const A2 = eagerRepeater(10, "A");

A2(); // AAAAAAAAAA
A2(); // AAAAAAAAAA

const toBinary = (n: number): number => Number((n >>> 0).toString(2));

console.log(toBinary(256));
