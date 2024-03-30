// show output 1-50:
// divisible by 3 -> foo
// divisible by 5 -> bar
// divisible by both -> foobar

for(let i = 1 ; i <=50 ; i++){
    if(i%5==0 && i%3==0){
        console.log('foobar');
    }
    else if(i%5==0){
        console.log('bar');
    }
    else if(i%3==0)
    {
        console.log('foo');
    }
    else{
        console.log(i);
    }
    
}

