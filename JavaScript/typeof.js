const student = {id: 121 , class: 12 , Name: 'pagla'};
const age = 43;
const friends = [11,23,54,26,27,83];

console.log(typeof student);
console.log(typeof age);
//Check array using Array.isArray
console.log(Array.isArray(friends));
console.log(Array.isArray(age));

//"includes" To check if an element is in the variable
console.log(friends.includes(43));
console.log(friends.includes(23));

//indexof to check the index if present or apply conditions
if(friends.indexOf(43)!= -1){
    console.log('here');
}
else
{
    console.log('Not here');
}

//concat:
const newFriendsAge = [43, 15, 29, 14];
const AllFriends = newFriendsAge.concat(friends);
console.log(AllFriends);