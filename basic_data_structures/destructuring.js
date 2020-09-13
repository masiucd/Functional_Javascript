const char = {
  name: "Rusty",
  room: "kitchen",
  weapon: "knife",
};

const { name, room, weapon } = char;

function swap(a, b) {
  // If not using temp we would override the a variable
  let before = { a, b };
  let temp = a;
  a = b;
  b = temp;

  let after = { a, b };
  return ["before ", before, "after", after];
}

const swap2 = (a, b) => {
  const [one, two] = [b, a];
  return { one, two };
};

console.log(swap2(3, 22));
