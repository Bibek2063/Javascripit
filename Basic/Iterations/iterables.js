// iterable is an object  can be iterated over with fot..of
//   iterating means looping over a sequence of elements (string, arary,set,map)
// #1 String 
const name = "W3Schools";

for (const x of name) {
  // code block to be executed
}
// #2 Array
const letters = ["a","b","c"];

for (const x of letters) {
  // code block to be executed
}
 
// #3 Set
const letters = new Set(["a","b","c"]);

for (const x of letters) {
  // code block to be executed
}

// #4 Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  // code block to be executed
}

