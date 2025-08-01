// JavaScript has two distinct types for "nothing": null and undefined.

// `undefined` means a variable has been declared but has not been assigned a value.
let a;
console.log("Value of uninitializedVariable: " + a);
console.log("Type of uninitializedVariable: " + typeof a);

// `null` is an assignment value that represents "no value" or "empty".
let b = null;
console.log("Value of nullVariable: " + b);
console.log("Type of nullVariable: " + typeof b);

// Difference between `null` and `undefined`:
// 1. `undefined` is the default value for uninitialized variables.
// 2. `null` is explicitly assigned to indicate "no value".


// Summary:
// - Use `null` when you want to explicitly indicate "no value".
// - `undefined` is automatically assigned to uninitialized variables.