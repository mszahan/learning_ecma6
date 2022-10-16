let cats = ['Biscuit', 'Jungle'];
let dogs = ['Stella', 'Camper'];

// the followin integration of other list into a list
// give a nested list within a list
let animals_nested = ['Smoky', 'Miro', 'Swimmy', cats, dogs]
console.log('nested new array', animals_nested)

// we can use spread operator to just include the values
// of the list within another list without nesting it
let animals = ['Smoky', 'Miro', 'Swimmy', ...cats, ...dogs]

console.log(animals)