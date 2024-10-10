```
let num1 = '';
let num2 = '';
let operator = '';
let result = '';

function num(n) {
    num1 += n.toString();
    document.getElementById('yourinputId').value = num1;
}

function clearDisplay() {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    document.getElementById('yourinputId').value = '';
}

function backspace() {
    num1 = num1.slice(0, -1);
    document.getElementById(''yourinputId).value = num1;
}

function divide() {
    operator = '/';
    num2 = num1;
    num1 = '';
    document.getElementById('yourinputId').value = operator;
}

function multiply() {
    operator = '*';
    num2 = num1;
    num1 = '';
    document.getElementById('yourinputId').value = operator;
}

function subtract() {
    operator = '-';
    num2 = num1;
    num1 = '';
    document.getElementById('yourinputId').value = operator;
}

function add() {
    operator = '+';
    num2 = num1;
    num1 = '';
    document.getElementId('yourinputId').value = operator;
}

function exp() {
    operator = '^';
    num2 = num1;
    num1 = '';
    document.getElementById('yourinputId').value = operator;
}

function equals() {
    switch (operator) {
        case '/':
            result = parseFloat(num2) / parseFloat(num1);
            break;
        case '*':
            result = parseFloat(num2) * parseFloat(num1);
            break;
        case '-':
            result = parseFloat(num2) - parseFloat(num1);
            break;
        case '+':
            result = parseFloat(num2) + parseFloat(num1);
            break;
        case '^':
            result = Math.pow(parseFloat(num2), parseFloat(num1));
            break;
        default:
            break;
    }
    document.getElementById('yourinputId').value = result;
    num1 = result.toString();
    num2 = '';
    operator = '';
}
```

