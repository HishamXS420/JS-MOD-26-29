const friends = [7,15,25,29,42,43,87,124,128,160];

// Removes elements from an array
// and, if necessary, inserts new elements in their place,
// returning the deleted elements.
// will CHANGE THE ORIGINAL ARRAY

// const partial = friends.splice(2,5);
const partial = friends.splice(2,5,99,777);
console.log(partial);
console.log(friends);