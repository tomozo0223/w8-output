const btn = document.getElementById("js-btn");
const email = document.forms['js-login-form'].elements['email'];
const password = document.forms['js-login-form'].elements['password'];

btn.addEventListener("click", () => {
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
})

email.value = localStorage.getItem("email");
password.value = localStorage.getItem("password");
