function canPay(arr,num){
    let sum = 0;
    if(arr.length==0){
        return 'Array is empty';
    }
    else{
        for(let i=0;i<arr.length ; i++){
            sum = sum + arr[i];
        }
        if(sum >= num){
            return true;
        }
        else
        {
            return false;
        }
    }
}

const a = [1,2,8];
const n = 10;

let totalamount = canPay(a,n);
console.log(totalamount);