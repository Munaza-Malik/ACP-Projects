
/* 1.

// Global variable (accessible everywhere in the script)
var globalVar = "I am a global variable";

function myFunction() {
    // Function scope variable (accessible only inside this function)
    var functionVar = "I am inside a function";

    console.log("Inside function:");
    console.log(globalVar); // Accessible
    console.log(functionVar); // Accessible

    if (true) {
        // Block scope variable (accessible only inside this block)
        let blockVar = "I exist only inside this block";
        console.log(blockVar); // Accessible inside this block
    }

    // Trying to access blockVar outside the block will cause an error
    // console.log(blockVar); // Uncommenting this line will cause an error
}

// Calling the function
myFunction();

// Accessing global variable outside function
console.log("Outside function:");
console.log(globalVar); // Accessible

// Accessing function variable outside function (this will cause an error)
// console.log(functionVar); // Uncommenting this line will cause an error

// Accessing block variable outside block (this will cause an error)
// console.log(blockVar); // Uncommenting this line will cause an error

*/




// 2.

function addNumbers(a, b) {
    // Check if either argument is null
    if (a === null || b === null) {
        console.log("One or both values are null. Cannot proceed.");
        return;
    }

    // Convert string values to numbers
    if (typeof a === "string") {
        a = Number(a);
    }
    if (typeof b === "string") {
        b = Number(b);
    }

    // Check if conversion was successful (NaN means invalid number)
    if (isNaN(a) || isNaN(b)) {
        console.log("Invalid input. Please provide numbers or numeric strings.");
        return;
    }

    // Add and return the result
    let sum = a + b;
    console.log("Sum:", sum);
}

// Test cases
addNumbers(5, "10");  // Output: Sum: 15
addNumbers("3", "7"); // Output: Sum: 10
addNumbers(null, 5);  // Output: One or both values are null. Cannot proceed.
addNumbers("abc", 5); // Output: Invalid input. Please provide numbers or numeric strings.
