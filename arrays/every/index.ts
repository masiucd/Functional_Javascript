interface Field {
  field: string
  value: string
  errors: Array<string>
}
interface People {
  field: string
  value: string
  errors: Array<string>
}

const fields: Field[] = [
  {
    field: "email",
    value: "masiuboy@example.com",
    errors: [],
  },
  {
    field: "email",
    value: "",
    errors: ["Bigg bugg!!!!"],
  },
]

const isValid = (xs: any[]) => xs.every(field => field.errors.length === 0)

const people = [
  {
    name: "Aleks",
    age: 22,
  },
  {
    name: "Linda",
    age: 43,
  },
  {
    name: "Kim",
    age: 12,
  },
]

const canAllPeopleDrive = (xs: Record<string, string | number>[]) => xs.every(p => p.age > 18)

export { isValid, canAllPeopleDrive, Field }
