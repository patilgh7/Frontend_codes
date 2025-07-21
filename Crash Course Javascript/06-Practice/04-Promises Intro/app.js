let promise = new Promise((resolve, reject) => {
    console.log("I am Promise");
    resolve("success");
})





/*

Note : 


let promise = new Promise((resolve, reject) => {
    console.log("I am Promise");
    resolve("success");
})

If you want to see object state then Above promise object gives information like

[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "success"

These state result you can see by typing 'promise' + enter in console tab in browser 

otherwise if you want to see through code :

object = Object.getPrototypeOf(promise);
console.log(promise);

*/

