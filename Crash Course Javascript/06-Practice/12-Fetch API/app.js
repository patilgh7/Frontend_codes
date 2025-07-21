/*
   The Fetch API provides an interface for fetching (sending/receiving) resources.
    
    It uses Request and Response objects.
       
    The fetch() method is used to fetch a resource (data).
        
    let promise = fetch(url, [options])

*/

/*

Note : 

AJAX is Asynchronous JS And XML

JSON is Javascript Object Notation => JSON alternate name AJAJ => Asynchronous JS And JSON

json() method : returns a second promise that resolves with the result of parsing the response body text as JSON 
(Input is JSON, output is JS object)


*/



// Here we are getting response when we hit getCats() in console see response is different and 
// when we copy URL => https://cataas.com/api/cats  in browser it gives response different

/* 
In Older days when we send api request then we get response in form of xml files.
And These days when we send api request we get response in json format.
JSON is Javascript Object Notation.
JSON Format is look like javascript object but it is not javascript object.

*/


/*

==============================================
JSON Format (String Format)
It’s a string that follows strict JSON rules.

example : 
"{"name":"Gaurav","age":25}"

In JSON Format quotes around keys.

Usage : Data interchange format (text)
===============================================

JavaScript Object ("JSON Object")
A real JavaScript object.

example :
{ name: "Gaurav", age: 25 }

Can be directly used in code.
Doesn't have quotes around keys.

Usage : Used in JavaScript code
==============================================


*/



/*
========================================================================================
Conversion:

From JSON Format → Object
let str = '{"name":"Gaurav","age":25}';
let obj = JSON.parse(str);  // Converts string to object


From Object → JSON Format
let obj = { name: "Gaurav", age: 25 };
let jsonStr = JSON.stringify(obj);  // Converts object to JSON string

========================================================================================

| You receive from API | ➜ JSON format (string) |
| You want to use it in JS | ➜ Convert to object using JSON.parse() |
| You want to send object to server | ➜ Convert to string using JSON.stringify() |

========================================================================================
*/



const URL = "https://cataas.com/api/cats";

const URL2 = "https://meowfacts.herokuapp.com/?count=10"


const getCatTags = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);  //JSON Format

    // response.json() is a method in JavaScript that is used when working with the Fetch API to parse the body of an HTTP       response and return it as a JavaScript object.

    let data = await response.json();  
    console.log(data); // show full response in js object

    console.log(data[5].tags);  // If you want to some tags property inside object
    
    
};

// getCatTags() => call this in console tab and check result.


const getMeowFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL2);
    console.log(response);  //JSON Format

    // response.json() is a method in JavaScript that is used when working with the Fetch API to parse the body of an HTTP       response and return it as a JavaScript object.

    let result = await response.json();  
    console.log(result); // show full response in js object

    console.log(result.data[3]);
    
    
};

// getMeowFacts() => call this in console tab and check result.




/*


===========================================================================

1) Below Response of getCatTags() : 

Structure: result[index].tags / id / mimetype

🔷 Example JSON:

[
  {
    "id": "abc123",
    "mimetype": "image/jpeg",
    "tags": ["cute", "black", "fluffy"]
  },
  {
    "id": "xyz456",
    "mimetype": "image/png",
    "tags": ["white", "grumpy"]
  }
]

Here, the entire JSON is an array of objects — there is no data wrapper.

📌 Access:

| To get...                | Use...              |
| ------------------------ | ------------------- |
| full array               | `result`            |
| first object             | `result[0]`         |
| id of first object       | `result[0].id`      |
| 2nd tag of second object | `result[1].tags[1]` |


🧠 Diagram:

result (array)
├── [0] (object)
│   ├── id: "abc123"
│   ├── mimetype: "image/jpeg"
│   └── tags: ["cute", "black", "fluffy"]
├── [1] (object)
│   ├── id: "xyz456"
│   ├── mimetype: "image/png"
│   └── tags: ["white", "grumpy"]

===========================================================================

2) Below Response of getMeowFacts() : 

Structure: result.data[index]

🔷 Example JSON:

{
  "data": [
    "Fact 1",
    "Fact 2",
    "Fact 3"
  ]
}
This is an object with a key data, and that key holds an array.

📌 Access:

| To get...         | Use...               |
| ----------------- | -------------------- |
| whole array       | `result.data`        |
| 2nd item (Fact 2) | `result.data[1]`     |
| length of facts   | `result.data.length` |

🧠 Diagram:

result (object)
└── data (array)
    ├── [0] "Fact 1"
    ├── [1] "Fact 2"
    └── [2] "Fact 3"

===========================================================================

✅ Why is the access syntax different?

| Case                 | JSON starts with...          | So you use...          |
| -------------------- | ---------------------------- | ---------------------- |
| `result.data[index]` | An object with a `data` key  | `result.data[0]`       |
| `result[index]`      | An array of objects directly | `result[0].tags`, etc. |


| Structure Type    | Access Syntax Example |
| ----------------- | --------------------- |
| Object with array | `result.data[0]`      |
| Array of objects  | `result[0].tags[1]`   |


*/