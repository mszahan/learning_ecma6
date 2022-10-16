function print(firstName){
    console.log(`Hello ${firstName}`);
}


print('isabelle')


function creatEmail(firstName, price){
    let shipping = 5.95;
    console.log(
    `Hi $${firstName}, 
    your shipping cost $${shipping}
    total price $${price}
    grand total ${price + shipping}

    
    `)

}

creatEmail('Robin', 65)