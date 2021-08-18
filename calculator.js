//Make functions for each: add, subtract, multiply, divide.
//They each take two values.

let number = ''; //It's already in a function and won't freak out.
let number2 = '';

// So when the user clicks on the keyboard, I want the buttons corresponding to 
// change the inner text of the element displaying number and number2.
// Also, when the first number is confirmed, it should be displayed in a lighter tone to the
// side. And when the user clicks an operation button, it'll show up to the side.
// When both numbers are confirmed, the answer will be larger and to the right, the full expression to
// the side with the other lighter toned ones.

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


let numAndOpConfirm = (num, operation) => {
    if (!number) { //If the number does not exist, the current input will do.
        number = num;
    }
    if (number && number2) { //Bug catch--If user cheekily clicks a function button instead of the equal button/enter key.
        operate(operation, number, number2);
    }

    addEventListener('keydown', function(e) { //Applies to the whole page.
        if (e.key == 'Enter' || e.eventCode == 13) {
            if (number) {
                number2 = num;
                operate(operation, number, number2);
            }
        }
    })
    
    let equalBtn = document.getElementById('equal-btn');
    equalBtn.addEventListener('click', function () {
        if (number) {
            number2 = num;
            operate(operation, number, number2);
            number = '';
            number2 = '';
        }
    })
}

let currentNum = parseInt(document.getElementById('user-num').innerText);

document.getElementById('add-btn').addEventListener('click', numAndOpConfirm('add', currentNum));

document.getElementById('subtract-btn').addEventListener('click', numAndOpConfirm('subtract', currentNum));

document.getElementById('multiply-btn').addEventListener('click', numAndOpConfirm('multiply', currentNum));

document.getElementById('divide-btn').addEventListener('click', numAndOpConfirm('divide', currentNum));


let numberAdd = (e) => {
    n = e.target.id;
    let num = document.getElementById('user-num').innerText;
    if (num == '0') {
        num = '';
    }
    num += n;
    document.getElementById('user-num').innerText = num;
}

for (i = 0; i <= 9; i++) {
    document.getElementById(`${i}`).addEventListener('click', numberAdd);
}

let numberDelete = () => {
    currentNum = document.getElementById('user-num').innerText;
    if (currentNum == '0') {
        document.getElementById('user-num').innerText = '0';
        return;
    }
    currentNum = currentNum.split('');
    currentNum.pop();
    currentNum = currentNum.join('');
    if (currentNum == '') {
        document.getElementById('user-num').innerText = '0';
        return;
    }
    document.getElementById('user-num').innerText = currentNum;
}

document.getElementById('delete-btn').addEventListener('click', numberDelete);

let numberClear = () => {
    document.getElementById('user-num').innerText = '0';
}

addEventListener('keydown', function(e) { //Applies to the whole page.
    if (e.key == 'Backspace' || e.eventCode == 8){
        currentNum = document.getElementById('user-num').innerText.split('');
        currentNum.pop();
        currentNum = currentNum.join('');
        document.getElementById('user-num').innerText = currentNum;
    }
})

document.getElementById('clear-btn').addEventListener('click', numberClear);