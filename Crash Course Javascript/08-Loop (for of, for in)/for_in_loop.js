// Specially used for objects

/*

Syntax :

for (let key in objVar) {

    // do some work
}

*/


let student = {
    name: "Rahuk Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

// for(let key in student) {
//     console.log("key = ",key, " value = ", student[key]);
    
// }

let student2 = {
    name: "GP",
    marks: {
        math: 90,
        science: 85
    },
    showMarks: function() {
        console.log("Math marks: ", this.marks.math);
    }
}


for(let key in student2) {
    console.log("key = ", key, " value = ",student2[key]);
    
}

console.log(student2[showMark]());
