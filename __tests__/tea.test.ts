import * as tea from "../sandbox/tea";

let mockedGreen = tea.prepareGreenTea();
let mockedBlack = tea.prepareBlackTea();

describe("tea.ts", () => {
  test("should be defined", () => {
    const tea4GreenTeamFCC = tea.getTea(tea.prepareGreenTea, 27);
    const tea4BlackTeamFCC = tea.getTea(tea.prepareBlackTea, 13);

    expect(tea4GreenTeamFCC).toBeDefined();
    expect(tea4BlackTeamFCC).toBeDefined();

    expect(tea4GreenTeamFCC.length).toBe(27);
    expect(tea4BlackTeamFCC.length).toBe(13);
  });

  test("mocked version", () => {
    expect(mockedGreen).toBe("greenTea");
    expect(mockedGreen).not.toBe("blackTea");

    expect(mockedBlack).toBe("blackTea");
    expect(mockedBlack).not.toBe("greenTea");
  });
});
