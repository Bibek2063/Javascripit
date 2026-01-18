// repeat executing a block of a code 
// for(), while(), do..while() , for...in(), forEach() 
// #1 for...in()
const person={
    fname:"John",
    lname:"Doe",
    age:25
}
let text="";
for(let x in person)
{
    text +=person[x]; //loop through the properties of a person object 

}

// #2 for...of()
//  it iterates over the values of iterable objects as array,string,maps,sets and nodelists
