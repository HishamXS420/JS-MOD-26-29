function make_avg(){
   var number = [7,14,15,18,25,29,42,43,45];
   var sum = 0;
   for(var i = 0 ; i < number.length ; i++)
   {
    sum += number[i];
   }
   const avg = sum / number.length;
   return avg;
}

var result = make_avg();
console.log(result);