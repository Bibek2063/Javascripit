/* sometimes we need to create many  objects of 
the same typeof.
>to create an object type we use an object constructor function
>it is considered good practice to name constructor
 function with an upper-case first letter   */
// eg:
function Person(first, last,age,eye)
{
    this.firstname=first;
    this.lastname=last;
    this.age=age;
    this.eyecolor=eye;
    this.nationality="English"; //this is default value 
}
const myfather=new Person("john","doe",50,"blue");
console.log("My father is "+myfather.age+".")

// no we can use new person() to create many person objects
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");

//accesss mother 
console.log("Mother is "+myMother.age+" years old.")
// accessing default value 
console.log(myMother.nationality); //Output: English
