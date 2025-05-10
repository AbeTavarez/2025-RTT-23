let temperature = 80;

if (temperature > 30) {
  console.log("It's too hot!");
} else if (temperature >= 30) {
  console.log("this is also hot!");
} else if (temperature < 10) {
  console.log("It's too cold!");
} else {
  console.log("The weather is just right.");
}

if (temperature >= 80) {
  console.log("run for your life!");
}

// let choice = prompt("Choose an option: 1. Start 2. Settings 3. Exit");

// switch (choice) {
//   case '1':
//     console.log("Starting the game...");
//     break;
//   case '2':
//     console.log("Opening settings...");
//     break;
//   case '3':
//     console.log("Exiting the game...");
//     break;
//   default:
//     console.log("Invalid option, please try again.");
// }

let numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 3) {
//     console.log("Found 3! Exiting the loop.");
//     break; // Exit the loop when 3 is found
//   }
//   console.log(numbers[i]);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(`Current ${i}: reminder: ${i % 2}`);
    
//   if (i % 2 === 0) continue; // Skip even numbers
//   console.log(i); // Only odd numbers will be printed
// }

let isLoggedIn = true;
let isAdmin = false;
 
if (isLoggedIn && isAdmin) {
  console.log("Welcome, admin.");
} else if (isLoggedIn && !isAdmin) {
    console.log('Welcome!')
}


let hasMembership = false;
let hasCoupon = true;
 
if (hasMembership || hasCoupon) {
  console.log("You are eligible for a discount.");
}


// Objects

const colors = ['blue']; // array
colors.push('green'); // add')
console.log(colors);

// object
const person = {
    name: 'John'
};

// reads the value of a key
// console.log(person.name);


// add a new key:value
person.lastName = 'Smith';
person.age = 30;
person.hobbies = ['reading', 'cooking'];

// console.log(person.hobbies[0]);

person.greet = function() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
}

// person.greet();
// person.age =  31
console.log(person.age);
console.log(person['age']);

// console.log(person);


for (key in person) {
    console.log(key, person[key]);
}