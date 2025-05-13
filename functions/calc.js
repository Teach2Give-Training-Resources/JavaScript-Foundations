// Practical Example: Simple Calculator

function calculator(a, b, operatoration) {
    if (operatoration === "add") return a + b;
    if (operatoration === "subtract") return a - b;
    if (operatoration === "multiply") return a * b;
    if (operatoration === "divide") return b !== 0 ? a / b : "Cannot divide by zero";
    return "Invalid operation";
}

// console.log(calculator(10, 5, "add"))
// console.log(calculator(10, 5, "subtract")); // Output: 5
// console.log(calculator(10, 5, "multiply")); // Output: 50
console.log(calculator(10, 5, "divide")); // Output: 2
// console.log(calculator(10, 0, "divide")); 

