
// 1st Task :  Create button in body tag and give text : click me and give background color : red 
// created button element
let btn = document.createElement("button");
console.log(btn);

// setting id attribute
btn.setAttribute("id", "btn_id");

// giving text
btn.innerText = "Click Me!";

// use querySelector to decide where to add element give that element in double quotes
// in body we have to add button as first element
let body = document.querySelector("body");

// for add you have methods like append
body.append(btn);

// ===============================================

// 2nd Task : Create paragraph after button give style and text

// created paragraph element
let paragraph = document.createElement("p");

// setting class attribute
paragraph.setAttribute("class", "paragraph_class");

// giving text
paragraph.innerText = "Hi I am new line";

// use querySelector to decide where to add element give that element in double quotes
// we have to add paragraph after button that we created above
// select the button using querySelector

let button = document.querySelector("#btn_id");

button.after(paragraph);

// Adding style through javascipt to paragraph

paragraph.style.backgroundColor = "yellowGreen";
paragraph.style.color = "beige";


