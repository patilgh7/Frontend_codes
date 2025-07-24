
let heading = document.querySelector("h1");

heading.innerText = heading.innerText + " from college students."


let divs = document.querySelectorAll(".box");

/*
divs[0].innerText = "Box 1";
divs[1].innerText = "Box 2";
divs[2].innerText = "Box 3";

*/

// Another way for above using for of loop

let idx = 1;
for(let div of divs) {
    div.innerText = `box ${idx}`;
    idx++;
}