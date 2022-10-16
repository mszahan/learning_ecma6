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
