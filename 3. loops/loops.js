//  1. if, else if, else

let age = 20;
if (age < 13) {
    console.log("You are a child");
} else if (age < 20) {
    console.log("You are a teenager");
} else {
    console.log("You are an adult");
}

// 2. switch Statement
let day = "Wednesday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Wednesday":
        console.log("Midweek");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("Just another day");
}


// 3. Ternary Operator (shorthand if)
let isLoggedIn = false;

let message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message); // Output: Welcome back!

//4. for Loop
for (let i = 0; i <= 5; i++) {
    console.log("Number is:", i);
}

// 5. while Loop
let count = 1;
while (count <= 5) {
    console.log("Count is:", count);
    count++;
}

// 6. do...while Loop
let number = 5; 

do {
    console.log("Number is:", number);
    number--;
} while (number > 0);

