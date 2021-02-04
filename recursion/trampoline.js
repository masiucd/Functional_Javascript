function trampoline(fn) {
  return (...args) => {
    let result = fn(...args)
    while (typeof result === "function") {
      result = result()
    }
    return result
  }
}

const isVowel = char => ["a", "e", "i", "o", "u"].includes(char)

let countVowels = trampoline((count, str) => {
  count += isVowel(str[0]) ? 1 : 0
  if (str.length <= 1) return count
  return () => countVowels(count, str.slice(1))
})

countVowels = R.curry(2, countVowels)(0)

console.log(countVowels)
