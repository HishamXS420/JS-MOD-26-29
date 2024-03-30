function cubeNumber(number){
    if(typeof number == 'number')
    {
        result = number*number*number;
        return result;
    }
    else{
        console.log('Please enter a number');
    }
    
}

const output = cubeNumber(6);
console.log(output);