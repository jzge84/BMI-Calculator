function calculateBMI(weight, height) {
    if (height <= 0 || weight <= 0) {
        return "Invalid input";
    }
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("bmi-form");
    const resultDisplay = document.getElementById("bmi-result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        
        const bmi = calculateBMI(weight, height);
        resultDisplay.textContent = `Your BMI is: ${bmi}`;
    });
});