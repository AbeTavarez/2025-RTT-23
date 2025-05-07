
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);

// add an item to the end of the array
fruits.push('orange');

// removes the last item in the array
let orange = fruits.pop();
console.log(orange);

// removes the first item in the array
fruits.shift();
// let apple = fruits.shift();
// console.log(apple);

// adds to the start of the array
fruits.unshift('kiwi');

console.log(fruits.length);

console.log(fruits);


// For loop
for (let i = 0; i < fruits.length; i++) {
    // console.log(i);
    console.log(fruits[i]);
}

// For of
for (let fruit of fruits) {
    console.log(fruit);
}


// While loop
let count = 5;

while (count >= 0) {
    console.log(count);
    count--
}


let userNumber;
 
do {
  userNumber = prompt("Please enter a number greater than 0:");
} while (userNumber <= 0);
 
console.log(`You entered: ${userNumber}`);