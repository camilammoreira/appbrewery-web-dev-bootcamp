// Fibonacci Generator: practice to the For loop

var output = [0, 1];

function fibonacciGenerator (n) {
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } 
    for (var i = 2; i < n; i++) {
        output.push(output[(output.length - 2)] + output[(output.length - 1)]);
    }
    return output;
}

fibonacciGenerator(5);