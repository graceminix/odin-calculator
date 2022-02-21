var une = 0;
var deux = 0;
var operator = 0;
var result = 0;

function addNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    return (a + b);
}

function subtractNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    return (a - b);
}

function multiplyNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    return (a * b);
}

function divideNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    return (a / b);
}

function operate(operator, a, b) {
    if (operator == 1) {
        return addNumbers(a, b);
    } else if (operator == 2) {
        return subtractNumbers(a, b);
    } else if (operator == 3) {
        return multiplyNumbers(a, b);
    } else if (operator == 4) {
        return divideNumbers(a, b);
    } else {
        return ('ERROR');
    }
}

let answer = document.querySelector('.screen');
let initial = document.createTextNode(0);
answer.appendChild(initial);

let equals = document.querySelector('.enter');
equals.addEventListener("click", totalAnswer);

function totalAnswer() {
    if (operator != 0) {
        let final = operate(operator, une, deux);
        let answer = document.querySelector('.screen');
        let result = document.createTextNode(final);
        answer.textContent = final;
    } else {
        console.log('womp')
    }
}


let equal = document.querySelector('.one')
equal.addEventListener("click", logVariable1);

function logVariable1() {
    if (operator == 0) {
        une += '1';
        parseInt(une);
        console.log(une);
    } else {
        deux += '1';
        parseInt(deux);
        console.log('deux: ' + deux);
    }
}


