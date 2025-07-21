
// ********Anonymous and Arrow Callbacks**************


// Simulated fetchData function that uses a callback
function fetchData(callback) {
    // Simulating a delay (e.g., fetching from server)
    setTimeout(function () {
        const data = 'Sample Data';
        callback(data); // Call the callback with fetched data
    }, 1000);
}

// ********Anonymous Callback Function********
fetchData(function(data) {
    console.log('Anonymous Function Received:', data);
});


// Alternate for above anonymous callback function
// ********Arrow Function as Callback*********
fetchData(data => {
    console.log('Arrow Function Received:', data);
});