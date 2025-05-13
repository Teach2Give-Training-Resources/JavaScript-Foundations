// https://www.w3schools.com/js/js_objects.asp

// car
let car = {
    // properties
    name: "Toyota",
    model: "Camry",
    color: "Black",
    year: 2020,

    // methods
    start: function () {
        console.log("Car started")
    },
    accelerate: function () {
        console.log("Car accelerated")
    },
    stop: function () {
        console.log("Car stopped");
    },
    carInfo: function () {
        console.log(`Car name: ${car.name} Car Model: ${car.model} car color: ${car.color}`)
    }
}


// access object properties
console.log("Car name" + car.name)
console.log("Car model: " + car.model);
console.log("Car color: " + car.color);
console.log("Car year: " + car.year);

// object methods
car.start()
car.accelerate()
car.stop()

car.carInfo()