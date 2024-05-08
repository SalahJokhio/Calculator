let displayValue = "";
let calculationHistory = document.getElementById("calculationHistory");

function appendValue(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(displayValue);
        let calculation = displayValue + " = " + result;
        document.getElementById("display").value = result;
        displayValue = "";
        recordCalculation(calculation);
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}

function recordCalculation(calculation) {
    let calculationLine = document.createElement("div");
    calculationLine.textContent = calculation;
    calculationLine.style.color = "white";
    calculationHistory.appendChild(calculationLine);
}
