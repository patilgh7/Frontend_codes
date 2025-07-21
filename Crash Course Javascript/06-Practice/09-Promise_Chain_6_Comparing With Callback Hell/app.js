/*

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


This example we are doing with promise chain

*/

// ***********************************************************************

/*

We dont need complex callback getNextData 

if (getNextData) {
    getNextData();
}

and this check
*/

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Delayed 5 sec");
      console.log("Data", dataId);
      resolve("success");
    }, 5000);
  });
}

// Note : if you want check 1st way and 2nd way comment one of them and run the code

// 1st Way of Promise chain

// getData(1).then((res1) => {
//   console.log(res1);
//   getData(2).then((res2) => {
//     console.log(res2);
//   });
// });

// 2nd Way of Promise chain =>   .then chaining is called promise chain

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });
