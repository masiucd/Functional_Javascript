const votes = [
  'angular',
  'angular',
  'react',
  'react',
  'react',
  'angular',
  'ember',
  'react',
  'vanilla',
];

//  we want to make a  count and store each vote in a map to
//  keep the count of the votes, this can be done in a imperative
//   way with basic for loops but also with reduce wish is
//   more a declarative way and functional

const votesMap = votes.reduce((map: any, value: any) => {
  // if it does  exists then add it 1 to key's value
  if (map[value]) {
    map[value] += 1;
    // else add 1
  } else {
    map[value] = 1;
  }
  return map;
  // initial value, we pass in a object
}, {});

// console.log(votesMap);

const initialValue = {};
const reducer = function(voteBox: any, vote: any) {
  if (!voteBox[vote]) {
    voteBox[vote] = 1;
  } else {
    voteBox[vote] += 1;
  }
  return voteBox;
};

const res = votes.reduce(reducer, initialValue);

console.log(res);
