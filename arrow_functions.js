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


// another example
// here is the problem I din't get it though
// you can not use 'this' by default
// you have to assign to a variable and then call it 
// to access the property

// let person = {
//     first: 'Angie',
//     hobbies: ['bike', 'hike', 'ski'],
//     printHobbies: function() {
//         let _this = this;
//         this.hobbies.forEach(function (hobby) {
//             let string = `${_this.first} likes to ${hobby}`;
//             console.log(string);
//         });
//     }
// };

// person.printHobbies();


// we can get rid of the this problem with arrow function
// now you can use the default this method
let person = {
    first: 'Angie',
    hobbies: ['bike', 'hike', 'ski'],
    printHobbies: function() {
        this.hobbies.forEach( (hobby) => {
            let string = `${this.first} likes to ${hobby}`;
            console.log(string);
        });
    }
};

person.printHobbies();