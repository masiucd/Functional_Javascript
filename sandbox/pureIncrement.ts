// UNPURE WAY

let fixedValue1 = 4;

function incrementer1() {
  return (fixedValue1 += 1);
}

// PURE WAY
let fixedValue2 = 4;

function incrementer2<T>(foo: T) {
  if (typeof foo === "string") {
    let x = Number(foo);
    return x++;
  }

  if (typeof foo === "number") {
    return foo++;
  }
}

incrementer1();
incrementer1();
incrementer1();
incrementer1();
incrementer1();

// console.log(fixedValue1); // 9
// The fixed value 1 has been changed!!!

incrementer2(fixedValue2);
incrementer2(fixedValue2);
incrementer2(fixedValue2);

// console.log(fixedValue2); // value is still 4!!!
