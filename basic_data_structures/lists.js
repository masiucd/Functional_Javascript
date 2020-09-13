const game = {
  suspects: [
    { name: "Aleks", color: "red" },
    { name: "Bob", color: "blue" },
  ],
};

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
