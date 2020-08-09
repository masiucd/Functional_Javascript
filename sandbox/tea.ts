// FROM Free code camp functional program section

type FN<T> = () => T;

const prepareGreenTea: FN<string> = () => "greenTea";

const prepareBlackTea: FN<string> = () => "blackTea";

const getTea = (prepareTea: FN<string>, numOfCups: number) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

export { prepareBlackTea, prepareGreenTea, getTea };
