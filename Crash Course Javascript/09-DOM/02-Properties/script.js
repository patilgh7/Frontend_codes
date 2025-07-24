
// let element = document.querySelector("#btn-id"); 
// console.log(element); 

// let tagName = element.tagName;
// console.log(tagName);

let div = document.querySelector("div")
console.dir(div);

// get values
console.log(div.innerText);  // gives text only

console.log(div.innerHTML);  // gives whole html structure


// we can set this values as well using innerText and innerHTML
// div.innerText = "abcd";
// console.log(div);


// If you want to set specific text inside div so for that fetch all element using querySelectorAll
let listItems = document.querySelectorAll("div ul li");
listItems[0].innerText = "apple";

// using innerHTML
let heading = document.querySelector("h1");
heading.innerHTML = "<i>New Heading</i>";


let h2 = document.querySelector("h2");

//if you apply innerText on h2 it gives output empty string like ''
console.log(h2.innerText);  // No output 
console.log(h2.textContent); // Gives hidden property text also
//  <h2 style="visibility: hidden;">Javascript</h2> this is our html code visibility hidden property also show text
//  when you use textContent




/*
Note : 

// querySelector

✅ 1. Using ID Selector (#id)
🧾 HTML:

<h1 id="main-heading">Hello</h1>
🔧 JS:

let heading = document.querySelector("#main-heading");
console.log(heading.innerText); // Output: Hello
✔️ #main-heading targets the element with that exact ID.

✅ 2. Using Class Selector (.class)
🧾 HTML:

<p class="message">Welcome to the site</p>
🔧 JS:

let message = document.querySelector(".message");
console.log(message.innerText); // Output: Welcome to the site
✔️ .message selects the first element with that class.

✅ 3. Using Tag Selector (tag)
🧾 HTML:

<div>This is a div</div>
🔧 JS:

let div = document.querySelector("div");
console.log(div.innerText); // Output: This is a div
✔️ "div" selects the first <div> tag on the page.

✅ Bonus: Combine Selectors
You can also combine selectors like in CSS!

🔧 Example:
html

<p class="info" id="note">This is a note.</p>

js

document.querySelector("p#note");      // Selects <p> with id="note"
document.querySelector("p.info");      // Selects <p> with class="info"
document.querySelector("#note.info");  // Selects element with both id and class

============================================================================================

// querySelectorAll

✅ 1. Tag Selector – Get all <p> tags
🧾 HTML:

<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
🔧 JS:

let allParas = document.querySelectorAll("p");
allParas.forEach(p => console.log(p.innerText));
✔️ Output:

Paragraph 1
Paragraph 2
Paragraph 3
✅ 2. Class Selector – Get all .item elements
🧾 HTML:

<div class="item">Item A</div>
<div class="item">Item B</div>
<span class="item">Item C</span>
🔧 JS:

let items = document.querySelectorAll(".item");
items.forEach(i => console.log(i.innerText));
✔️ Output:

Item A
Item B
Item C
✅ 3. ID Selector – ⚠️ Only one element should have a given ID
🧾 HTML:

<div id="main">Main 1</div>
<!-- Only one ID should exist -->
🔧 JS:

let main = document.querySelectorAll("#main");
console.log(main.length); // 1
console.log(main[0].innerText); // Main 1
🟡 Even though querySelectorAll() returns a NodeList, only one match for an ID is possible.

✅ 4. Combined Selector – Select by tag + class
🧾 HTML:

<p class="highlight">Text 1</p>
<p>Text 2</p>
<p class="highlight">Text 3</p>
🔧 JS:

let highlights = document.querySelectorAll("p.highlight");
highlights.forEach(p => console.log(p.innerText));
✔️ Output:
Text 1
Text 3

✅ 5. Nested Selector – All <li> inside <ul>
🧾 HTML:

<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
🔧 JS:

let listItems = document.querySelectorAll("ul li");
listItems.forEach(li => console.log(li.innerText));
✔️ Output:

Apple
Banana
✅ 6. Loop through NodeList (3 ways)

let items = document.querySelectorAll(".item");

// Method 1: forEach (recommended)
items.forEach(i => console.log(i.innerText));

// Method 2: traditional for loop
for(let i = 0; i < items.length; i++) {
  console.log(items[i].innerText);
}

// Method 3: Convert to array
Array.from(items).map(i => console.log(i.innerText));


*/

