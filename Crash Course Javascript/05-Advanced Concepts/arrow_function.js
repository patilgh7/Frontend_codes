
// 1) Regular function written style
// This is standard style
function sum (a, b) {
    return a + b;
}

console.log(sum(2,3));


// 2) Creating anonymous function and assigning it to variable
// Refer regular function as a standard and remove name from regular function creating style so it become anonymous.
let addition = function(a, b) {
    return a + b;
}

console.log(addition(4,7));


// **** Arrow Function **** We use arrow function to create anonymous function

// 3) For Multiline statements body you use below approach
// Refer regular function as a standard 
// and don't give function keyword and function name 

let sum1 = (a, b) => {
    return a + b;
}

console.log(sum1(5,10));


// 4) For singleline statement body you use below approach
// Refer regular function as a standard 
// and don't give function keyword and function name also remove curly braces and return statement
let sum2 = (a, b) => a + b;

console.log(sum2(55,40));

// 5) For single argument you use below approach
// Refer regular function as a standard 
// and don't give function keyword and function name also remove curly braces and return statement and main thing remove brackets if function has single parameter.

let square = num => num * num;

console.log(square(3));  // passing single argument to function



