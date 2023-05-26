
window.addEventListener("load", () => {
  // Obtener referencias a los elementos del formulario
  const formulario = document.getElementById("formulario");
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const telefonoInput = document.getElementById("telefono");
  const mensajeInput = document.getElementById("mensaje");

  const validaNombre = () => {
    const nombreValor = nombreInput.value.trim();
    if (!nombreValor) {
      validaFalla(nombreInput, "Campo vacío");
    } else {
      validaOk(nombreInput);
    }
  };

  const validaEmail = () => {
    const emailValor = emailInput.value.trim();
    if (!emailValor) {
      validaFalla(emailInput, "Campo vacío");
    } else if (!validaEmailFormato(emailValor)) {
      validaFalla(emailInput, "El email no es válido");
    } else {
      validaOk(emailInput);
    }
  };

  const validaTelefono = () => {
    const telefonoValor = telefonoInput.value.trim();
    if (!telefonoValor) {
      validaFalla(telefonoInput, "Campo vacío");
    } else if (!validaTelefonoFormato(telefonoValor)) {
      validaFalla(telefonoInput, "No ingresó un número válido o no tiene 8 dígitos");
    } else {
      validaOk(telefonoInput);
    }
  };

  const validaMensaje = () => {
    const mensajeValor = mensajeInput.value.trim();
    if (!mensajeValor) {
      validaFalla(mensajeInput, "Campo vacío");
    } else {
      validaOk(mensajeInput);
    }
  };

  nombreInput.addEventListener("input", validaNombre);
  emailInput.addEventListener("input", validaEmail);
  telefonoInput.addEventListener("input", validaTelefono);
  mensajeInput.addEventListener("input", validaMensaje);

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validaNombre();
    validaEmail();
    validaTelefono();
    validaMensaje();
  });

  const validaFalla = (input, mensaje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("span");
    aviso.innerText = mensaje;
    formControl.className = "form-control error";
  };

  const validaOk = (input) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("span");
    aviso.innerText = "";
    formControl.className = "form-control success";
  };

  const validaEmailFormato = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };

  const validaTelefonoFormato = (telefono) => {
    return /^\d{8,}$/.test(telefono);
  };
  
});
