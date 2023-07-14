let SubmitButton = document.getElementById("submit-button");
let SuccessMessageContainer = document.getElementById(
  "Success-message-container"
);
let Main = document.getElementById("main");
let GeneralContainer = document.getElementById("general-container");
let BtnDismiss = document.getElementById("btn-dismiss");
let DataForm = document.getElementById("data-form");
let EmailWarning = document.getElementById("Email-warning");
let EmailInput = document.getElementById("email-input");

// Event submit form
DataForm.addEventListener("submit", (e) => {
  let InputValue = EmailInput.value;
  let EmailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  e.preventDefault();

  // if validation is false
  if (!EmailValidation.test(InputValue)) {
    EmailInput.style.borderColor = "red";
    EmailInput.style.backgroundColor = "#ff000029";
    EmailInput.style.color = "#ff0000b5";

    EmailWarning.classList.replace("d-none", "d-inline-block");
    EmailWarning.style.color = "#ff0000b5";
  } else {
    EmailWarning.classList.replace("d-inline-block", "d-none");
    GeneralContainer.classList.replace("d-flex", "d-none");
    SuccessMessageContainer.classList.replace("d-none", "d-flex");
    EmailInput.value = "";
  }
  //input event
  DataForm.addEventListener("input", (e) => {
    EmailInput.style.borderColor = "";
    EmailInput.style.backgroundColor = "";
    EmailInput.style.color = "";
  });
  // click event to return
  BtnDismiss.onclick = function () {
    GeneralContainer.classList.replace("d-none", "d-flex");
    SuccessMessageContainer.classList.replace("d-flex", "d-none");
  };
});
