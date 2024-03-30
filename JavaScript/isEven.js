function isEven(number){
    const remainder = number % 2;
    if(remainder == 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(5043);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1502);
console.log(herNumberIsEven);
