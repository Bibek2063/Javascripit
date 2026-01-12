/* Object methods are that can be performed on objects
A method is a function defination stored as a property value */
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
let name=person.fullName();
console.log(name);