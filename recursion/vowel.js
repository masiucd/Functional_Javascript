const isVowel = (char) => ["a", "e", "i", "o", "u"].includes(char);

/**
 *
 * @param {string} str
 */
const countVowels = (str) => {
  let c = 0;
  str.split("").forEach((char) => {
    if (isVowel(char)) {
      c++;
    }
  });
  return c;
};
/**
 *
 * @param {string} str
 */
const countVowels2 = (str) => {
  return str.split("").filter((char) => isVowel(char)).length;
};
/**
 *
 * @param {string} str
 */
const countVowels3 = (str) => {
  let first = isVowel(str[0]) ? 1 : 0;
  if (str.length === 0) return 0;
  return first + countVowels3(str.slice(1));
};

//console.log(countVowels3("hello world"));

