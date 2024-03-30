// Step-1: Add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // Step-2: Get the email address inside the email input field
  // always remember to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;


  // Step-3: get password
  const passField = document.getElementById("user-password");
  const password = passField.value;
 

  // N.B./Danger: NEVER Verify email password on the client side
  // We are doing here only for learning purpose

  // Step-4: Verify Email and Password
  if (email == "devin@ai.com" && password == "replacement") {
    console.log("Login Successful");
    window.location.href = "bank.html";
  } else {
    alert("Invalid user email or password");
  }
});
