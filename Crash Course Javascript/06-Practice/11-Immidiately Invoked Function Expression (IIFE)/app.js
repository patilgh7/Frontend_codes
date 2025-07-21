// Immidiately Invoked Function Expression (IIFE)

// You don't need sepearte function call

// Syntax : (function) ();


/*

1. with simple anonymous function

  (function () => {
    //code...
  })();

2. with anonymous arrow function

  (() => {
    //code...
  })();

3. with async anonymous arrow function

  (async () => {
    //code...
  })();

*/


// Usecase : When you to execute function immidiately but you can use that function only one time.
// You can not use this function multiple time.

// IIFE (Immediately Invoked Function Expression) is designed to run only once — immediately after it is defined.

// It doesn’t get stored in a variable or function name.

// So, you cannot call it again unless you wrap it again.

/*
 If you want to call it multiple times, you'd do:

function greet() {
    console.log("Hello");
}

greet(); // Call 1
greet(); // Call 2


But with an IIFE:

(function() {
    console.log("IIFE running");
})(); // ← only this call happens

Unless you define another IIFE, you cannot reuse it.

*/

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Delayed 5 sec");
      console.log("Data", dataId);
      resolve("success");
    }, 5000);
  });
}


// Using IIFE syntax

(async function () {
    await getData(1);

    await getData(2);

    await getData(3);
})();

