let cars = ["Tesla", "BMW", "Toyota"];
console.log(cars[0]); // "Tesla"
console.log(cars[2]); // "Toyota"
cars[0]="BYD"; //modifying value
console.log(cars[0]); //changing value
console.log(cars); //printing all the array elements

//array methods
let x=cars.length; //array length 
console.log("lenght of array is"+ x);

//array to string 
let str = cars.join(", ");  // Default separator is comma
console.log(str);

//array at() method
let car = cars.at(2);
console.log(car);

//poping method
let pop = cars.pop();
console.log(pop);
//push method("Returns new lenght of the array")
let length = cars.push("RR");
console.log(length); 
//unshift method ("adds elements at last index")
cars.unshift("RR");
let str1 = cars.join(", ");
console.log(str1);