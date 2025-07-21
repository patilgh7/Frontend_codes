// To make promises syntax simpler javascript introduced async and await syntax

// async function always returns a promise 

// await pauses the execution of its surrounding async function until the promise is settled

// await you can use only when function is async


function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("wait for 2 seconds data is coming");
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}


async function getWeatherData() {
    await api(); // 1st call
    await api(); // 2nd call
}

getWeatherData();


// async and await with our getData example 

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Delayed 5 sec");
      console.log("Data", dataId);
      resolve("success");
    }, 5000);
  });
}


// Using Async-await

async function getAllData() {
    await getData(1);

    await getData(2);

    await getData(3);
}

getAllData();