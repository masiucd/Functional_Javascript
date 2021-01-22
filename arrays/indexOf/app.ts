;(() => {
  const names: string[] = ["Bobby", "Marco", "Stina", "Liam"]

  if (names.indexOf("Linda") === -1) {
    // index -1 if value doe not exists
    names.push("Linda") // / now linda will always be in the array
  }
})()
