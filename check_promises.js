const delay = (seconds) => 
    new Promise((resolve, reject) => {
        if(typeof seconds !== 'number') {
            reject(
                new Error('seconds must be a number')
            );
        }
        setTimeout(resolve, seconds * 1000);

    }
    );

// implemented whole promise function
// still didn't get what it actually does??

console.log('zero seconds');
delay(1).then(() => console.log('once second'));
delay(2).then(() => console.log('two second'));
delay(3).then(() => console.log('three second'));

// this error is comming before any delay code is running
// delay('hola').then(() => console.log('three second'));


// working with api using promises
const spacePeople = () => {
    return new Promise((resolves, rejects) => {
        const api = 'http://api.open-notify.org/astros.json';
        const request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = () => {
            if (request.status === 200) {
                resolves(JSON.parse(request.response));
            
            }
            else {
                rejects(Error(request.statusText));

            }
        };
        request.onerror = (err) => rejects(err);
        request.send();
    });
};

spacePeople().then((spaceData) => 
console.log(spaceData)
// (err) => console.error(new Error('cant load the people'))
);