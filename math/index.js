export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

export function multiply(x, y) {
  return x * y;
}  

export function divide(x, y) {
  if (y === 0) {
    throw new Error("Cannot divide by zero");
  }
  return x / y;
}

export default{
    add,
    subtract,
    multiply,
    divide,
}

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide,
// }