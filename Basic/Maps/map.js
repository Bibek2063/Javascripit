/* map is object that can store collections of key-value pair 
similar to dictionary (in python)

 */

// creating new map 
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
// or you can pass an array to the new map() constructor
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// get method
fruits.length("apples"); //returns 500

// #maps are objects 
typeof fruits;

// objects vs maps
/* Objects                             Map
Not directly iterable              iterable
do not have size property          have 
keys must be string                keys can be any datatype
keys are not alloweeed ordered 
have default key                   do not have  */