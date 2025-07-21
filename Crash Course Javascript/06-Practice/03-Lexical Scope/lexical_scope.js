/*

Real-World Example (Like School)
Think of this like a school:

A student (inner function) sitting inside a classroom (outer function) can access the whiteboard notes (variables) in the classroom.

But if the student is outside the classroom, they can’t see the whiteboard.

So:

Where the student is sitting = lexical position

What they can see = scope

Not Based on When or Who Calls It
Lexical scope cares only about code structure, not who or when the function is run.

Final One-Line Definition (Layman Style):
Lexical = location in code.
A function can use variables that were written around it in the code.

*/




function a() {
    var b = 10;

    c();
    function c() {
        console.log(b);
        
    }
}

a();





