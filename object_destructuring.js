// const sandwitch = {
//     title: 'Reuben',
//     price: 7,
//     description: 'Great sandwitch',
//     ingredients: [
//         'bread',
//         'corned beef',
//         'dressing',
//         'sauerkaraut',
//         'cheese'
//     ]
// };

// console.log(sandwitch.title);
// console.log(sandwitch.price);


// now used the destructuring
const {title, price} = {
    title: 'Reuben',
    price: 7,
    description: 'Great sandwitch',
    ingredients: [
        'bread',
        'corned beef',
        'dressing',
        'sauerkaraut',
        'cheese'
    ]
};

console.log(title);
console.log(price);



// now let's create an object and passed in within a function
const vacation = {
    destination: 'Switzerland',
    travelers: 3,
    activity: 'skiing',
    cost: 'so much'
};

function marketing({destination, activity}){
    return `Come to the ${destination} and do some ${activity}`
}

console.log(marketing(vacation));