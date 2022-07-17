const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuario e obrigatorio");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email e obrigatorio.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email valido.");
  } else {
    setSuccess(email);
  }

  if (passwordValue == "") {
    setErrorFor(password, "A senha e obrigatoria.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no minimo 7 caracteres.");
  } else {
    setSuccess(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmacao de senha e obrigatoria");
  }
  if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas nao conferem");
  } else if (passwordValue === "") {
    setErrorFor(passwordConfirmation, "Digite uma senha.");
  } else {
    setSuccess(passwordConfirmation);
  }

  const formControls = form.querySelectorAll("form-control");
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulario esta 100% valido");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //adicionar menssagem de erro
  small.innerText = message;
  //adicionar classe de erro
  formControl.className = "form-control error";
}

function setSuccess(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
