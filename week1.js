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
