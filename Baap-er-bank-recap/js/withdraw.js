document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputValueById("withdraw-input");
  const previousWithdrawTotal = getElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  const previousBalanceTotal = getElementValueById('balance-total');
  const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
  setTextElementValueById('balance-total',newBalanceTotal);
});

// document.getElementById("btn-withdraw").addEventListener("click", function () {
//   const withdrawField = document.getElementById("withdraw-input");
//   const withdrawAmountString = withdrawField.value;
//   const withdrawAmount = parseFloat(withdrawAmountString);

//   withdrawField.value = "";

//   const withdrawTotalElement = document.getElementById("withdraw-total");
//   const previousWithdrawTotalString = withdrawTotalElement.innerText;
//   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

//   const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
//   withdrawTotalElement.innerText = newWithdrawTotal;

//   const withdrawTotalBalance = document.getElementById("balance-total");
//   const previousWithdrawBalanceTotalString = withdrawTotalBalance.innerText;
//   const previousWithdrawBalanceTotal = parseFloat(
//     previousWithdrawBalanceTotalString
//   );

//   const newWithdrawBalanceTotal = previousWithdrawBalanceTotal - withdrawAmount;
//   withdrawTotalBalance.innerText = newWithdrawBalanceTotal;
// });
