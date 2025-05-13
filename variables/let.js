// block scope
function BlockScopVariable() {
    let x = 10
    console.log("Outside scope", x) // 10
    if (true) {
        let x = 20
        console.log("Inside scope", x) //20
    }
    console.log("Outside scope", x) //10

}

BlockScopVariable()

let y = 20;
