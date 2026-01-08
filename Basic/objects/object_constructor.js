/* sometimes we need to create many  objects of 
the same typeof.
>to create an object type we use an object constructor function
>it is considered good practice to name constructor
 function with an upper-case first letter   */
eg:
function Person(first, last,age,eye)
{
    this.firstname=first;
    this.lastname=last;
    this.age=age;
    this.eyecolor=eye;
}
const myfather=new Person("john","doe",50,"blue");
console.log("My father is"+myfather.age+".")
