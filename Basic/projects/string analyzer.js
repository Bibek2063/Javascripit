let text = prompt("Enter your text:");

let charCount = text.length;

let words = text.trim().split(/\s+/);
let wordCount = text.trim() === "" ? 0 : words.length;

let hasAt = text.includes("@");

console.log("Characters:", charCount);
console.log("Words:", wordCount);
console.log("Contains @:", hasAt);
