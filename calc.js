function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
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
    const equals = document.querySelector(".equals");
    let opKey;
    let num;
    let op;
    let answerChanged = false;

    keys.forEach(key => key.addEventListener("click", () => {
        if (key.classList.contains("clear")) {
            equation.textContent = "";
            answer.textContent = 0;
        } else if (key.classList.contains("operator")) {
            answerChanged = true;
            opKey = key;
            num = answer.textContent;
            op = key.textContent;
            equation.textContent = num + " " + op;
            opKey.disabled = true;
            equals.disabled = false;
            
        } else if (key.classList.contains("equals") && answerChanged) {
            equation.textContent = `${num} ${op} ${answer.textContent} =`;
            answer.textContent = operate(op, num, answer.textContent);
            num = answer.textContent;
            equals.disabled = true;

        } else {
            if (answer.textContent === "0" || answerChanged) {
                answer.textContent = key.textContent;
                opKey.disabled = false;
                // if (answerChanged) {
                //     answerChanged = false;
                // }
            } else
                answer.textContent += key.textContent;
        }
    }));

}

display();