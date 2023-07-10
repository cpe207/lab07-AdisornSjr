const firstNameInput = document.querySelector("#first-name-input"),
  lastNameInput = document.querySelector("#last-name-input"),
  emailInput = document.querySelector("#email-input"),
  passInput = document.querySelector("#password-input"),
  submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};
emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};
passInput.onkeyup = () => {
  passInput.classList.remove("is-valid");
  passInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  let firstNameOk = false,
    lastNameOk = false,
    emailOk = false,
    passOk = false;
  //first
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    firstNameOk = true;
  }
  //last
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    lastNameOk = true;
  }
  //email
  if (validateEmail(emailInput.value)) {
    emailInput.classList.add("is-valid");
    emailOk = true;
  } else {
    emailInput.classList.add("is-invalid");
  }
  //pass
  if (passInput.value.length >= 6) {
    passInput.classList.add("is-valid");
    passOk = true;
  } else {
    passInput.classList.add("is-invalid");
  }

  if (firstNameOk && lastNameOk && emailOk && passOk)
    alert("Registered successfully");
};
