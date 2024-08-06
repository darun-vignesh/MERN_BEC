const form = document.querySelector('form');
const num1 = document.querySelector('#num1');
const operator = document.querySelector('#operator');
const num2 = document.querySelector('#num2');
const calculate = document.querySelector('#calculate');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1Value = parseFloat(num1.value);
    const num2Value = parseFloat(num2.value);
    const operatorValue = operator.value;

    if (isNaN(num1Value) || isNaN(num2Value)) {
        result.textContent = 'Please enter valid numbers';
        return;
    }

    let calculation;

    switch (operatorValue) {
        case '+':
            calculation = num1Value + num2Value;
            break;
        case '-':
            calculation = num1Value - num2Value;
            break;
        case '*':
            calculation = num1Value * num2Value;
            break;
        case '/':
            if (num2Value === 0) {
                result.textContent = 'Cannot divide by zero';
                return;
            }
            calculation = num1Value / num2Value;
            break;
        case '^':
                calculation = Math.pow(num1Value, num2Value);
                break;
        case '//':
                calculation = Math.floor(num1Value / num2Value);
                break;
        default:
            result.textContent = 'Invalid operator';
            return;
    }

    result.textContent =`Result: ${calculation}`;
});