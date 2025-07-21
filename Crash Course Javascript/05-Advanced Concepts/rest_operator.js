// 2. Rest Operator (...)
// Used to collect multiple elements into an array (or object)
// a) In Function Parameters
console.log('Rest Operator (...)');
console.log('--------------------------------------');

console.log('a) In Function Parameters : ');


function add(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

console.log(add(1, 2, 3, 4)); // 10

// ...nums collects all arguments into an array.

console.log('--------------------------------------');


// b) In Array Destructuring
console.log('b) In Array Destructuring : ');

const [first, ...rest] = [10, 20, 30, 40];

console.log(first); // 10
console.log(rest);  // [20, 30, 40]

console.log('--------------------------------------');

// c) In Object Destructuring
console.log('c) In Object Destructuring : ');

const user = { name: 'Amit', age: 25, city: 'Delhi' };
const { name, ...others } = user;

console.log(name);    // Amit
console.log(others);  // { age: 25, city: 'Delhi' }

console.log('--------------------------------------');

/*
Note : 

| Operator | Syntax | Main Use Case               | Direction |
| -------- | ------ | --------------------------- | --------- |
| Spread   | `...`  | Expands elements            | *Unpacks* |
| Rest     | `...`  | Collects remaining elements | *Packs*   |


*/ 