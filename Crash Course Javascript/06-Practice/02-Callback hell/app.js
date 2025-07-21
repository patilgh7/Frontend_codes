// callback hell 
// suppose we have instagram username and password and we are checking username, password in database
// so in that case we first serach for username wait for response then we check password in this scenario we can use nested callback.


// data 1 milala tyanatar ch data 2 pahije...same for other data
// data 2
// data 3
// data 4

// () → no parameters

// => → binds input to output, like a "function arrow"

// {} → function body

// input => output

/*
() => {
    console.log("Hello");
}

It means:

“Take no input”

“Execute this block when called”

“Preserve the this value from outside” (this is a big difference vs regular function)


*/
// if this above function send data after some time

// function getData(dataId) {
//     //we are getting data after 2 second thats we use setTimeout()
//     setTimeout()
// }


// function getData(dataId, getNextData) {
//    setTimeout(() => {
//     console.log('Delayed 2 sec');
//     console.log("Data", dataId);
//     getNextData();
//    }, 2000);
// }


function getData(dataId, getNextData) {
   setTimeout(() => {
    console.log('Delayed 2 sec');
    console.log("Data", dataId);
    if(getNextData) {
        getNextData();

    }
   }, 2000);
}


// callback hell
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});


/*

Note : 

To resolve issue of callback hell we use promises

*/