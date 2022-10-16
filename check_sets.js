let books = new Set();

books.add('Concept of Genetics');
books.add('Human Genetics').add('Cancer Genetics');

// repeating entry is ommited like set in mathematics
books.add('Human Genetics');

console.log(books);
console.log(books.size);

// deleting entry
books.delete('Cancer Genetics')

// maping the data of set
// map doen't work in set
// books.map(function(item) {
//     console.log(item);
// })

// to get each entry of the set you need to 
// use the forEach

console.log('printing each item with forEach method--------')
books.forEach(function(item) {
    console.log(item);
})

// check has method to check if the entry is in the set
console.log('check cancer gentics', books.has('Cancer Genetics'))