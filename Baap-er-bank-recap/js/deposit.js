
document.getElementById("btn-deposit").addEventListener("click", function () {
  // 1. get the element by id
  // 2. get the value from the element
  // 3. convert string value to a number
  const newDepositAmount = getInputValueById("deposit-input");

  // 4. get previous deposit total by id
  const previousDepositTotal = getElementValueById("deposit-total");

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});

// // 1. Add event listener to the deposit button
// // 2. Get Deposit amount from the deposit input field
// // 2.5. Convert String deposit amount to a number type
// // 3. clear the deposit input field after getting the value
// // 4. Get the previous deposit total
// // 5. Calculate new deposit total and set the value to the deposit total
// // 6. Get current Balance Total
// // 7. Calculate the new balance and set it to the balance total element

// document.getElementById('btn-deposit').addEventListener('click', function (){
//   const depositField = document.getElementById('deposit-input');
//   const newDepositAmountString = depositField.value;
//   const newDepositAmount = parseFloat(newDepositAmountString);

//   // step 3
//   depositField.value = '';

//   // step 4
//   const depositTotalElement = document.getElementById('deposit-total');
//   const previousDepositTotalString =  depositTotalElement.innerText;
//   const previousDepositTotal = parseFloat(previousDepositTotalString);

//   // step 5
//   const newDepositTotal = previousDepositTotal + newDepositAmount;
//   console.log(previousDepositTotal);
//   depositTotalElement.innerText = newDepositTotal;

//   // step 6
//   const depositTotalBalance = document.getElementById('balance-total');
//   const previousDepositBalanceTotalString = depositTotalBalance.innerText;
//   const previousDepositBalanceTotal = parseFloat(previousDepositBalanceTotalString);

//   // step 7
//   const newDepositBalanceTotal = previousDepositBalanceTotal + newDepositAmount;
//   depositTotalBalance.innerText = newDepositBalanceTotal;
// });
