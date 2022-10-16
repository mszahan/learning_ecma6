let cities = [
    'Rajshahi',
    'Dhaka',
    'Chittagong',
    'Sylhet',
    'Khulna',
]


console.log(cities[0])

// let's do it destructuring way
// each parameter gives the value of the array by it's position
// no matter what it's name the
// second parameter returns the second value of the array
// if you need fith then there has to be five parameter
// if you don't want to name it then keep it blank
let [first, second, , , fifth] = [
    'Rajshahi',
    'Dhaka',
    'Chittagong',
    'Sylhet',
    'Khulna',
]

console.log(second)
console.log(fifth)
