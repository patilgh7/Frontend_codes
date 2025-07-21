
function calculator(){

    // Get input values

    const a = parseFloat(document.getElementById('first_input').value);

    // .value returns always string if i make a+b it concatenate the string e.g. 2+5 = 25 
    // here i want addition so i use parseFloat which converts into float number and then make proper addition

    const b = parseFloat(document.getElementById('second_input').value);
    
    // Call the callback
    sum(a, b);

}


function sum(a, b){
    
    const result = a + b;

    // Display result on page
    document.getElementById("result").innerText = "Sum is  " +result;
}
