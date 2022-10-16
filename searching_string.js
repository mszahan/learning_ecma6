const planet = 'Earth';
// startsWith methods are case sensitive
console.log(planet.startsWith('Ear'));
console.log(planet.startsWith('ear'));
console.log(planet.includes('eart'));

// the search method is like the find in Python 
// it gives the first index of the search keyword

console.log(planet.search('art'));
