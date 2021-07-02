type Listener = (x: number) => void
type Broadcast = (listener: Listener) => void

const listener = <T>(value: T) => console.log(value)

const broadcaster = (listener: Listener): void => {
  listener(1)
  listener(2)
  listener(3)
}

const operator = (broadcaster: Broadcast) => (listener: Listener) => {
  let currentCount = 0
  broadcaster(value => {
    currentCount += value
    setTimeout(() => {
      listener(currentCount)
    }, 1000)
  })
}

let run = operator(broadcaster)(listener)
