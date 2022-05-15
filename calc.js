function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(o, a, b) {
    if (o === "+") return add(a, b);
    if (o === "-") return subtract(a, b);
    if (o === "*") return multiply(a, b);
    if (o === "/") return divide(a, b);
}

function display() {
    const keys = document.querySelectorAll(".key");
    const equation = document.querySelector(".equation");
    const answer = document.querySelector(".answer");
    let num;
    let op;
    let opDisabled = false;

    keys.forEach(key => key.addEventListener("click", () => {
        if (key.classList.contains("clear")) {
            answer.textContent = 0;
        } else if (key.classList.contains("operator")) {
            num = answer.textContent;
            temp = num;
            op = key.textContent;
            opDisabled = true;
            equation.textContent = num + " " + op;

        } else if (key.classList.contains("equals")) {
            equation.textContent += ` ${answer.textContent} =`;
            answer.textContent = operate(op, num, answer.textContent);
            num = answer.textContent;
        } else {
            if (answer.textContent === "0" || opDisabled) {
                answer.textContent = key.textContent;
                opDisabled = false;
            } else
                answer.textContent += key.textContent;
        }
    }));

}

display();