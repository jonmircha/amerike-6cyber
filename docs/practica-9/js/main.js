const d = document;
const $form = d.querySelector("#register-form");
const $nameInput = d.querySelector("#name");
const $nameError = d.querySelector("#name-error");
const $emailInput = d.querySelector("#email");
const $emailError = d.querySelector("#email-error");
const $passwordInput = d.querySelector("#password");
const $passwordError = d.querySelector("#password-error");
const $confirmPasswordInput = d.querySelector("#confirm-password");
const $confirmPasswordError = d.querySelector("#confirm-password-error");
const $successMessage = d.querySelector("#success-message");
const $errorsMessages = d.querySelectorAll(".error");

function validateForm(e) {
  // Previene o cancela el comportamiento por defecto de un evento
  e.preventDefault();
  console.log(e);

  $errorsMessages.forEach(function (el) {
    el.textContent = "";
  });

  let isValid = true;

  if ($nameInput.value.trim() === "") {
    $nameError.textContent = "El campo nombre es obligatorio";
    isValid = false;
  }

  let emailPattern = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  if ($emailInput.value.trim() === "") {
    $emailError.textContent = "El campo correo es obligatorio";
    isValid = false;
  } else if (!emailPattern.test($emailInput.value.trim())) {
    $emailError.textContent = "El campo correo tiene un formato incorrecto";
    isValid = false;
  }

  if ($passwordInput.value.trim() === "") {
    $passwordError.textContent = "El campo password es obligatorio";
    isValid = false;
  } else if ($passwordInput.value.trim().length < 8) {
    $passwordError.textContent =
      "El campo password debe tener al menos 8 caracteres";
    isValid = false;
  }

  if ($confirmPasswordInput.value.trim() !== $passwordInput.value.trim()) {
    $confirmPasswordError.textContent =
      "El campo Confirmar Contraseña debe coincidir con la contraseña";
    isValid = false;
  }

  if (isValid) {
    alert("Enviando Form");
    $successMessage.textContent = "Formulario enviado con éxito";
    $form.reset();

    setTimeout(function () {
      $successMessage.textContent = "";
      $form.submit();
    }, 3000);
  }
}

$form.addEventListener("submit", validateForm);
