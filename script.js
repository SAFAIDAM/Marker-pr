document.addEventListener("DOMContentLoaded", function () {
  let emailField = document.getElementById("email");
  let emailError = document.getElementById("email-msg");

  emailField.addEventListener("keyup", function () {
    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      emailError.innerHTML = "Please enter a valid email";
    } else {
      emailError.innerHTML = "";
    }
  });
});