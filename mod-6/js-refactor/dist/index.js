"use strict";
// declare a variable
let username = "Abe";
let age = 11;
// Implement the function to handle both signatures
function formatInput(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else {
        return input.join(", ").toUpperCase();
    }
}
// const result = formatInput('hello world');
const result = formatInput(['mango', 'banana', 'apple']);
console.log(result);
