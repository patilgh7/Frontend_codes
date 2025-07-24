// use querySelector to select paragraph
let para = document.querySelector("p");

// we are adding newClass which we already created style.css and apply here that styling to our paragraph i.e. background color.
para.classList.add("newClass");

// para.classList gives all classes which assign to paragraph
console.log(para.classList);


// Also you can remove classes
// para.classList.remove("content");
