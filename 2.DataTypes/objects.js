//Understand more on objects in JavaScript: https://www.w3schools.com/js/js_objects.asp

/**
 Micic a car object with properties and methods
 properties: name, model, color, year
    methods: start, stop, accelerate
 */

// Creating a car object

let car = {
    // properties
    name: "Toyota",
    model: "Camry",
    color: "Black",
    year: 2020,

    // methods
    start: function () {
        console.log("Car started");
    },
    accelerate: function () {
        console.log("Car accelerated");
    },
    stop: function () {
        console.log("Car stopped");
    }
}

// Accessing object properties
// console.log("Car name: " + car.name);
// console.log("Car model: " + car.model);
// console.log("Car color: " + car.color);
// console.log("Car year: " + car.year);


// Accessing object methods
// car.start();
// car.accelerate();
// car.stop();


// person object

const person = {
    firstName: "Brian",
    lastName: "Kemboi",
    id: 12345,

    // method
    details: function () {
        return this.firstName + " " + this.lastName + ", ID: " + this.id;
    }
}

// Accessing object properties
// using console.log
console.log("Person's first name:", person.firstName);
// using string concatenation
console.log("Person's last name: " + person.lastName);
// using template literals
console.log(`Person's ID: ${person.id}`)

// Accessing object method
console.log("Person's details: " + person.details());