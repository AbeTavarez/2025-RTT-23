// ==== Declaring variables ==========
// type string
let quote: string =
  "The greatest glory in living lies not in never falling, but in rising every time we fall.";

let author: string = "Nelson Mandela";

// type number
let year: number = 1944;

// type boolean
let isFamous: boolean = true;

// type string array
let otherQuotes: string[] = [
  "The way to get started is to quit talking and begin doing.",
  "If life were predictable it would cease to be life, and be without flavor.",
  "Life is what happens when you're busy making other plans.",
];

console.log(otherQuotes[0]);


// type number array
let publicationYears: number[] = [1940, 1962, 1976, 1984];

// type tuple
let awardsAndYear: [string, number] = ["Best selling author", 1999];

// type enum
enum Genre {
  Fiction,
  NonFiction,
  Mystery,
  Romance,
  Biography,
  History,
  Science,
  Anime
}

let genre: Genre = Genre.Mystery;
console.log(genre);


// interface
interface Book {
  title: string;
  author: string;
  publicationYear: number;
  genre: Genre;
  isAvailable: boolean;
}

// type Book
let book: Book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  publicationYear: 1988,
  genre: Genre.Fiction,
  isAvailable: true,
};

// type Book array
const books: Book[] = [book];

const nextBook: Book = {title: "The Book Thief", author: "Markus Zusak", publicationYear: 2005, genre: Genre.Anime, isAvailable: true}

addBook(nextBook)
console.log(books)


// function
function addBook(newBook: Book): void {
  books.push({...newBook});
}


interface User {
  username: string;
  email: string;
}

function welcomeUser(user: User): string {
return `Welcome, ${user.username}! Your email is ${user.email}.`;
}

let newUser = { username: "john_doe", email: "john@example.com" };
console.log(welcomeUser(newUser));


type ProductID = string | number;
type ProductTitle = string;
type ProductPrice = number;


let id1: ProductID = "ABC123";
let id2: ProductID = 344;

const prod1: ProductTitle = "Smartphone";
const prod2: ProductTitle = "Laptop";

console.log(`Product IDs: ${id1}, ${id2}`);

// 
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log("The ID is a string: " + id.toUpperCase());
  } else {
    console.log("The ID is a number: " + id.toFixed(2));
  }
}

printId("xyz");
printId(123.456);
