// declare a variable
let username: string = "Abe";

let age: number = 11;

// function overloads
function formatInput(input: string): string;
function formatInput(input: string[]): string;

// Implement the function to handle both signatures
function formatInput(input: string | string[]): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input.join(", ").toUpperCase();
  }
}

// const result = formatInput('hello world');
const result = formatInput(['mango', 'banana', 'apple']);

console.log(result);
