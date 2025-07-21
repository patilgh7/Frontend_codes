let student = {
    rollNo: 43,
    name: 'Piyush Jindal',
    course: 'Computer Science'
};

console.log(student);

// Accessing individual property using Dot Notation
console.log(student.rollNo);
console.log(student.name);
console.log(student.course);

console.log('---------------------');


// Accessing individual property using Bracket Notation
console.log(student['rollNo']);
console.log(student['name']);
console.log(student['course']);

console.log('---------------------');


//checking type 
console.log(typeof student);
console.log(typeof student.rollNo);
console.log(typeof student.course);

console.log('---------------------');

// If you want some of the property delete from object
console.log('Deleting course property in object: ');
delete student.course;
console.log(student);

console.log('---------------------');

// If you want to add new property in that object
console.log('Adding year property in object: ');
student.year = 'second';
console.log(student);

console.log('---------------------');







