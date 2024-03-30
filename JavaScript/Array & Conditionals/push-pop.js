var numbers = [78,45,98,23];
console.log(numbers);
numbers.push(43);
console.log(numbers);
// use push to add element in an array as the last element of the array
var friends = ['Tonmoy', 'Prottasha', 'Mim' , 'Hridoy'];
friends.push('Sadman');
friends.unshift('Shoaib');
console.log(friends);

// use pop to get rid of the last element
var left = friends.pop();
var gone = friends.shift();
console.log(friends); // Storing the popped variable
console.log(left);