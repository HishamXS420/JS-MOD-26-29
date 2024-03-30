// step-1: add event handler to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2: get the deposit amount from the deposit input field
// amount গুলো string এ থাকবে, যেগুলোকে সংখ্যায় convert করতে হবে, একটাকে করলে হবে না, সবগুলোকে করতে হবে।

  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString); // converting to number

   // সবগুলো if condition এর মধ্যে  withdrawField.value = ""; না দিয়ে এখানে একবার লেখলেই চলবে।

    //  withdrawField.value = "";
    
  if(isNaN(newDepositAmount)){
    alert('Please provide a valid number');
    depositField.value = "";
    return;
}

  // step-3: get the current deposit total
  // for non-input (element other than input, textarea) use innerText to get the text
   // input = value , input না হলে = innerText
  const depositTotalElement = document.getElementById("deposit-total");
  
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString); // converting to number

    // step-4: add numbers to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

   


 // step-5: get balance current total
 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    

 // step-6: calculate total balance
 const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
 // set the balance total
 balanceTotalElement.innerText = currentBalanceTotal;

  // step-7: clear the deposit field
  depositField.value = "";
});

