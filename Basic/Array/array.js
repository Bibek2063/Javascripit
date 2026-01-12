
const cars = ["RR", "BMW", "BYD", "Lambo", "Bugatti"];
// creating empty array 
const car = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

//Accessing array elements(using index)
let c1 = cars[0];
let c2 = cars[1];

// changing an array element 
cars[0] = "tesla";
// access the full array 
console.log(cars);

// arrays are objects
console.log(typeof (cars);// object is the output

// looping array elements(for)
const fruits = ["Banana", "Orange", "apple", "Mango"];
let flen = fruits.length;

let text = "<ul>";
for (let i = 0; i < flen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

// adding array elements(push())
fruits.push("Lemon");
fruits[fruits.length] = "lemon";

// new Array()
//  creates new empty Array(dont use it )
const points = new Array(40, 50, 60, 40, 50, 3, 0, 50, 40);

// nested arrays and Objects
const myObj = {
    name: "John",
    age=30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }]
}

//    ACCCESS
for (let i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (let j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j];
    }
}
