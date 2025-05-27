class Stack<T> {
   private arr: T[] = [];

//    constructor(arr: T[]) {
//     this.arr = arr;
//   }

  push(value: T): void {
    this.arr.push(value);
  }

  pop(): T | undefined {
    return this.arr.pop();
  }

  peek(): T | undefined {
    return this.arr.at(-1);
  }
}

interface Product {
    name: string;
    price: number;
}

const productsStack = new Stack<Product>();

const tv: Product = {
    name: "TV",
    price: 1000
}

const keyboard: Product = {
    name: "Keyboard",
    price: 100
}

productsStack.push(tv)
productsStack.push(keyboard)

console.log("STACK: ", productsStack);

console.log("LAST PRODUCT: ", productsStack.peek());

console.log("POPPED PRODUCT: ", productsStack.pop());

console.log("PEEKED STACK", productsStack);
