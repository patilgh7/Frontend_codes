
// 1st Step Create Element
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
console.log(newBtn);

// 2nd Step add the element after this step you can see button is added
// first decide node...node means div, p, h, body ...decide from which node you have to add element
// we want to add button inside div element
// for add you have methods like 
// append
// prepend

let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

// or if you to add button after paragraph element then
let p = document.querySelector("p");
p.after(newBtn);


// creating new heading on top 
let newHeading = document.createElement("h1");
newHeading.innerText = "Hi I am new!";

document.querySelector("body").prepend(newHeading);


// remove paragraph
let p2 = document.querySelector("p");

p2.remove();