// Creating a Promise

// Promises are created using the Promise constructor which takes an executor function with two arguments: resolve and reject.

/*
let promise = new Promise((resolve, result) => {
    // Asynchronous operation
    if (result()){
        resolve('success');
    }else {
        reject('error');
    }
});

*/

// Full Promise Example Using Normal Function

let promise = new Promise(function(resolve, reject) {
    resolve("✅ Task done");
});

promise
  .then(function(response) {
    console.log("Response:", response);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });



/*

They are methods on the Promise.prototype — i.e., built-in system methods provided by the JavaScript engine.
That means every Promise object has access to:

.then() — for handling success

.catch() — for handling failure

.finally() — for cleanup after either success or failure

They are defined in the class, like this (simplified for understanding):

class Promise {
  constructor(executor) {
    // internal logic
  }

  then(onFulfilled) {
    // register a callback for when resolved
  }

  catch(onRejected) {
    // register a callback for when rejected
  }

  finally(onFinally) {
    // runs no matter what
  }
}
You never need to define these — they come predefined by JavaScript.


| Concept             | Type in JS         | Description                               |
| ------------------- | ------------------ | ----------------------------------------- |
| `Promise`           | Class              | Built-in constructor for async operations |
| `.then()`           | Method             | Handles successful resolution             |
| `.catch()`          | Method             | Handles failure (rejection)               |
| `.finally()`        | Method             | Runs in both success and failure cases    |
| `resolve`, `reject` | Callback functions | Control the result of a Promise           |



*/

const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal); // dog inherits from animal

dog.barks = true;

