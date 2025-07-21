/*

1. Function Example

function greet() {
  console.log("Hello!");
}

greet(); // ✅ This is a function call
It's not tied to any object

It stands on its own

This is just a function

🔹 2. Method Example

const person = {
  name: "Gaurav",
  sayHello() {
    console.log("Hello, I'm " + this.name);
  }
};

person.sayHello(); // ✅ This is a method call
sayHello() is a function stored in an object → so we call it a method

It uses this.name — referring to the object person


Even arrow functions can be methods:

const car = {
  start: () => console.log("Engine started") // Still a method if inside object
};
But arrow functions don’t have their own this — so usually, regular functions are better for methods.



*/




/*

prototype concept :

JavaScript internally links prototypes to all built-in types.
Every object in JavaScript (including functions and arrays) has a hidden link to another object called its prototype.

This is how they inherit all their built-in methods.

The Core Mechanism
JavaScript attaches a prototype to every function, array, and object via a special internal reference called [[Prototype]] (aka __proto__).

✅ 1. How a Regular Object Inherits Methods

const obj = {};

console.log(obj.toString()); // ✅ works
Why does this work?

obj has no toString method

But JavaScript looks up to its prototype:

Object.getPrototypeOf(obj) === Object.prototype; // ✅ true
➡️ Object.prototype has toString(), hasOwnProperty(), etc.

✅ 2. How an Array Gets Its Methods

const arr = [1, 2, 3];
arr.push(4);       // ✅ works
arr.map(x => x*2); // ✅ works
Why?

Object.getPrototypeOf(arr) === Array.prototype; // ✅ true
➡️ arr inherits methods like .push(), .map(), .filter() from Array.prototype

✅ 3. How a Function Gets .call() or .bind()

function greet() {
  console.log("Hello");
}

greet.call(); // ✅ works
Why?

Object.getPrototypeOf(greet) === Function.prototype; // ✅ true
➡️ Function.prototype contains:

.call()

.apply()

.bind()

🎯 Summary: What Happens Internally
Type	Prototype Used	Methods Inherited
Object	Object.prototype	toString(), hasOwnProperty()
Array	Array.prototype	push(), pop(), map(), filter()
Function	Function.prototype	call(), bind(), apply()
Date	Date.prototype	getFullYear(), getTime()
Everything	→ Object.prototype	The root of all prototype chains

Each of these prototype objects is like a "shared toolbox" for that data type.

🔧 Visualize the Inheritance Chain
For an array:

arr = [1, 2, 3]

arr → Array.prototype → Object.prototype → null
For a function:

greet() → Function.prototype → Object.prototype → null
🔥 Key Mechanism Behind All This:
Every JavaScript constructor (like Array, Function, Object) has a .prototype property.

All instances created using these constructors link their internal [[Prototype]] (or __proto__) to that .prototype.

📌 Practical Check (Try in Console)


console.log(arr.__proto__ === Array.prototype);         // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true
This shows the full prototype chain.


[[Prototype]] is the internal (hidden) reference that connects one object to another — it's how JavaScript implements inheritance.

You can think of it like:

"[[Prototype]] is a hidden link to the object's parent."


=================================================

 How to Access [[Prototype]]
You can’t directly write obj.[[Prototype]] — but you can access it in these ways:


// ✅ Modern, safe way (recommended)
Object.getPrototypeOf(obj);

// ⚠️ Older (but commonly seen)
obj.__proto__;


====================================


| Term                         | Description                                                           |
| ---------------------------- | --------------------------------------------------------------------- |
| `[[Prototype]]`              | Internal (hidden) link to the prototype object                        |
| `__proto__`                  | Developer-accessible way to access `[[Prototype]]` (non-standard now) |
| `Object.getPrototypeOf(obj)` | Standard way to get the `[[Prototype]]`                               |
| Set via                      | `Object.create()`, constructors, or `Object.setPrototypeOf()`         |

*/



/*

// Global room
function kitchen() {
  // Kitchen room
  let spice = "chili";

  function cabinet() {
    // Cabinet inside kitchen
    console.log(spice); // ✅ Can access spice because it’s in the kitchen
  }

  cabinet();
}

kitchen();

The cabinet is inside the kitchen.

It can see or use what's in the kitchen (spice) — because of lexical scope.

The cabinet doesn’t need someone to hand it the spice — it’s nearby in code.

Real-World Example (Like School)
Think of this like a school:

A student (inner function) sitting inside a classroom (outer function) can access the whiteboard notes (variables) in the classroom.

But if the student is outside the classroom, they can’t see the whiteboard.

So:

Where the student is sitting = lexical position

What they can see = scope

Not Based on When or Who Calls It
Lexical scope cares only about code structure, not who or when the function is run.

Final One-Line Definition (Layman Style):
Lexical = location in code.
A function can use variables that were written around it in the code.

*/