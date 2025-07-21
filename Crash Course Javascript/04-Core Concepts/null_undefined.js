// Undefined => declared variable but no value is defined for that variable
// In simple term the bowl is not exist.

// null => value is null on purpose. The type is object that means memory is alloated. 
// In simple term The bowl is empty.

/*
| Feature                 | `undefined`                                  | `null`                          |
| ----------------------- | -------------------------------------------- | ------------------------------- |
| Type                    | `undefined` (primitive type)                 | `object` (this is historical)   |
| Assigned by             | JavaScript (default)                         | Developer (explicitly)          |
| Indicates               | Variable declared but uninitialized          | No value / intentional absence  |
| Common Use              | Uninitialized vars, missing function returns | Resetting values, empty objects |


In early JavaScript, null and undefined were both used to represent "no value", so to make life easier for developers, JavaScript made this special case:

undefined : 
Meaning: A variable has been declared, but no value is assigned.
Automatically assigned by JavaScript in some cases.

null :
Meaning: A variable is explicitly set to "no value".
Developer assign null when you want to clear or reset a variable.

*/


let x;
let y = null;

console.log(typeof x); // "undefined"
console.log(typeof y); // "object"

console.log(x == y);   // true  (loose equality) => Checks only value, not type.
console.log(x === y);  // false (strict equality) => Checks both value and type.
