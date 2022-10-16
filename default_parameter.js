function add(x=5, y=6) {
    console.log(x+y);
}

// if no parameter provided its use the default parameter
add();
add(3, 5);


function haveFun(activity='hiking', time=3) {
    console.log(`Today I will go ${activity}
    for  ${time} hours.`);
}

haveFun('biking', 4);
haveFun();
haveFun('biking');