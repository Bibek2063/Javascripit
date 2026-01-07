
//  rule: name length must be between 6 and 12, 
// no sapces allowed, 
//  must not start with a number
const name = prompt("Enter your name:");

if(name.length>6 ||name.length<12)
{
    console.log("User name lenght is valid");
} 
else if(name.includes(" "))
{
    console.log("Username must not contain spaces");
}
else if(!isNaN(name.chartAt(0)))
{
    console.log("Usernamen must not start with a number");
}
else {
    console.log("Username is valid");
}