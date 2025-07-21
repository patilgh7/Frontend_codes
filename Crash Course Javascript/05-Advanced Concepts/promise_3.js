/*
Real-Life Analogy: Pizza Shop
Imagine you're ordering a pizza:

1.You call the shop — they say they'll call back when it's ready.

2.After pizza is ready, you want to:

    Add cheese

    Then bake it

    Then deliver it

    Then eat it

// In callback style, you have to wait for each step to finish before starting the next. So it ends up like:


// 🔥 Nested Callbacks (Callback Hell)

orderPizza(function(pizza) {
    addCheese(pizza, function(cheesyPizza) {
        bake(cheesyPizza, function(bakedPizza) {
            deliver(bakedPizza, function(deliveredPizza) {
                eat(deliveredPizza);
            });
        });
    });
});

//  Looks messy? This is called callback hell — code is deeply nested, hard to read, and harder to debug.

 
What is Callback Hell?
Callback Hell is when you use too many nested callback functions (functions inside functions), especially in asynchronous code. It looks like a pyramid or "Christmas tree" of code:


task1(function() {
    task2(function() {
        task3(function() {
            task4(function() {
                // and so on...
            });
        });
    });
});


Problems:

Hard to read

Hard to debug

Hard to reuse logic

Hard to handle errors

// =================================================================================

// How Promises Make It Better
// Promises flatten the code and let you chain tasks using .then():

// orderPizza()
//   .then(addCheese)
//   .then(bake)
//   .then(deliver)
//   .then(eat)
//   .catch(error => console.error("Something went wrong:", error));


| Concept        | Callback Hell       | Promises           |
| -------------- | ------------------- | ------------------ |
| Looks like     | Nested pyramid      | Flat chain         |
| Readability    | Poor                | Much better        |
| Error Handling | Manual and repeated | Central `.catch()` |
| Code Reuse     | Hard                | Easy               |


*/

// code :

// -------------------------------
// 🧨 1. Callback Hell Version
// -------------------------------

function orderPizza(callback) {
    setTimeout(() => {
        console.log("🍕 Pizza ordered");
        callback("Plain Pizza");
    }, 1000);
}

function addCheese(pizza, callback) {
    setTimeout(() => {
        const cheesyPizza = pizza + " + 🧀 Cheese";
        console.log("🧀 Cheese added");
        callback(cheesyPizza);
    }, 1000);
}

function bake(pizza, callback) {
    setTimeout(() => {
        const bakedPizza = pizza + " + 🔥 Baked";
        console.log("🔥 Pizza baked");
        callback(bakedPizza);
    }, 1000);
}

function deliver(pizza, callback) {
    setTimeout(() => {
        const deliveredPizza = pizza + " + 🛵 Delivered";
        console.log("🛵 Pizza delivered");
        callback(deliveredPizza);
    }, 1000);
}

function eat(pizza) {
    console.log("😋 Eating: " + pizza);
}

console.log("----- Callback Hell Version -----");
orderPizza(function(pizza) {
    addCheese(pizza, function(cheesyPizza) {
        bake(cheesyPizza, function(bakedPizza) {
            deliver(bakedPizza, function(deliveredPizza) {
                eat(deliveredPizza);
                
                // Delay next version to avoid mixing output
                setTimeout(() => {
                    console.log("\n----- Promise Version -----");
                    handlePizza(); // Call promise version
                }, 2000);
            });
        });
    });
});


// -------------------------------
// 🚀 2. Promise-based Version
// -------------------------------

function orderPizzaPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("🍕 Pizza ordered");
            resolve("Plain Pizza");
        }, 1000);
    });
}

function addCheesePromise(pizza) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheesyPizza = pizza + " + 🧀 Cheese";
            console.log("🧀 Cheese added");
            resolve(cheesyPizza);
        }, 1000);
    });
}

function bakePromise(pizza) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bakedPizza = pizza + " + 🔥 Baked";
            console.log("🔥 Pizza baked");
            resolve(bakedPizza);
        }, 1000);
    });
}

function deliverPromise(pizza) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deliveredPizza = pizza + " + 🛵 Delivered";
            console.log("🛵 Pizza delivered");
            resolve(deliveredPizza);
        }, 1000);
    });
}

async function handlePizza() {
    try {
        const ordered = await orderPizzaPromise();
        const cheesy = await addCheesePromise(ordered);
        const baked = await bakePromise(cheesy);
        const delivered = await deliverPromise(baked);
        eat(delivered);
    } catch (error) {
        console.error("❌ Error:", error);
    }
}
