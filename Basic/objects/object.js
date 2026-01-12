// object is a variable can hold many variable
// object are collection of key-value pairs, where each key(known as property names) has a value.
// objects can describe anything like houses,car,people,animals, or any other subjects.
 const person={ //object is created
    firstname:"john",
    lastname:"Doe",
    age:50,
    eyecolor:"blue",
    city:"LA"
 };

//  or we can create an empty object and add the properties late:
const man={}
man.name="John Doe";
man.age="50";
man.eyecolor="hazel";

// Accessing object properties
/* 2 ways to accesss properties
   > objectname.propertyname
   > objectname["propertyname"]
   */
  console.log(man.name);
  console.log(person["eyecolor"]);
  console.log(person);
  let text = person.name + "," + person.age + "," + person.city;    
 console.log(text);

//  adding new property in object
person.nationality="English";
console.log(person.nationality);

// deleting properties
delete person.age; 
delete person["age"]; //you can do either way 
