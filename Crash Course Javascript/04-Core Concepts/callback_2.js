// function 
function greet(name, callbackFunction) {
    console.log('Hi' + ' ' + name);
    callbackFunction();
}


// callback function 
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);