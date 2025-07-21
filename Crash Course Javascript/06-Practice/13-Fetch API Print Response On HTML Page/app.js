
const URL = "https://cataas.com/api/cats";

const URL2 = "https://meowfacts.herokuapp.com/?count=10";

const btn = document.querySelector("#btn");

const output = document.querySelector("#tag_output");  // Paragraph to show tags


const getCatTags = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);  //JSON Format

    let data = await response.json();  
    console.log(data); // show full response in js object

    console.log(data[6].tags);  // If you want to some tags property inside object
    

    const tagsText = data[6].tags.join(", "); // Convert array to comma-separated string

    output.innerText = tagsText;  //  Show tags in paragraph
    
};

btn.addEventListener("click", getCatTags);



// getCatTags() => call this in console tab and check result.


const getMeowFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL2);
    console.log(response);  //JSON Format

    let result = await response.json();  
    console.log(result); // show full response in js object

    console.log(result.data[3]);
    
    const factPara = document.querySelector("#meow_facts");   // meow_facts is id of paragraph in index.html

    factPara.innerText = result.data[3];   // here we set the meow facts 
    
};

getMeowFacts();

// getMeowFacts() => call this in console tab and check result.


// In this code we are showing text on html page using button and calling getMeowFacts();