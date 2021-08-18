//Make functions for each: add, subtract, multiply, divide.
//They each take two values.

let functionState; //Bug catch: if the user doesn't click the equal sign right away,
let number; //It's already in a function and won't freak out.
let number2;

//Connect each button to each operation string.

let operate = (operation, num1, num2) => {

    let add = (n1, n2) => {
        return n1 + n2;
    };

    let subtract = (n1, n2) => {
        return n1 - n2;
    };

    let multiply = (n1, n2) => {
        return n1 * n2;
    };

    let divide = (n1, n2) => {
        return n1 / n2;
    };

    return operation === 'add' ? add(num1, num2) :
    operation === 'subtract' ? subtract(num1, num2) :
    operation === 'multiply' ? multiply(num1, num2) :
    operation === 'divide' ? divide(num1, num2) :
    false;
};


// Here's how it goes: 
// User types or clicks in a number.
// It is confirmed as the first number variable value 
// AFTER clicking any of the operation buttons.
// Also when the function button is presssed,
// it will add an event listener to
// the equal sign which returns the operate function.
// The value returned for that becomes value number 1, and the
// cycle repeats.


