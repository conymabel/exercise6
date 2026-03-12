// Jiménez Jiménez Cony Mabel ID: 4963 - TDSM4A
// Exercise 6: Staircase Function

/*
This program defines a function called createStaircase that receives a number n.
The function prints a staircase pattern using the character "#". A loop increases
the number of "#" symbols in each line until it reaches n levels.
*/

function createStaircase(n) { // Function to create a staircase pattern

    for (let i = 1; i <= n; i++) { // Loop from 1 to n to create each level of the staircase
        console.log("#".repeat(i)); // Print the current level of the staircase by repeating the "#" character i times
    }

}

// Example
createStaircase(3); // Send 3 as an argument to create a staircase with 3 levels 