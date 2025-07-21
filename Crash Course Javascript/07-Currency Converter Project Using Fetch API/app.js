/*
Currency Api link for javascript :

Free Currency Exchange Rates API

https://github.com/fawazahmed0/exchange-api


/currencies/{currencyCode}
Get the currency list with EUR as base currency:
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json

*/


const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";



const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");

const toCurr = document.querySelector(".to select");

const msg = document.querySelector(".msg");



// Add codes.js file currency code and country code added to dropdown
for(let select of dropdowns) {
    for (currency_code in countryList) {
       let newOption = document.createElement("option");
       newOption.innerText = currency_code;
       newOption.value = currency_code;

       if(select.name === "from" && currency_code === "USD"){
        newOption.selected = "selected";
       } else if(select.name === "to" && currency_code === "INR"){
        newOption.selected = "selected";
       }
       select.append(newOption); 
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })

}


const updateExchangeRate = async () => {
    
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    console.log(amtVal);

    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    console.log(fromCurr.value, toCurr.value);

    // ✅ Updated URL format: only use /{fromCurrency}.json
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

    let response = await fetch(URL);
    let data = await response.json();

    // ✅ Updated way to access rate
    // let rate = data["usd"]["inr"]; // 83.2
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    let finalAmount = (amtVal * rate).toFixed(2); // rounded to 2 decimal places

    console.log(response);


    console.log(`amount entered : ${amtVal} ${fromCurr.value} convert into : ${toCurr.value} `);
    

    console.log("conversion rate = ",rate);
    
    console.log(`final Conversion = ${finalAmount}`);
    
    

    // ✅ Display result
    //1USD = 80INR
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}


// Flag change code 

const updateFlag = (element) => {
    let currencyCode = element.value;
  
    let contryCode = countryList[currencyCode];

    let newSrc = `https://flagsapi.com/${contryCode}/flat/64.png`;

    let img = element.parentElement.querySelector("img");

    img.src = newSrc;
    
    
}



btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});



window.addEventListener("load", () => {
    updateExchangeRate();
});
