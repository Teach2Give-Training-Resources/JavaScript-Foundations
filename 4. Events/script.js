

let myBtn = document.getElementById("btn");
myBtn.addEventListener("click", function () {
    // alert("Hello World");
    console.log("Hello World");


    // myBtn.style.backgroundColor = "red";
    // myBtn.style.color = "white";
    // myBtn.style.fontFamily = "Arial, sans-serif";
    // myBtn.style.fontSize = "20px";
    // myBtn.style.padding = "10px 20px";
    // myBtn.style.borderRadius = "5px";
    // myBtn.style.border = "none";
})


// Mause Events - click, mouseover, mouseout, mouseenter, mouseleave
let mybox = document.getElementById("mybox");
mybox.addEventListener("mouseover", function () {
    // alert("Hello World");
    mybox.style.backgroundColor = "blue";

})

mybox.addEventListener("mouseout", function () {
    // alert("Hello World");
    mybox.style.backgroundColor = "red";

})


mybox.addEventListener("click", function () {
    // alert("Hello World");
    mybox.style.backgroundColor = "green";

})
mybox.addEventListener("dblclick", function () {
    // alert("Hello World");
    mybox.style.backgroundColor = "yellow";

})


// Keyboard Events - keydown, keyup, keypress
let myInput = document.getElementById("myInput");
myInput.addEventListener("keydown", function (event) {
    // alert("Hello World");
    console.log(event.key);
    if (event.key === "Enter") {
        alert("Hello World");
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



// key up takes place after key down
// myInput.addEventListener("keyup", function (event) {
//     // alert("Hello World");
//     console.log(event.key);
    
//     if (event.key === "Escape") {
//         alert("Goodbye KeyUp");
//     } else if (event.key === "Backspace") {
//         alert("Backspace pressed");
//     }
//     else if (event.key === "Shift") {
//         alert("Shift pressed");
//     } else if (event.key === "Control") {
//         alert("Control pressed");
//     } else if (event.key === "Alt") {
//         alert("Alt pressed");
//     } else if (event.key === "1") {
//         alert("1 pressed");
//     } else if (event.key === "B") {
//         alert("B pressed");
//     }
// })




