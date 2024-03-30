function reverseWords(str){
    const words = str.split(' '); // dividing the sentence into words divided by space
    const result = [];
    console.log(words); // printing the words only

    for(i = words.length-1 ; i>=0 ;i--){
        const element = words[i];
        result.push(element);
    }

    console.log('reversed sentence : ',result); // printing the words in reversed serial
    const reversed = result.join(' ');
    return reversed;
}

const myString = 'I am good human';
rev = reverseWords(myString);
console.log(rev); // printing the reversed sentence