function executar(evento) {
    evento.preventDefault();
    limparErros();

    const nome = document.querySelector("#nome");
    const erroNome = document.querySelector("#erro-nome");

    if (nome.value==="") {
        erroNome.texContent"Nome Não pode esta VAZIO";
        erroNome.classList.add("erro");
        erroNome.classList.remove("oculto");
        }
}

function limparErros () {
    document.querySelectorAll(".erro").forEach((elemento)=>{
        elemento.classList.remove("erro");
        elemento.classList.add("oculto");
    });
}
