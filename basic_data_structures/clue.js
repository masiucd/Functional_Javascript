const game = {};

game.murderer = "??";
game["weapons"] = ["stick", "hammer", "knife", "pistol"];
game.characters = [
  { name: "Tina", age: 21, gender: 1 },
  { name: "Logan", age: 23, gender: 0 },
  { name: "Mia", age: 42, gender: 1 },
];

function listAllChars(obj) {
  return obj.characters.map(
    (char) =>
      `${char.name} is ${char.age} years old and ${
        char.gender === 1 ? "she is" : "he is"
      } ${char.gender === 0 ? "male" : "female"}`,
  );
}

function addChar(obj, char) {
  obj.characters.push(char);
}

// console.log(listAllChars(game));

addChar(game, { name: "Hector", age: 31, gender: 0 });

console.log(game.characters);
