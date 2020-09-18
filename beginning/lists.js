const game = {
  suspects: [
    { name: "Aleks", color: "red" },
    { name: "Bob", color: "blue" },
  ],
};

const transform = (game) =>
  Object.entries(game.suspects).forEach((val, i) => {
    console.log(val["1"]);
  });

console.log(transform(game));

/**
 *
 * @param {Array} list
 */
function render(list) {
  return list.map((item) => {
    let obj = {
      name: item.name.toUpperCase(),
      color: item.color.toUpperCase(),
    };
    return obj;
  });
}

// console.log(render(game["suspects"]));

function print() {
  for (let val of game["suspects"]) {
    console.log(val);
  }
}

const print2 = () => {
  game["suspects"].forEach((val) => console.log(val));
};

const findMurderer = () => {
  for (let val of game.suspects) {
    for (let key in val) {
      if (val[key].toLowerCase() === "bob") {
        console.log("found the murderer");
        break;
      }
    }
  }
};

function bar(list) {
  for (let i = 0; i < list.length; i++) {
    console.log("i is > ", i);
    for (let j = 0; j < list.length; j++) {
      console.log("j is > ", j);
    }
  }
}

function foo([a, b, ...rest] = []) {
  return Math.floor([...rest].reduce((a, b) => (a * b) / 2.5, 1));
}

let nums = [5, 6, 7, 8, 9];
// console.log(foo([1, 2, 3, 4, ...nums]));
