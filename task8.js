const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (!email || !password) {
    alert("Por favor, rellene todos los espacios.");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  loginForm.reset();
});
