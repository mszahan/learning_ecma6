let course = new Map();

course.set('react', {description: 'ui'});
course.set('jest', {description: 'testing'});

console.log(course);

// this gives you undefined error
// cause map is not like an object
console.log(course.react);

// you can get that using get method
console.log(course.get('react'));


let details = new Map([
    [new Date(), 'today'],
    [2, {javascript: ['js', 'node', 'react']}],
    ['items', [1, 2]]

]);

console.log(details);

//gives the entry number
console.log(details.size);

console.log('extracting each item of detail map-------')
// console log the each item of map
// it doesn't include the key (first value of the map)
details.forEach(function(item) {
    console.log(item);
});