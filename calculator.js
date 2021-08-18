//Make functions for each: add, subtract, multiply, divide.
//They each take two values.


let number;
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

    return operation == 'add' ? add(num1, num2) :
    operation == 'subtract' ? subtract(num1, num2) :
    operation == 'multiply' ? multiply(num1, num2) :
    operation == 'divide' ? divide(num1, num2) :
    false;
}


