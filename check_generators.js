function* director() {
    yield 'Three';
    yield 'Two';
    yield 'One';
    yield 'Action';
}


let countdown = director();

// next method return two thing
// a boolean named doen and the one value
// done value is true when all the element is retrived
console.log(countdown.next().value);
console.log(countdown.next());
console.log(countdown.next());
console.log(countdown.next());
console.log(countdown.next());