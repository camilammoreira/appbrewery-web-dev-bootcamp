//BMI Calculator
function bmiCalculator(weight, height) {
    var bmiResult = Math.round(weight / Math.pow(height,2); // The ** operator is recent and doesn't work in IE
    return bmiResult;
}

var bmi = bmiCalculator(56, 1.8);
console.log(bmi);