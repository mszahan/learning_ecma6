const id = Symbol()

const courseInfo = {
    title: 'javascript',
    topics: [
        'srtings',
        'arrays',
        'objects'
    ],
    id: 'js-course'

};

// this code added a symbole method in the objec
// so it's not conflicting with the previosly added id
courseInfo[id] = 41232

console.log(courseInfo)

// though I couldn't understand the manin use of the the symbole
// but a little bit understanding is required