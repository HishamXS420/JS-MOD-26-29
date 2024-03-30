function sortMaker(arr){
   
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] != arr[i+1] && typeof arr[i]=='number' && typeof arr[i+1]=='number' ){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            return arr;
        }

        else if(arr[i] == arr[i+1]  ){
            return 'equal';
        }
        else{
            return 'Invalid input';
        }
    }
   

    
}

 // let a = [4,2];// (1st input)
 //let a = [3,4];// (2nd input)
let a = [5,'gone']; //(3rd input)
const result = sortMaker(a);
console.log(result);