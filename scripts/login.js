const conteiner = document.querySelector(".conteiner");
const botaoCadastro = document.querySelector(".cadastro");
const botaoEntrar = document.querySelector(".entrar");

botaoEntrar.addEventListener("click", () => {
    botaoEntrar.classList.add("clicado");
});
botaoCadastro.addEventListener("click", () => {
    botaoEntrar.classList.remove("clicado");
});
