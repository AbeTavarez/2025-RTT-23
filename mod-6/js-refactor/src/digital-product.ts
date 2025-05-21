import { Product } from "./product";

export class DigitalProduct extends Product {
  fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price); // <- calls the constructor from parent class
    this.fileSize = fileSize;
  }

  displayDetails(): string {
    return `${this.name} costs $${this.price} and is a digital download of ${this.fileSize}MB.`;
  }
}
