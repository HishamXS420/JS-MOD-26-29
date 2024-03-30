document.getElementById("btn-withdraw").addEventListener("click",function(){

    //  withdrawField.value = ""; এখানে লেখা যাবে না !!! কারণ সেটা declare ই করা হয়নাই। Declared না হলে clear হবে কিভাবে?!
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // সবগুলো if condition এর মধ্যে  withdrawField.value = ""; না দিয়ে এখানে একবার লেখলেই চলবে।

    //  withdrawField.value = "";

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        withdrawField.value = "";
        return;
    }


    const withdrawTotalElement = document.getElementById("withdraw-total");

    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount>previousBalanceTotal)
    {
        alert('Baap er bank e eto taka nai re bhai');
        withdrawField.value = "";
        return;
    }

    // the code block is transferred here so that withdraw doesn't update if the condition doesn't satisfy
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

 const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

 balanceTotalElement.innerText = currentBalanceTotal;

 withdrawField.value = "";
});
