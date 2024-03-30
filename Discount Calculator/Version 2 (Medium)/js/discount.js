function getTextValueBy(textId) {
  const textField = document.getElementById(textId);
  const textFieldString = textField.innerText;
  const textFieldValue = parseFloat(textFieldString);

  return textFieldValue;
}

function compareCoupon(elementId1, elementId2, stringId) {
  const inputString = document.getElementById(stringId);
  const inputStringText = inputString.value;
  if (inputStringText == "DISC30") {
    const inputAmount = getTextValueBy(elementId1);
    const finalAmount = getTextValueBy(elementId2);
    const finalDiscountedAmount =
      inputAmount - (inputAmount / 100) * finalAmount;

    return finalDiscountedAmount;
  } else {
    const inputAmount = getTextValueBy(elementId1);

    return inputAmount;
  }
}

document
  .getElementById("discount-apply")
  .addEventListener("click", function () {
    // const inputString = getElementById('coupon-input');

    const initialAmount = getTextValueBy("initial-price");

    const discountedAmount = getTextValueBy("discount-percentage");

    const previousPrice = getTextValueBy("pay-amount");

    const discountValue = compareCoupon(
      "initial-price",
      "discount-percentage",
      "coupon-input"
    );
    console.log(discountValue);
    const previousAmount = document.getElementById("pay-amount");

    previousAmount.innerText = discountValue;
  });
