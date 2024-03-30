function getFact(number){
    let factorial = 1;
    for(let i = 1 ; i <= 8 ; i++ ){
        factorial = factorial*i;
    }
    return factorial;
}

const factorial = getFact(8);
console.log('factorial of 8 is : ',factorial);

