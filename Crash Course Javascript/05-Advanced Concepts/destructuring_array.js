//Basic Array Destructuring Example
console.log('--------------------------');
console.log('Basic Array Destructuring Example : ');

const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// Array destructuring is position-based:
// a gets numbers[0], b gets numbers[1], and so on.


// Skip Elements in Array

console.log('--------------------------');
console.log('Skip Elements in Array : ');

const colors = ['red', 'green', 'blue'];

const [first, , third] = colors;

console.log(first); // red
console.log(third); // blue

// Here, green is skipped.


console.log('--------------------------');


// Destructure with Default Values
console.log('Destructure with Default Values : ');

const fruits = ['apple'];

const [fruit1, fruit2 = 'banana'] = fruits;

console.log(fruit1); // apple
console.log(fruit2); // banana (default used)

console.log('--------------------------');


// Swapping Variables
console.log('Swapping Variables : ');

let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(x); // 10
console.log(y); // 5

console.log('--------------------------');


/*
Note :

Key Differences Between Object and Array Destructuring

| Feature       | Object             | Array                       |
| ------------- | ------------------ | --------------------------- |
| Based on      | **Property name**  | **Index (position)**        |
| Syntax        | `{ key } = object` | `[var1, var2] = array`      |
| Order matters | ❌ No               | ✅ Yes                       |
| Renaming      | ✅ Supported        | 🔄 Not needed (by position) |


*/