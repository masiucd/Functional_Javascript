export const split = (delimiter: string) => (x: string) => x.split(delimiter)

const words = split(" ")

const sentence = "hello my name is mike and I am 25 years old"

const sentenceInSeparateWords = words(sentence)

export const replace = (re: RegExp) => (x: string) => (replaceMent: string) =>
  x.replace(re, replaceMent)

const nonVowels = replace(/[aeiuou]/gi)

const preparedSentenceWithNonVowels = nonVowels(sentence)

const sentenceReplacedWithHash = preparedSentenceWithNonVowels("#")
const sentenceReplacedWithExclamation = preparedSentenceWithNonVowels("!")
