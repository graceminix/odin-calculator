var une = 0;
var deux = 0;
var operator = 0;
var result = 0;
var counter = 0;

function addNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    answer = (a + b);
    return Math.round(answer * 100) / 100;
}

function subtractNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    answer = (a - b);
    return Math.round(answer * 100) / 100;
}

function multiplyNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    answer = (a * b);
    return Math.round(answer * 100) / 100;
}

function divideNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    if (b == 0) {
        return ('Absolutely not!');
    }
    answer = (a / b);
    return Math.round(answer * 100) / 100;
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
        une = final;
        deux = 0;
        operator = 0;
        counter = 0;
    }
}


let uno = document.querySelector('.one')
uno.addEventListener("click", logVariable1);

function logVariable1() {
    if (operator == 0) {
        if (une == '0') {
            une = 1;
        } else {
            une += '1';
            parseInt(une);
        }
        displayNumber1();
    } else {
        if (deux == '0') {
            deux = 1;
        } else {
            deux += '1';
            parseInt(deux);
        }
        displayNumber2();
    }
}

let dos = document.querySelector('.two')
dos.addEventListener("click", logVariable2);

function logVariable2() {
    if (operator == 0) {
        if (une == '0') {
            une = 2;
        } else {
            une += '2'
            parseInt(une);
        }
        displayNumber1();
    } else {
        if (deux == '0') {
            deux = 2;
        } else {
            deux += '2';
            parseInt(deux);
        }
        displayNumber2();
    }
}

let tres = document.querySelector('.three')
tres.addEventListener("click", logVariable3);

function logVariable3() {
    if (operator == 0) {
        if (une == '0') {
            une = 3;
        } else {
            une += '3';
            parseInt(une);
        }
        displayNumber1();
    } else {
        if (deux == '0') {
            deux = 3;
        } else {
            deux += '3';
            parseInt(deux);
        }
        displayNumber2();
    }
}

let quatro = document.querySelector('.four')
quatro.addEventListener("click", logVariable4);

function logVariable4() {
    if (operator == 0) {
        if (une == '0') {
            une = 4;
        } else {
            une += '4';
            parseInt(une);
        }
        displayNumber1();
    } else {
        if (deux == '0') {
            deux = 4;
        } else {
            deux += '4';
            parseInt(deux);
        }
        displayNumber2();
    }
}

let cinqo = document.querySelector('.five')
cinqo.addEventListener("click", logVariable5);

function logVariable5() {
    if (operator == 0) {
        if (une == '0') {
            une = 5;
        } else {
            une += '5';
            parseInt(une);
        }
        displayNumber1();
    } else {
        if (deux == '0') {
            deux = 5;
        } else {
            deux += '5';
            parseInt(deux);
        }
        displayNumber2();
    }
}

let seis = document.querySelector('.six')
seis.addEventListener("click", logVariable6);

function logVariable6() {
    if (operator == 0) {
        if (une == '0') {
            une = 6;
        } else {
            une += '6';
            parseInt(une);
        }
        displayNumber1();
    } else {
        if (deux == '0') {
            deux = 6;
        } else {
            deux += '6';
            parseInt(deux);
        }
        displayNumber2();
    }
}

let siete = document.querySelector('.seven')
siete.addEventListener("click", logVariable7);

function logVariable7() {
    if (operator == 0) {
        if (une == '0') {
            une = 7;
        } else {
            une += '7';
            parseInt(une);
        }
        displayNumber1();
    } else {
        if (deux == '0') {
            deux = 7;
        } else {
            deux += '7';
            parseInt(deux);
        }
        displayNumber2();
    }
}

let ocho = document.querySelector('.eight')
ocho.addEventListener("click", logVariable8);

function logVariable8() {
    if (operator == 0) {
        if (une == '0') {
            une = 8;
        } else {
            une += '8';
            parseInt(une);
        }
        displayNumber1();
    } else {
        if (deux == '0') {
            deux = 8;
        } else {
            deux += '8';
            parseInt(deux);
        }
        displayNumber2();
    }
}

let nuevo = document.querySelector('.nine')
nuevo.addEventListener("click", logVariable9);

function logVariable9() {
    if (operator == 0) {
        if (une == '0') {
            une = 9;
        } else {
            une += '9';
            parseInt(une);
        }
        displayNumber1();
    } else {
        if (deux == '0') {
            deux = 9;
        } else {
            deux += '9';
            parseInt(deux);
        }
        displayNumber2();
    }
}

let zera = document.querySelector('.zero')
zera.addEventListener("click", logVariable0);

function logVariable0() {
    if (operator == 0) {
        if (une == '0') {
            une = 0;
        } else {
            une += '0';
            parseInt(une);
        }
        displayNumber1();
    } else {
        if (deux == '0') {
            deux = 0;
        } else {
            deux += '0';
            parseInt(deux);
        }
        displayNumber2();
    }
}

let dit = document.querySelector('.decimal')
dit.addEventListener("click", logVariabledot);

function logVariabledot() {
    if (operator == 0) {
        if (checkDecimal(une) == false) {
            une += '.';
            parseInt(une);
            displayNumber1();
        }
    } else {
        if (checkDecimal(deux) == false) {
            deux += '.';
            parseInt(deux);
            displayNumber2();
        }
    }
}

let negative = document.querySelector('.negative')
negative.addEventListener("click", logVariableneg);

function logVariableneg() {
    if (operator == 0) {
        if (une == 0) {
            une = '-';
        } else  {
            une *= -1;
        }
        displayNumber1();
    } else {
        if (deux == 0) {
            deux = '-';
        } else {
            deux *= -1;
        }
        displayNumber2();
    }
}

let plus = document.querySelector('.plus')
plus.addEventListener("click", logVariablePlus);

function logVariablePlus() {
    if (counter == 0) {
        operator = 1;
        counter = 1;
    }
}

let minus = document.querySelector('.minus')
minus.addEventListener("click", logVariableMinus);

function logVariableMinus() {
    if (counter == 0) {
        operator = 2;
        counter = 1;
    }
}

let multiply = document.querySelector('.multiply')
multiply.addEventListener("click", logVariableMultiply);

function logVariableMultiply() {
    if (counter == 0) {
        operator = 3;
        counter = 1;
    }
}

let divide = document.querySelector('.divide')
divide.addEventListener("click", logVariableDivide);

function logVariableDivide() {
    if (counter == 0) {
        operator = 4;
        counter = 1;
    }
}

let clear = document.querySelector('.clear')
clear.addEventListener("click", logVariableClear);

function logVariableClear() {
    une = 0;
    deux = 0;
    operator = 0;
    counter = 0;
    let answer = document.querySelector('.screen');
    removeAllText(answer);
    let initial = document.createTextNode(0);
    answer.appendChild(initial);
}


//code from Jonathan Dumaine

function removeAllText(element) {

    // loop through all the nodes of the element
    var nodes = element.childNodes;

    for(var i = 0; i < nodes.length; i++) {

        var node = nodes[i];

        // if it's a text node, remove it
        if(node.nodeType == Node.TEXT_NODE) {

            node.parentNode.removeChild(node);


            i--; // have to update our incrementor since we just removed a node from childNodes

        } else

        // if it's an element, repeat this process
        if(node.nodeType == Node.ELEMENT_NODE) {

            removeAllText(node);

        }
    }
}
//Function displays number une on screen
function displayNumber1() {
    let answer = document.querySelector('.screen');
    removeAllText(answer);
    let initial = document.createTextNode(une);
    answer.appendChild(initial);
}

//Function displays number on screen
function displayNumber2() {
    let answer = document.querySelector('.screen');
    removeAllText(answer);
    let initial = document.createTextNode(deux);
    answer.appendChild(initial);
}

//Function checks if there is a decimal in string.
function checkDecimal(num) {
    let string = num.toString();
    let answer = string.includes('.');
    if (answer == true) {
        return true;
    } else {
        return false;
    }
}

