
console.log('%c A history of operations will be logged in the console. You can also go to old operations using the up arrow key. Enjoy! :)', 'color: blue; font-size: 15px')

let number = ''; 
let number2 = '';
let pastOpsArr = [];
let placeInPast;

let operate = (operation, num1, num2) => {

    let answer;
    n1 = parseInt(num1);
    n2 = parseInt(num2);

    let reset = () => {
        document.getElementById('user-num').style = `
        font-size: 40px;
        line-height: auto;
        `;
        document.getElementById('user-num').innerText = '0';
        document.getElementById('expression').innerText = '';
        number = '';
        number2 = '';
    };

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
            if (n1 == 0 && n2 == 0) {
                answer = 'Not cool, dude.'
                document.getElementById('user-num').style = `
                font-size: 25px;
                line-height: 55px;
                `;
                setTimeout(reset, 900);
                break;
            }
            answer = n1 / n2;
            break;
        case 'exponent':
            answer = n1 ** n2;
    }

    number = ''; //Falsey so that
    number2 = ''; //in the numAndOpConfirm func, it'll set the first number correctly.
    
    let expression = document.getElementById('expression').innerText;
    if (operation == 'exponent') {
        expression = `${n1} ^ ${n2} =`;
    }

    console.log(`${expression} ${answer}`);
    pastOpsArr.push ({
        exp: expression,
        ans: answer
    });
    placeInPast = pastOpsArr.length - 1
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

    let op;
    if (operation == 'add') {
        op = '+';
    } else if (operation == 'subtract') {
        op = '-'
    } else if (operation == 'multiply') {
        op = '&times;'
    } else if (operation == 'divide') {
        op = '&divide;'
    } else if (operation == 'exponent') {
        op = '^'
    }
    document.getElementById('expression').innerHTML = `${number} ${op}`;

    let enterFunc = (e) => { 
        if (e.key == 'Enter' || e.eventCode == 13) {

            let expression = document.getElementById('expression').innerText;
            number2 = document.getElementById('user-num').innerText;
            document.getElementById('expression').innerText = `${expression} ${number2} =`

            if (operation == 'exponent') {
                document.getElementById('expression').innerText = `${expression} <sup>${number2}</sup> =`
            }

            operate(operation, number, number2);
            removeEventListener('keydown', enterFunc);
        }
    }

    addEventListener('keydown', enterFunc); //Applies to the whole page, when user clicks enter.

    let equalBtn = document.getElementById('equal-btn');
    
    let equalFunc = () =>{ //Event listeners don't get replaced (overwritten), dummy!
        let expression = document.getElementById('expression').innerText;
        number2 = document.getElementById('user-num').innerText;
        document.getElementById('expression').innerText = `${expression} ${number2} =`

        if (operation == 'exponent') {
            document.getElementById('expression').innerHTML = `${number} <sup>${number2}</sup> =`
        }
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
        document.getElementById('expression').innerText = '';
        return;
    }
    document.getElementById('user-num').innerText = currentNum;
}

document.getElementById('delete-btn').addEventListener('click', numberDelete);

let numberClear = () => {
    document.getElementById('user-num').innerText = '0';
    document.getElementById('expression').innerText = '';
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

    if (e.key == 'ArrowUp' || e.eventCode == 38) {
        if (placeInPast - 1 >= 0) {
            placeInPast = placeInPast - 1;
        } else {
            return;
        }
        console.log(placeInPast + ' Up');
        if (pastOpsArr.length > 0 && placeInPast >= 0) {
            document.getElementById('expression').innerHTML = pastOpsArr[placeInPast].exp;
            document.getElementById('user-num').innerText = pastOpsArr[placeInPast].ans;
        }
    }

    if (e.key == 'ArrowDown' || e.eventCode == 40) {
        if (placeInPast + 1  < pastOpsArr.length) {
            placeInPast = placeInPast + 1;
        } else {
            return;
        }
        console.log(placeInPast + ' Down');
        if (pastOpsArr.length > 0 && placeInPast < pastOpsArr.length) {
            document.getElementById('expression').innerHTML = pastOpsArr[placeInPast].exp;
            document.getElementById('user-num').innerText = pastOpsArr[placeInPast].ans;
        }
    }
})

document.getElementById('clear-btn').addEventListener('click', numberClear);