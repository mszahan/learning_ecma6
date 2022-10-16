let yell = 'woo!'

let party = yell.repeat(20);

console.log(party);


let cat = {
    meow(times) {
        console.log('meow'.repeat(times));
    },
    purr(times) {
        console.log('prrr'.repeat(times));
    },
    snore(times) {
        console.log('zzz'.repeat(times));
    }
};

cat.meow(3);
cat.purr(4);
cat.snore(5);