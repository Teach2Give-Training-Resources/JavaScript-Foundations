//Functions are reusable blocks of code that perform a specific task.

// Function Declaration

// Function Expression

// Arrow Function

// Parameters and Return Values

// Default Parameters

// Function Calling Other Functions

// Practical Examples (e.g., calculator, greeting, etc.)

// 1. Function Declaration
function greet() {
    console.log("Hello, welcome to the JavaScript!");
}

greet(); // Calling the function

// 2. Function with Parameters
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

greetUser("Alice"); // Calling the function with an argument
greetUser("Kemboi")

// 3. Function with Return Value
function add(a, b) {
    return a + b;
}
// console.log("Sum is:",  add(3, 3)); 
let result = add(3, 3)
console.log("Sum is:", result); // Output: Sum is: 6

// 4. Function Expression - is a function that is defined within an expression and can be stored in a variable
const multliply = function (x, y) {
    return x * y;
}

console.log("Multiplication is:", multliply(3, 3)); // Output: Multiplication is: 9

// 5. Arrow Function - is a shorter syntax for writing function expressions
const devide = (a, b) => {
    return a / b;
}

console.log("Division is:", devide(10, 2));


// Default Parameters - used to set default values for function parameters
function greatAUser(name = "Guest") {
    console.log(`Hi, ${name}`)
}

greatAUser() // Output: Hi, Guest
greatAUser("Kemboi") // Output: Hi, Kemboi

// 6. Function Calling Other Functions
function calculateArea(length, width) {
    return length * width;
}

function displayArea(length, width) { // used to display the area
    const area = calculateArea(length, width);
    console.log(`The area of the rectangle is: ${area}`);
}

displayArea(5, 10); // Output: The area of the rectangle is: 50


// 7. Practical Example: Simple Calculator
function calculator(a, b, operation) {
    if (operation === "add") return a + b;
    if (operation === "subtract") return a - b;
    if (operation === "multiply") return a * b;
    if (operation === "divide") return b !== 0 ? a / b : "Cannot divide by zero";
    return "Invalid operation";
}

console.log(calculator(10, 5, "add")); // Output: 15
console.log(calculator(10, 5, "subtract")); // Output: 5
console.log(calculator(10, 5, "multiply")); // Output: 50
console.log(calculator(10, 5, "divide")); // Output: 2
console.log(calculator(10, 0, "divide")); // Output: Cannot divide by zero