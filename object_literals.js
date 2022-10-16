// function skier(name, sound) {
//     return {
//         name:name,
//         sound:sound,
//         powderYell: function() {
//             let yell = this.sound.toUpperCase();
//             console.log(`${yell}! ${yell}!`);
//         }

//     };
// }


// we can do the same thing in object literal
// but with less repeatation
function skier(name, sound) {
    return {
        name,
        sound,
        powderYell: function() {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }

    };
}


console.log(skier('Alex', 'woo').name);
skier('alex', 'hola').powderYell();