;(() => {
  const xs = [1, 2, 3, 4, 5]

  const push = <T>(value: T) => (xs: T[]) => {
    const list = [...xs]
    list.push(value)
    return list
  }

  let newList = push(99)(xs)

  console.log(xs)
  console.log(newList)
})()
