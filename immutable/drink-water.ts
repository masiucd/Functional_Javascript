export class ImmutableGlass {
  name: string
  amount: number
  constructor(name: string, amount: number) {
    this.name = name
    this.amount = amount
  }
  drink(value: number) {
    return new ImmutableGlass(this.name, this.amount - value)
  }
}

// const glass = new ImmutableGlass("pepsi", 100)

// const newDrink = glass.drink(20)
// console.log(glass) // still {name:"pepsi", amount:100}
// console.log(newDrink) // {name:"pepsi", amount:80}
