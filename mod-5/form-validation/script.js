const form = document.querySelector("form");
const errorMessage = document.getElementById("error-message");
console.dir(form);

const currentInput = form[1];

console.dir(currentInput);

currentInput.addEventListener("input", function (e) {
  if (e.target.validity.typeMismatch) {
    e.target.setCustomValidity(
      "Please enter a valid email address, for example, name@example.com.",
    );
  } else {
    customEmailInput.setCustomValidity(""); // Clear custom error if valid
  }

  errorMessage.textContent = e.target.validationMessage;
  console.log(e.target.validity);
});
