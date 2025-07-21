
// Without try catch
async function fetchData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();
    console.log(data);
    return data;
}


// With try catch
/*
async function fetchData() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
*/


fetchData();
