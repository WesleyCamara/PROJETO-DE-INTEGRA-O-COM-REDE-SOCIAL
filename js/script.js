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


// Animação ao scroll dos textos

const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate)
            func.apply(context,args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if(callNow)func.apply(context,args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.85);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length){
    window.addEventListener('scroll',debounce(function(){
        animeScroll();
    }, 100));
}
