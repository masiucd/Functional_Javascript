import * as every from "../every"

const isValidSpy = jest.spyOn(every, "isValid")
const canAllPeopleDriveSpy = jest.spyOn(every, "canAllPeopleDrive")

afterAll(() => {
  jest.clearAllMocks()
})

describe("Array.protoType.every ", () => {
  test("isValid function ", () => {
    const fields: every.Field[] = [
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
    const isValid = every.isValid(fields)
    expect(isValid).toBeFalsy()

    expect(isValidSpy).toHaveBeenCalledTimes(1)
    expect(isValidSpy).toHaveBeenCalledWith(fields)
  })

  test("canAllPeopleDrive function ", () => {
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
    const canAllPeopleDrive = every.canAllPeopleDrive(people)

    expect(canAllPeopleDriveSpy).toHaveBeenCalledTimes(1)
    expect(canAllPeopleDriveSpy).toHaveBeenCalledWith(people)
    expect(canAllPeopleDrive).toBeFalsy()
  })
})
