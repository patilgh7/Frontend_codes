// getAttribute(attr) ==> to get the attribute value

// setAttribute(attr, value) ==> to set the attribute val

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);


// let p = document.querySelector("p");
// console.log(p.getAttribute("class"));


let p = document.querySelectorAll("p");
console.log(p[1].getAttribute("class"));



// setAttribute
console.log(p[1].setAttribute("class", "new_para_class"));    // inspect and see this value in browser



// You can set style attribute from javascript i.e. means you can change css or style attribute through javascript

div.style.backgroundColor = "red";
div.style.fontSize = "25px";

div.innerText = "Hello!";