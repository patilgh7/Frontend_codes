
const URL = "https://cataas.com/api/cats";

const URL2 = "https://meowfacts.herokuapp.com/?count=10";

const btn = document.querySelector("#btn");

const output = document.querySelector("#tag_output");  // Paragraph to show tags

// This is aync function
// const getCatTags = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL);
//     console.log(response);  //JSON Format

//     let data = await response.json();  
//     console.log(data); // show full response in js object

//     console.log(data[6].tags);  // If you want to some tags property inside object
    

//     const tagsText = data[6].tags.join(", "); // Convert array to comma-separated string

//     output.innerText = tagsText;  //  Show tags in paragraph
    
// };


// Using promise chain ...alternate for above async getCatTags function

function getCatTags() {
    console.log("getting data...");

    fetch(URL)
        .then(response => {
            console.log(response);       // Raw HTTP response
            return response.json();     // Convert to JS object
        })
        .then(data => {
            console.log(data);          // Full response object
            console.log(data[6].tags);  // Tags inside 7th object

            const tagsText = data[6].tags.join(", ");
            output.innerText = tagsText;  // Show in paragraph
        })
        .catch(error => {
            console.error("Error fetching tags:", error);
        });
}


btn.addEventListener("click", getCatTags);



// getCatTags() => call this in console tab and check result.

