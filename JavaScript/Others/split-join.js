const lyrics = 'tumi chaile bristy megho chilo raji. opekkha sudhu borshoner';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');


// console.log(parts);
// console.log(sentences);
// console.log(chars);

const partial = lyrics.slice(5,8);
// console.log(partial);

const partial2 = lyrics.substring(5,8);
// console.log(partial2);

// console.log(lyrics.at(7));

const lines = [
    'tumi akash hoye jao',
    'ami thaki paharay'
]

const newSong = lines.join(':');
console.log(newSong);

