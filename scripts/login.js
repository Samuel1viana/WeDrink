const conteiner = document.querySelector(".conteiner");
const login = document.querySelector(".login-section");
const cadastro = document.querySelector(".register-section");

cadastro.addEventListener("click", () => {
    cadastro.classList.add("clicado");
});
login.addEventListener("click", () => {
    cadastro.classList.remove("clicado");
});
