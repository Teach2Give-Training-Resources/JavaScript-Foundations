let myBtn = document.getElementById("btn")
myBtn.onclick = function () {
    alert("Clicked")

}


myBtn.addEventListener("click", function () {
    // alert("Hey, I am Clicked")
    console.log("Hey am on the console")

    // myBtn.style.backgroundColor = "red";
    // myBtn.style.color = "white";
    // myBtn.style.fontFamily = "Arial, sans-serif";
    // myBtn.style.fontSize = "20px";
    // myBtn.style.padding = "10px 20px";
    // myBtn.style.borderRadius = "5px";
    // myBtn.style.border = "none";
})

// mouse


let mybox = document.getElementById("mybox")
mybox.onmouseover = function () {
    mybox.style.backgroundColor = "pink"
}

// mybox.addEventListener("mouseover", function () {
//     mybox.style.backgroundColor = "blue"
// })

mybox.addEventListener("mouseout", function () {
    mybox.style.backgroundColor = "red";
})

mybox.addEventListener("click", function () {
    mybox.style.backgroundColor = "green";

})

mybox.addEventListener("dblclick", function () {
    mybox.style.backgroundColor = "yellow";

})

// Keyboard Events - keydown, keyup, keypress
let myInput = document.getElementById("myInput")
myInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        alert("Enter has been clicked")
    } else if (event.key === "Escape") {
        alert("Goodbye World");
    } else if (event.key === "Backspace") {
        alert("Backspace pressed");
    } else if (event.key === "Tab") {
        alert("Tab pressed");
    } else if (event.key === "Shift") {
        alert("Shift pressed");
    } else if (event.key === "Control") {
        alert("Control pressed");
    } else if (event.key === "Alt") {
        alert("Alt pressed");
    } else if (event.key === "1") {
        alert("1 pressed");
    } else if (event.key === "B") {
        alert("B pressed");
    }

    // if number is pressed
    if (event.key >= 0 && event.key <= 9) {
        alert("Number pressed");
    }

    // if letter is pressed
    if (event.key >= "a" && event.key <= "z") {
        alert("Letter pressed");
    }
})