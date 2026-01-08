// using a for loop 
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};

// 2. using object.values()
const myarray=Object.values(person);

let text=myarray.toString();

// 3.using json.stringify()
let text=JSON.stringify(person);
