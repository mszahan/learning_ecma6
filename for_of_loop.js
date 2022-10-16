for (let letter of 'javascript') {
    console.log(letter);
}

programmingLanguage = ['javascript', 'python', 'c++']

for (let lang of programmingLanguage) {
    console.log(lang);
}


let topics = new Map();
topics.set('HTML', 'topic/html');
topics.set('CSS', 'topic/css');
topics.set('Javascript', 'topic/js');


for (let topic of topics) {
    console.log(topic);
}

// this only iterate through the keys of the map
for (let topic of topics.keys()) {
    console.log(topic);
}

// this only iterate through the values of the map
for (let topic of topics.values()) {
    console.log(topic);
}

// this only iterate through the entryes of the map
// similar to the previous one don't know why?
for (let topic of topics.entries()) {
    console.log(topic);
}