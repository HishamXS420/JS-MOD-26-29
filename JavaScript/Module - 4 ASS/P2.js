function matchFinder(str1, str2){
    if(typeof str1 =='string' && typeof str2 =='string' && str1 == str2)
    {
        return true;
    }
    else if(typeof str1 =='string' && typeof str2 =='string' &&  str1 != str2){
        return false;
    }
    else{
        return 'Please input two strings only';
    }
}

const result = matchFinder('Hisham','hisham');
console.log(result);