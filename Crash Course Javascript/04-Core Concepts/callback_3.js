function calculate (num1, num2, multiply) {
    return multiply(num1, num2);
}


// method 1 simple function
function multiply (a, b) {
    return a*b;
}


const multResult = calculate(3,4,multiply);
console.log(multResult);


/**
 * Note :
 * 
 * calculate is function which call another function multiply as a parameter
 * 
 */



// ***@@@***



// method 2 : Arrow function for substraction

const substraction = (a, b) => a - b;      

const subResult = calculate(25, 2, substraction);  // In calculate function substraction function used as a argument.

console.log(subResult);

// method 3 : Using  anonymous function for addition

// You can directly add anonymous function in calculate function.

const addition = calculate(15, 3, function (a, b) {
    return a+b;
});

console.log(addition);