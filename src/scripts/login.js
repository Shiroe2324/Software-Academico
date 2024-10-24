function showForm(formName) {
  const forms = ['login-form', 'register-form', 'forgot-password-form'];

  forms.forEach((form) => {
    document.getElementById(form).style.display = 'none'; // Ocultar todos los formularios
  });

  document.getElementById(formName + '-form').style.display = 'block'; // Mostrar el formulario seleccionado
}

// Muestra el formulario de inicio de sesión al cargar la página
window.addEventListener('load', () => {
  showForm('login'); // Muestra el formulario de inicio de sesión
});
