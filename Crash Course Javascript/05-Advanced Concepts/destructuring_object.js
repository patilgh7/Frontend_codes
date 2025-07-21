// De-structuring is extracting properties from object easily.

let product = {
    company: 'Mango',
    itemName: 'Cotton stripped t-shirt',
    price: 861
}


//1. Without Destructuring:
// You access object properties one by one:
console.log('----------------------------------------------------');

console.log('Without Destructuring: ');

let compName = product.company;
let iName = product.itemName;
let pricing = product.price;

console.log(compName);
console.log(iName);
console.log(pricing);



console.log('----------------------------------------------------');


// 2. With Destructuring:
// You can extract all or some properties directly:

// Correct Destructuring:
console.log('Correct Destructuring: ');

let { company, itemName, price } = product;

console.log(company);   // Mango
console.log(itemName);  // Cotton stripped t-shirt
console.log(price);     // 861


/*
Important Note : 

Destructuring Requires Exact Property Names
When destructuring an object, you must use the exact property names as they exist in the object. Otherwise, the variables will be undefined.

*/

console.log('----------------------------------------------------');

// Wrong Destructuring (doesn't match property names):

console.log('Wrong Destructuring: ');

let { company2, itemName2, price2 } = product;

console.log(company2);   // undefined
console.log(itemName2);  // undefined
console.log(price2);     // undefined

console.log('----------------------------------------------------');


// Want to Rename the Keys While Destructuring?
// You can do this using : syntax:
console.log('If You Want to Rename the Keys While Destructuring: ');

let { company: company_newName, itemName: itemName_newName, price: price_newName } = product;

console.log(company_newName);   // Mango
console.log(itemName_newName);  // Cotton stripped t-shirt
console.log(price_newName);      // 861

console.log('----------------------------------------------------');



/*

Note : 

Array Destructuring: Names Don’t Matter

const colors = ['red', 'green', 'blue'];
const [first, , third] = colors;
Here:

first and third are just any variable names.

Array destructuring is position-based, not name-based.

first gets index 0 → 'red'

third gets index 2 → 'blue'

So the variable names can be anything you want:

const [x, , z] = colors;
console.log(x); // 'red'
console.log(z); // 'blue'
✔️ It works because array destructuring only cares about the order of elements.


====================================================================================


Object Destructuring: Names Must Match Keys

const product = {
  company: 'Mango',
  itemName: 'T-shirt',
  price: 861
};

const { company, itemName, price } = product; // ✅ Works
But if you write:


const { comp, item, cost } = product; // ❌ Doesn't work
console.log(comp); // undefined
Why?

Because comp, item, and cost are not actual keys in the product object.

Object destructuring is key-based, so the names must exactly match the property keys of the object.



*/