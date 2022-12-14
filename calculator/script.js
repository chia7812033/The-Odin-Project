const numberButtons = document.querySelectorAll(".number")
numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        display(e.target.dataset.n);
    })
});

const result = document.querySelector(".result")
const subResult = document.querySelector(".sub-result")

function display(n) {
    if (result.textContent === "DIVIDE BY ZERO") {
        result.textContent = n;
    }
    else {
        result.textContent += n
    }
}

document.querySelector("#clear").addEventListener('click', () => {
    result.textContent = "";
    subResult.textContent = ""
})

document.querySelector("#delete").addEventListener('click', () => {
    result.textContent = result.textContent.slice(0, -1);
})

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        operator(e.target.dataset.o)
    })
})

function operator(operator) {
    showSubResult(operator);
    result.textContent = ""
}

function showSubResult(operator) {
    subResult.textContent = result.textContent + " " + operator;
}

const equalButton = document.querySelector(".equal");
equalButton.addEventListener('click', () => {
    const equation = subResult.textContent + " " + result.textContent;
    calculate(equation)
    console.log(equation);
})

function calculate(equation) {
    splitNumber = equation.split(" ");
    switch (splitNumber[1]) {
        case '+':
            result.textContent = add(splitNumber[0], splitNumber[2]);
            break;
        case '-':
            result.textContent = sub(splitNumber[0], splitNumber[2]);
            break;
        case 'x':
            result.textContent = mul(splitNumber[0], splitNumber[2]);
            break;
        case '/':
            result.textContent =  div(splitNumber[0], splitNumber[2]);
            break;
        default:
            break;
    }
    subResult.textContent = "";
}

function add(a, b) {
    a = Number(a);
    b = Number(b);
    return (a + b).toString();
}

function sub(a, b) {
    a = Number(a);
    b = Number(b);
    return (a - b).toString();
}

function mul(a, b) {
    a = Number(a);
    b = Number(b);
    return (a * b).toString();
}

function div(a, b) {
    a = Number(a);
    b = Number(b);
    if (b === 0) {
        return "DIVIDE BY ZERO";
    }
    return (a / b).toFixed(2).toString();
}
