// /Less than 6 → Weak

// 6–10 → Medium

// More than 10 → Strong  */
let pass=promt("Enter a password");
if(pass.length<6)
{
    console.log("Weak password");
}
else if(pass.length<=10 || pass.length>6)
{
    console.log("Medium password");
}
else {
    console.log("Strong password");
}