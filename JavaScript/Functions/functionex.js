function getAverage (ass1,ass2,ass3){
    const total = ass1+ass2+ass3;
    const average = total /3 ;
    return average;
}

const assmarks1 = 76;
const assmarks2 = 83;
const assmarks3 = 88;

var myAvg = getAverage(assmarks1,assmarks2,assmarks3);
console.log('My avg so far: ',myAvg);
