// Array Methods
console.log('Array Methods :');
console.log('--------------------------------');

console.log('1) toString() : ');

const arr = [1, 2, 3, 4];
const str = arr.toString();

console.log(str);        // "1,2,3,4"
console.log(typeof str); // "string"


console.log('--------------------------------');

console.log('2) join() : ');

let num = [7, 8 , 9, 6];
let c = num.join("-");
console.log(c);

console.log('--------------------------------');

console.log('3) pop() : ');

let a = num.pop();
console.log(num, 'Popped Element is : ' +a); 
