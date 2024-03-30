 var numbers = [1,23,45,64,41,95,66];
 

 var element = numbers[2];
 console.log(element);
 numbers[1]=77;
 numbers[5] = 90;
 console.log(numbers);

 var positionIndex = numbers.indexOf(64);
 console.log(positionIndex);

 var positionIndex = numbers.indexOf(35);
 console.log(positionIndex); // output will be -1 if the element is not in that array