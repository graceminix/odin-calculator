var one = 0;
var two = 0;

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
    if (operator == 'add') {
        return addNumbers(a, b);
    } else if (operator == 'subtract') {
        return subtractNumbers(a, b);
    } else if (operator == 'multiply') {
        return multiplyNumbers(a, b);
    } else {
        return divideNumbers(a, b);
    }
}

//Below is how to add a number to the screen!  Delete this once it's done!

// let answer = document.querySelector('.screen');
// let initial = document.createTextNode(0);
// answer.appendChild(initial);


let equal = document.querySelector('.one')
equal.addEventListener("click", logVariable);

function logVariable() {
    console.log(1)
}



