const daytime = {
    breakfast: 'khichuri',
    lunch: 'Morog Polao'
};

const nighttime = 'Halim';


// so spread operator is not only work in array
// but in objects as well
const backpackingMeals = {
    ...daytime,
    nighttime
};

console.log(backpackingMeals);