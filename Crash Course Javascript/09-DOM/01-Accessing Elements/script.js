// console.dir(document.body);

// Selecting with id
let heading = document.getElementById("heading");

console.dir(heading);

//Selecting by class name
let heading_class = document.getElementsByClassName("heading-class");
console.dir(heading_class);
console.log(heading_class);


// Selecting by Tag Name
let para = document.getElementsByTagName("p");
console.dir(para);


// document.querySelector("myId/myClass/tag"); 
// returns first element

// document.querySelectorAll("myId/myClass/tag")
// returns a NodeList

// Note: 

// querySelector for access element through id we give document.querySelector("#idName")

// querySelector for access element through class we give document.querySelector(".className")


// Using html tag
let firstElement = document.querySelector("p");  // returns first element
console.log(firstElement);

let allElement = document.querySelectorAll("p");  // returns all element
console.log(allElement);

console.log("==========================");

// Using class name

let firstElement2 = document.querySelector(".heading-class");  // returns first element
console.dir(firstElement2);

let allElement2 = document.querySelectorAll(".heading-class");  // returns all element
console.dir(allElement2);


// Using id

let btn = document.querySelector("#btn-id"); 
console.dir(btn); 