function executar(evento) {
    evento.preventDefault();
    limparErros();

    const nome = document.querySelector("#nome");
    const erroNome = document.querySelector("#erro-nome");

    if (nome.value === "") {
        erroNome.textContent = "Nome não pode estar vazio!";
        erroNome.classList.add("erro");
        erroNome.classList.remove("oculto");
    }

    const idade = document.querySelector("#idade");
    const erroIdade = document.querySelector("#erro-idade");

    if (idade.value === "") {
        erroIdade.textContent = "Idade não pode estar vazia!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    } else if (Number(idade.value) < 18) {
        erroIdade.textContent = "Idade deve ser maior ou igual a 18!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    }

    //TODO: adicionar  VALIDAção de E-MAIL UTILIZANDO UM REGEX (TRABALHINHO PRA FAZER EM CASA)
    const email = document.querySelector("#email");
    const erroEmail = document.querySelector("#erro-email");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value === "") {
        erroEmail.textContent = "E-mail não pode estar vazio!";
        erroEmail.classList.add("erro");
        erroEmail.classList.remove("oculto");
    } else if (!regexEmail.test(email.value)) {
        erroEmail.textContent = "E-mail inválido!";
        erroEmail.classList.add("erro");
        erroEmail.classList.remove("oculto");
    }

    const termos = document.querySelector("#termos");
    const erroTermos = document.querySelector("#erro-termos");

    if (!termos.checked) {
        erroTermos.textContent = "Você deve aceitar os termos e condições!";
        erroTermos.classList.add("erro");
        erroTermos.classList.remove("oculto");
    }

    const valido = document.querySelectorAll(".erro").length === 0;
    const concluido = document.querySelector("#concluido");

    if (!valido) {
        concluido.textContent = "Formulário enviado com sucesso!";
        concluido.classList.add("sucesso");
        concluido.classList.remove("oculto");
    } else {
        concluido.textContent = "";
        concluido.classList.add("oculto");
        concluido.classList.remove("sucesso");
    }
}

function limparErros() {
    document.querySelectorAll(".erro").forEach(elemento => {
        elemento.classList.remove("erro");
        elemento.classList.add("oculto");
    });
}