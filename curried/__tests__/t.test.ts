import {assertEquals} from "../../package.ts"
import {split, replace} from "../102.ts"

Deno.test({
  name: "curried split",

  fn: () => {
    // Sentence should bi split into words with a curried function
    const words = split(" ")

    const sentence = "hello my name is mike and I am 25 years old"

    const sentenceInSeparateWords = words(sentence)

    const expected = 11

    assertEquals(sentenceInSeparateWords.length, expected)
  },
})

Deno.test({
  name: "Replace curried",
  fn: () => {
    const nonVowels = replace(/[aeiuou]/gi)

    const sentence = "hello my name is mike and I am 25 years old"

    const preparedSentenceWithNonVowels = nonVowels(sentence)

    const sentenceReplacedWithHash = preparedSentenceWithNonVowels("#")
    const sentenceReplacedWithExclamation = preparedSentenceWithNonVowels("!")

    assertEquals(sentenceReplacedWithHash, "h#ll# my n#m# #s m#k# #nd # #m 25 y##rs #ld")
    assertEquals(sentenceReplacedWithExclamation, "h!ll! my n!m! !s m!k! !nd ! !m 25 y!!rs !ld")
  },
})
