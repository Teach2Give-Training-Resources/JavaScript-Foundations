//Functions are reusable blocks of code that perform a specific task.

// Function Declaration

// Function Expression

// Arrow Function

// Parameters and Return Values

// Default Parameters

// Function Calling Other Functions

// 1. Function Declaration
function greet() {
    console.log("Hello, welcome to the JavaScript!")
}

// greet()

// 2. Function with Parameters
function greetUser(name) { // parameter
    console.log(`Hello, ${name}!`)
}

// greetUser("Kemboi") // args
// greetUser("David")


// 3. Function with Return Value
function add(a, b) {
    return a + b;
}

// let result = add(4, 3)
console.log("Sum is:", add(4, 3))

// 4. Function Expression - is a function that is defined within an expression and can be stored in a variable
const mulitiply = function (x, y) {
    return x * y
}

// console.log("Multiplication is:", mulitiply(3, 3));

// 5. Arrow Function - is a shorter syntax for writing function expressions

const devide = (a, b) => {
    return a / b;

}

// console.log("Division is:", devide(10, 2));// 10 - a 2 - b


// Default Parameters - used to set default values for function parameters

function greetAUser(name = "Guest") {
    console.log(`Hi, ${name}`)
}

// greetAUser()
// greetAUser("Kemboi")

// 6. Function Calling Other Functions
function calculateArea(length, width) {
    return length * width
}

function displayArea(length, width) {
    const area = calculateArea(length, width)
    console.log(`The area of the rectangle is: ${area}`);

}




displayArea(5, 10)