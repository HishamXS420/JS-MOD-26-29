const lyrics = "obhimane aJ tobe keno protikkha";

//toLowerCase
const searchString = 'Aj';  
const lyricsLowerCase = lyrics.toLowerCase();

//includes
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist); 
console.log(doesExistOneLine);

//includes
console.log(lyrics.indexOf('aJ'));

//startsWith
console.log(lyrics.startsWith('obhimane'));

//endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

console.log(fileName.endsWith('.pdf'));

