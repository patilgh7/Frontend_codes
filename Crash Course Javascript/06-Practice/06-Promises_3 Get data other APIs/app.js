
// getPromise function has multiple statement  
// 1. console.log("I am promise");
// 2. resolve("success");
// so we need return keyword compulsory

// if single statement there then dont use return

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am promise");
        resolve("success");
        // reject("error");
    });
};

let promise = getPromise();
console.log(promise);

promise.then((res) => {
    console.log('promise fulfilled', res);
    
});

promise.catch((err) => {
    console.log("rejected", err);
    
});

// res -> result and err -> error

// Note: if you to see error so you can uncomment reject("error");this code from getPromise function and comment  resolve("success"); this line. and for success result  resolve("success"); uncomment this line.