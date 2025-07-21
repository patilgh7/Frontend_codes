
// Spread Operator represented by three dots (...)

// 1. Spread Operator (...)
// Used to expand an array or object

const arr1 = [1, 2, 3];
const arr2 = [arr1];  // two dimensional array if you write like this 

console.log(arr1);
console.log(arr2); 

// Using spread operator
console.log('------------------------------');
console.log('Using spread operator : ');

// Array Expansion
console.log('1.In Array Expansion : ');

const arr3 = [...arr1];
console.log(arr3); 


const arr4 = [...arr1, 10, 20]; // adding 10 and 20 new elements with taking whole array1 values in array4
console.log(arr4);

console.log('------------------------------');


// Object Expansion
console.log('2.In Object Expansion : ');


const obj1 = { a:1, b:2 };
console.log(obj1);

const obj2 = {...obj1, c:3 }; // adding c new element with taking whole object1 values in object2
console.log(obj2);

console.log('------------------------------');

// Function arguments
console.log('3.In Function arguments : ');

function sum(a,b,c) {
    return a + b + c;
}

const numbers = [10, 20, 30];
console.log(sum(...numbers));

console.log('------------------------------');

/*

Note : 

The spread operator (...) and rest operator (...) use the same syntax (...), but their purpose and behavior are completely different depending on where and how they're used.

| Feature       | **Spread Operator**                   | **Rest Operator**                             |
| ------------- | ------------------------------------- | --------------------------------------------- |
| **Purpose**   | *Expands* (spreads) elements          | *Collects* (gathers) remaining elements       |
| **Used in**   | Function calls, array/object literals | Function parameters, destructuring assignment |
| **Data Flow** | Breaks apart / expands                | Groups / gathers                              |

*/