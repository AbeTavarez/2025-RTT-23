// Closures
function createMultiplier(multiplier) {
    return function(number) {
      return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // 10


// Higher Order functions
function applyDiscount(discountRate) {
    return function(price) {
      return price * (1 - discountRate);
    };
}

const tenPercentDiscount = applyDiscount(0.10);
// console.log(tenPercentDiscount(100)); // 90

// Callbacks
function fetchUser(username, callback) {
    setTimeout(() => {
        // create random user id
        const userId = Math.random().toString(8).substring(2, 15);
        const user ={name: username, userId};
        callback(user);
    }, 2000);
}

// fetchUser("Alice", (user) => console.log("Fetched User:", user));


const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});