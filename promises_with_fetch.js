let getSpacePoeple = () =>
    fetch(
        'http://api.open-notify.org/astros.json')
        .then((res) => res.json());



getSpacePoeple().then(console.log);

let spaceNames = () => 
    getSpacePoeple()
        .then((json) => json.people)
            .then((people) => people.map((p) => p.name))
                .then((names) => names.join(','));


spaceNames().then(console.log);