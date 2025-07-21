function greeting(name) {
    console.log(`Hello ${name}`);
}

function getUserInput(callback) {
    var name = prompt('Please enter your name: ');
    callback(name);
}

getUserInput(greeting);


/**
 * Note :
 * 
 * A Callback is a function passed as an argument to another function.
 * 
 * Above code run on console because we are using prompt so it will give error here if run command => node callback.js  
 * 
 * So go to Browser and follow below step.
 * 
 * Open browser Right click + inspect and copy above code their in console tab and see output.
 * 
 */


