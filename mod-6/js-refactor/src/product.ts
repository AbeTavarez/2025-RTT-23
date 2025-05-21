export class Product {
  private sku: string;
  public name: string;
  protected _price: number;
  public inStock: boolean;

  constructor(
    sku: string,
    name: string,
    price: number,
    inStock: boolean = true,
  ) {
    this.name = name;
    this._price = price;
    this.inStock = inStock;
    this.sku = sku;
  }

  displayDetails(): string {
    return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
  }

  get price(): number{
    return this._price;
  }

  set price(preTaxPrice: number) {
    this._price = preTaxPrice;
  }

  // Protected method example:
  //   protected displayDetails(): string {
  //     return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
  //   }

  //   displayDetails(): string {
  //     return `${this.name} costs $${this.price} and is ${
  //       this.inStock ? "in stock" : "out of stock"
  //     }.`;
  //   }
}

export const testProduct: string = "test";

// we can import using: import getValue from "./product";
export default function getValue() {
  return 100;
}
