const delay = (seconds) =>
    new Promise((resolves) => 
        setTimeout(resolves, seconds * 1000)
        );

// async make the function asynchonus that 
// allows to await
const countToFive = async () => {
    console.log('zero seconds');
    await delay(1);
    console.log('one second');
    await delay(2);
    console.log('two second');
    await delay(3);
    console.log('three second');
};

countToFive();




// another example
const githubRequest = async (login) => {
    let response = await fetch(
        `https://api.github.com/users/${login}`
    );
    let json = await response.json();
    let summary = `${json.name}, ${json.company}`;
    console.log(summary);
};

githubRequest('mszahan');