function getInputValueBy(inputId){
    const inputField = document.getElementById(inputId);
      const inputFieldString = inputField.value;
      const inputFieldValue = parseFloat(inputFieldString);

    return inputFieldValue;
}
function getTextValueBy(textId){
    const textField = document.getElementById(textId);
      const textFieldString = textField.innerText;
      const textFieldValue = parseFloat(textFieldString);

    return textFieldValue;
}
function getDiscountedValueBy(elementId1, elementId2, newValue){
    const inputAmount = getInputValueBy(elementId1);
    const finalAmount = getTextValueBy(elementId2);
    const finalDiscountedAmount =((inputAmount/100)*newValue);

    return finalDiscountedAmount;
}


document
  .getElementById("discount-apply")
  .addEventListener("click", function () {
    
    const inputAmount = getInputValueBy('price-input')
   

      const discountedAmount = getTextValueBy('discount-percentage');

      

      const previousPrice = getTextValueBy('pay-amount');
    
      
      const discountValue = getDiscountedValueBy('price-input','pay-amount',discountedAmount);
      console.log(discountValue);

    const finalValue = inputAmount - discountValue;

   const previousAmount =  document.getElementById('pay-amount');
    
   previousAmount.innerText = finalValue;


  });
