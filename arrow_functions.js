// normal function

let studentList = function (students) {
    console.log(students);
};

studentList(['a', 'b', 'c']);

// doing the same thing with the arrow function
// if you need to do more than one thing in the arrow function
// you need to use the crly braces to wrap the code block
let teacherList = (teacher) => console.log(teacher);

teacherList(['hola', 'hala', 'furr']);

// maping the list in convetional and arrow fucntion
let list = ['apple', 'banana', 'cherry'];

// conventional way
list.map(function(item) {
    console.log(item);
});

// using arrow function
list.map((item) => console.log(item));