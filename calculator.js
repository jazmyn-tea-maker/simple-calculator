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

        let answer;
        n1 = parseInt(num1);
        n2 = parseInt(num2);

        switch (operation) {
            case 'add':
                answer = n1 + n2;
                break;
            case 'subtract':
                answer = n1 - n2;
                break;
            case 'multiply':
                answer = n1 * n2;
                break;
            case 'divide':
                answer = n1 / n2;
        }

        number = '';
        number2 = ''; //Resets.
        return document.getElementById('user-num').innerText = answer;

    
};


let numAndOpConfirm = (operation) => {

    if (!number) {
        number = document.getElementById('user-num').innerText;
    }
    document.getElementById('user-num').innerText = '0'

    let enterFunc = (e) => { //Applies to the whole page.
        if (e.key == 'Enter' || e.eventCode == 13) {
            number2 = document.getElementById('user-num').innerText;;
            operate(operation, number, number2);
            removeEventListener('keydown', enterFunc);
        }
    }

    addEventListener('keydown', enterFunc);

    let equalBtn = document.getElementById('equal-btn');
    
    let equalFunc = () =>{
        number2 = document.getElementById('user-num').innerText;;
        operate(operation, number, number2);
        equalBtn.removeEventListener('click', equalFunc);
    }

    equalBtn.addEventListener('click', equalFunc);
}




document.getElementById('add-btn').addEventListener('mouseup', function adder () {
    numAndOpConfirm( 'add' );
}, false);

document.getElementById('subtract-btn').addEventListener('mouseup', function subtracter () {
    numAndOpConfirm( 'subtract' );
}, false);

document.getElementById('multiply-btn').addEventListener('mouseup', function multiplier () {
    numAndOpConfirm( 'multiply' );
}, false);

document.getElementById('divide-btn').addEventListener('mouseup', function divider () {
    numAndOpConfirm( 'divide' );
}, false);


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
    number = '';
    number2 = '';
}

addEventListener('keydown', function(e) { //Applies to the whole page.
    if (e.key == 'Backspace' || e.eventCode == 8){
        numberClear();
    }
})

document.getElementById('clear-btn').addEventListener('click', numberClear);