// Example function template for addition
function add(a: number = 0, b: number = 0): number {
  return a + b;
}
 
// Division function with zero handling
function divide(a: number, b: number = 1): number | null {
  return b === 0 ? null : a / b;
}

// subtraction
function subtract(a: number, b:number = 0): number {
    return a - b;
}