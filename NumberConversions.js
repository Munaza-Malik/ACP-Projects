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
