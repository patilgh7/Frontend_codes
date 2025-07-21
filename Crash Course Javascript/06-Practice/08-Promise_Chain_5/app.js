
// First API
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve("success");
        }, 4000);
    });
}

// Second API
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 2");
            resolve("success");
        }, 4000);
    });
}

// ***********************************************************************

/*

// If you want async behaviour then uncomment below code

// When write code like below it will execute at a time both function at once.This is Async behaviour means completes both at once.

console.log("fetching data 1....");

let p1 = asyncFunction1();
console.log(p1);

p1.then((res) => {
    console.log(res);
    
})


console.log("fetching data 2....");

let p2 = asyncFunction2();
console.log(p2);

p2.then((res) => {
    console.log(res);
    
})

*/


// ***********************************************************************


// For Promise Chaining

// But we don't want fetch data 1 and data 2 at a time...we want first fetch data 1 when it compleately fetch data then fetch data 2 ....simply i want fetch in synchronously one by one.

console.log("fetching data 1....");

let p1 = asyncFunction1();
console.log(p1);

p1.then((res) => {
    console.log(res);
    console.log("fetching data 2....");
    let p2 = asyncFunction2();
    p2.then((res) => {
        console.log(res);
        
    });
})



// ***********************************************************************

/*



// Shortcurt for code

let p1 = asyncFunction1();
console.log(p1);

p1.then((res) => {
    console.log(res);
    console.log("fetching data 2....");
    let p2 = asyncFunction2();
    p2.then((res) => {
        console.log(res);
        
    });
})

above code also you can write in shortcut :

console.log("fetching data 1....");
asyncFunction1().then((res1) => {
    console.log(res1); 
    console.log("fetching data 2....");
    asyncFunction2().then((res2) => {
        console.log(res2); 
    });
});



*/

// ***********************************************************************
