import getValue, { Product, testProduct as tp} from "./product";
import { DigitalProduct } from "./digital-product";

const laptop = new Product("sku123", "Laptop", 1200, false);
const tv = new Product("sku456", "LG TV", 200);
const videoGame = new DigitalProduct("sku999", "Fifa", 70, 3000);

console.log(videoGame);
// console.log(videoGame.sku);

console.log(laptop);

console.log(laptop.name);
laptop.price = 1500;
console.log(laptop.price);
// console.log(laptop._price); // X
console.log(laptop.inStock);
// console.log(laptop.displayDetails());

console.log(laptop.displayDetails());
console.log(tv.displayDetails());

console.log(tp);
getValue();
