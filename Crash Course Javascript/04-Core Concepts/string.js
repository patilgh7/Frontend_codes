let str1 = "KGCoding By Prashant Sir";
console.log(str1);

let str2 = 'Subscribe Now';
console.log(str2);

let noOfLikes = 10000;

// Using Backtick (`) => Template Literal
let str3 = `Like this video , already like by ${noOfLikes}`;
console.log(str3);

// Using Single Quote => String Concatenation
let str4 = 'Like this video , already like by ' + noOfLikes;
console.log(str4);


// Note : Instead of double quote use single quote in javascript

/*

| Aspect            | Single Quotes `'`             | Double Quotes `"`             |
| ----------------- | ----------------------------- | ----------------------------- |
| Functionality     | Same                          | Same                          |
| Best Use Case     | When your string contains `"` | When your string contains `'` |
| Need for Escaping | Need to escape `'` inside     | Need to escape `"` inside     |

Refer Below examples

*/

let q1 = "It's a good day";
console.log(q1);

let q2 = 'He said,"Hello!"';
console.log(q2);


let q3 = 'It\'s a good day';
console.log(q3);

let q4 = "He said,\"Hello!\"";
console.log(q4);
