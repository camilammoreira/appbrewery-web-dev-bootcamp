//BMI Calculator

// function bmiCalculator(weight, height) {
//     var bmiResult = Math.round(weight / Math.pow(height,2); // The ** operator is recent and doesn't work in IE
//     return bmiResult;
// }

// var bmi = bmiCalculator(56, 1.8);
// console.log(bmi);

//CONDIDITON STATEMENTS (IF ELSE), COMPARATORS AND COMBINING COMPARATORS
function bmiCalculator (weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));
    var interpretation = "";
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight."
    } else if (bmi >= 18.5 && bmi < 24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
    }
    return interpretation;
}

bmiCalculator(500, 1.8);