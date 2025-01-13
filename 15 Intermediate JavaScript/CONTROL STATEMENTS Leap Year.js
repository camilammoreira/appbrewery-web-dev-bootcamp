// Leap Year Check

function isLeap(year) {
    var message = "";
    if (year % 4 === 0) {
        if (year % 100 != 0) {
            message = "Leap year.";
        } else if (year % 400 === 0) {
            message = "Leap year.";
        }
    } else {
        message = "Not leap year.";
    }
    return message;
}

isLeap(1989);