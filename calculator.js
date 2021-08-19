
let number = ''; 
let number2 = '';

// Also, when the first number is confirmed, it should be displayed in a lighter tone to the
// side. And when the user clicks an operation button, it'll show up to the side.
// When both numbers are confirmed, the answer will be larger and to the right, the full expression to
// the side with the other lighter toned ones.

let operate = (operation, num1, num2) => {

        let answer;
        n1 = parseInt(num1);
        n2 = parseInt(num2);
        console.log(num2);

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
                break;
            case 'exponent':
                answer = n1 ** n2;
        }

        number = ''; //Falsey so that
        number2 = ''; //in the numAndOpConfirm func, it'll set the first number correctly.
        return document.getElementById('user-num').innerText = answer;

    
};


let numAndOpConfirm = (operation) => {
    
    if (!number) { //If it's falsey, or '', it'll use what was 'inputted'.
        number = document.getElementById('user-num').innerText;
    }
    if (operation == 'negative') {
        number2 = -1;
        operate('multiply', number, number2); //Easier to just use a function that's already there.
        return;
    }
    document.getElementById('user-num').innerText = '0';

    let enterFunc = (e) => { 
        if (e.key == 'Enter' || e.eventCode == 13) {
            number2 = document.getElementById('user-num').innerText;;
            operate(operation, number, number2);
            removeEventListener('keydown', enterFunc);
        }
    }

    addEventListener('keydown', enterFunc); //Applies to the whole page, when user clicks enter.

    let equalBtn = document.getElementById('equal-btn');
    
    let equalFunc = () =>{ //Event listeners don't get replaced (overwritten), dummy!
        number2 = document.getElementById('user-num').innerText;
        operate(operation, number, number2);
        equalBtn.removeEventListener('click', equalFunc);
    }

    equalBtn.onclick = equalFunc; // Unless they do, of course. (Line 62)
}




document.getElementById('add-btn').addEventListener('click', function adder () {
    numAndOpConfirm( 'add' );
}); 

document.getElementById('subtract-btn').addEventListener('click', function subtracter () {
    numAndOpConfirm( 'subtract' );
});

document.getElementById('multiply-btn').addEventListener('click', function multiplier () {
    numAndOpConfirm( 'multiply' );
});

document.getElementById('divide-btn').addEventListener('click', function divider () {
    numAndOpConfirm( 'divide' );
});

document.getElementById('expo-btn').addEventListener('click', function exponent () {
    numAndOpConfirm( 'exponent' );
});

document.getElementById('neg-btn').addEventListener('click', function makeNeg () {
    numAndOpConfirm( 'negative' );
});

let numberAdd = (e) => {
    n = e.target.id;
    let num = document.getElementById('user-num').innerText;
    if (num == '0') { //So zero is replaced instead of crammed onto.
        num = '';
    }
    document.getElementById('user-num').innerText = num + n;
}

for (i = 0; i <= 9; i++) { //Lazy way to add event listeners to the numpad btns.
    //Who would want to write all that...?
    document.getElementById(`${i}`).addEventListener('click', numberAdd);
}

let numberDelete = () => {
    currentNum = document.getElementById('user-num').innerText;
    currentNum = currentNum.split('');
    currentNum.pop();
    currentNum = currentNum.join('');
    if (currentNum == '') { //I wanted a zero in place of blankness.
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

let numberAddKeyBoard = (n) => {
    let num = document.getElementById('user-num').innerText;
    if (num == '0') { //So zero is replaced instead of crammed onto.
        num = '';
    }
    document.getElementById('user-num').innerText = num + n;
}

addEventListener('keydown', function(e) { //Applies to the whole page when delete is pressed.
    if (e.key == 'Backspace' || e.eventCode == 8){
        numberDelete();
    }
    for (i = 0; i <= 9; i++) {
        for (j = 48; j <= 57; j++) { //Event codes go from 48 (0) to 57 (9).
            if (e.key == i || e.eventCode == j) {
                numberAddKeyBoard(i);
                return;
            }
        }
    }
    if (e.key == '-' || e.eventCode == 173) {
        numAndOpConfirm('subtract');
    }
    if (e.key == '+' || e.eventCode == 61) {
        numAndOpConfirm('add');
    }
    if (e.key == '*' || e.eventCode == 56) {
        numAndOpConfirm('multiply');
    }
    if (e.key == '/' || e.eventCode == 191) {
        numAndOpConfirm('divide');
    }
})

document.getElementById('clear-btn').addEventListener('click', numberClear);