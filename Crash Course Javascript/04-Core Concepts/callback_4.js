// Array Callback functions 

const a = [4, 1, 6, -2, 3, -1, -5];

const findNegativeNum = (num) => num < 0;


// To find all Negative Number use filter function
const allNegtiveNumbers = a.filter(findNegativeNum);

console.log('All Negative Numbers : '+allNegtiveNumbers);


// To find first Negative Number use find function
const firstNeg = a.find(findNegativeNum);

console.log('First Negative Number : '+firstNeg);

 