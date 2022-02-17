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
