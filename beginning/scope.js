let age = 10;
function foo(age) {
  let someAge = age;
  console.log(someAge);
}
function bar() {
  let someAgeFromGlobalScope = age;
  console.log(someAgeFromGlobalScope);
}

foo(20); // 20
foo(age); // 10
bar(); // 10
