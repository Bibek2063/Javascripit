// ================================
// JAVASCRIPT STRING METHODS – ALL IN ONE
// ================================

// Base string for examples
let text = "  Hello JavaScript World  ";
console.log("Original text:", text);

// --------------------------------
// LENGTH
// --------------------------------
console.log(text.length); // total characters including spaces

// --------------------------------
// CHARACTER ACCESS
// --------------------------------
console.log(text.charAt(2));     // character at index 2
console.log(text.at(-1));        // last character
console.log(text.charCodeAt(2)); // Unicode value of character

// --------------------------------
// CASE CONVERSION
// --------------------------------
console.log(text.toUpperCase()); // convert to uppercase
console.log(text.toLowerCase()); // convert to lowercase

// --------------------------------
// TRIMMING SPACES
// --------------------------------
console.log(text.trim());       // remove spaces from both sides
console.log(text.trimStart());  // remove spaces from start
console.log(text.trimEnd());    // remove spaces from end

// --------------------------------
// SEARCHING
// --------------------------------
console.log(text.includes("Java"));      // true if exists
console.log(text.indexOf("Java"));       // first position
console.log(text.lastIndexOf("o"));      // last position
console.log(text.startsWith("  He"));    // check start
console.log(text.endsWith("  "));        // check end

// --------------------------------
// EXTRACTING PARTS
// --------------------------------
let cleanText = text.trim();

console.log(cleanText.slice(0, 5));      // extract using index
console.log(cleanText.slice(-5));         // extract from end
console.log(cleanText.substring(6, 16));  // similar to slice
console.log(cleanText.substr(6, 10));     // start + length (old)

// --------------------------------
// REPLACING
// --------------------------------
console.log(cleanText.replace("World", "Everyone")); // first match
console.log(cleanText.replaceAll("o", "0"));          // all matches

// --------------------------------
// SPLITTING
// --------------------------------
let words = cleanText.split(" "); // split into array
console.log(words);

// --------------------------------
// CONCATENATION
// --------------------------------
let a = "Hello";
let b = "JS";

console.log(a.concat(" ", b)); // join strings
console.log(a + " " + b);      // common way

// --------------------------------
// PADDING
// --------------------------------
let num = "7";
console.log(num.padStart(3, "0")); // 007
console.log(num.padEnd(3, "0"));   // 700

// --------------------------------
// REPEAT
// --------------------------------
console.log("*".repeat(10)); // **********

// --------------------------------
// COMPARISON
// --------------------------------
console.log("apple".localeCompare("banana")); // -1
console.log("apple".localeCompare("apple"));  // 0
console.log("banana".localeCompare("apple")); // 1

// --------------------------------
// STRING TO NUMBER
// --------------------------------
console.log(Number("123"));        // 123
console.log(parseInt("123px"));    // 123
console.log(parseFloat("12.5kg")); // 12.5

// --------------------------------
// ESCAPE CHARACTERS
// --------------------------------
console.log("He said \"Hello\"");
console.log("C:\\Users\\Admin");
console.log("Line1\nLine2");

// --------------------------------
// TEMPLATE LITERALS
// --------------------------------
let name = "Surendra";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old`);

// --------------------------------
// REAL PRACTICAL CHECKS
// --------------------------------
let input = "  user123@gmail.com  ";
input = input.trim();

console.log("Has @:", input.includes("@"));
console.log("Length:", input.length);
console.log("Uppercase:", input.toUpperCase());

// --------------------------------
// WORD COUNT (PROPER WAY)
// --------------------------------
let sentence = "  Learn   JavaScript   properly  ";
let wordCount = sentence.trim().split(/\s+/).length;
console.log("Word count:", wordCount);
