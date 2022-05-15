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
    const displayDiv = document.querySelector(".display");

    keys.forEach(key => key.addEventListener("click", () => {
        if (key.classList.contains("clear")) {
            displayDiv.textContent = 0;
        } else if (key.classList.contains("operator")) {
            displayDiv.textContent += key.textContent;
            key.disabled = true;
        } else {
            displayDiv.textContent += key.textContent;
        }
    }));

}

display();