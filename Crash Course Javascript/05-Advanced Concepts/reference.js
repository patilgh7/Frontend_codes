let student = {
    rollNo: 43,
    name: 'Piyush Jindal',
    course: 'Computer Science'
};

let num1 = 10;

let num2 = num1;            // Primitive type assignment
let student2 = student;     // Reference type assignment

console.log(num2);          // Output 10
console.log(student2);     // Output full student object

num1 = 15;                  // Changing primitive value

delete student.name;        // Modifying the object

console.log(num2);          // Output still 10
console.log(student2);      // Output: student object without 'name'

/*

Note : 

Primitive Types
Primitive types include Number, String, Boolean, null, undefined, Symbol, BigInt

They are:

Immutable (cannot be changed)
Passed by value


num1 and num2 are both numbers (primitive type).

When num2 = num1, a copy of the value 10 is stored in num2.

When you later do:

num1 = 15;
It only updates num1.

num2 remains 10 because it holds its own separate value.

============================================================


Reference Types
Reference types include Object, Array, Function

They are:

Mutable (can be changed)
Passed by reference

Both student and student2 refer to the same object in memory.

When you do:

delete student.name;
You are modifying the object itself.

Since both variables point to the same object, the change is reflected in both.

| Feature                  | Primitive Types (e.g., `num1`)    | Reference Types (e.g., `student`)      |
| ------------------------ | --------------------------------- | -------------------------------------- |
| How it's passed          | Pass by **value** (copy of value) | Pass by **reference** (memory address) |
| Changes affect original? | ❌ No                             | ✅ Yes                                  |
| Memory Allocation        | Stores **value directly**         | Stores **reference to value**          |



*/