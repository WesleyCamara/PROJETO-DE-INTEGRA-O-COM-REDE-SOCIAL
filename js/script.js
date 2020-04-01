const input = document.querySelector("#input-busca");

// função de pesquisar, ainda não foi implementada, no momento só previne o envio do formulário
function pesquisar(event) {
    event.preventDefault();
    verificaConteudoVazio()
}



// Valida os dados para pesquisa
function valida(event) {
    limpaHashtag()
    removeMensagemErro()
}


//Limpa o texto tirando o caractere # se houver
function limpaHashtag() {
    console.log("valor sujo: " + input.value);

    if (input.value[0] === "#") {
        input.value = input.value.replace(input.value[0], "");
        console.log("valor limpo: " + input.value);
    }
}

function verificaConteudoVazio() {
    if (!input.value) {
        addMensagemErro()
    }
}

function addMensagemErro() {
    const alertaErro = document.querySelector(".mensagem-erro");
    alertaErro.classList.add("ativo")
}

function removeMensagemErro(){
    const alertaErro = document.querySelector(".mensagem-erro");
    alertaErro.classList.remove("ativo")
}

