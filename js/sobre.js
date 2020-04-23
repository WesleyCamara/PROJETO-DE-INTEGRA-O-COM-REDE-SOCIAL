//window.alert('oi')

let propPerfis = {
    enlaces_menu: document.querySelectorAll('#menu-perfil .mini-card .btn'),
    div_menu: document.querySelectorAll('#menu-perfil .mini-card div'),
    divs_conteudo: document.querySelectorAll('#equipe_conteudo > div'),    
    conteudo_ativo: null

}

let metPefis = {
    inicio: function(){       

        for (let i =0; i < propPerfis.enlaces_menu.length; i++){
            propPerfis.enlaces_menu[i].addEventListener('click', metPefis.evento);

        }
    },

    evento: function(e){

        e.preventDefault();
        for (let i = 0; i < propPerfis.divs_conteudo.length; i++){
            propPerfis.div_menu[i].className = '';
        }


        for (let i = 0; i < propPerfis.divs_conteudo.length; i++){
            propPerfis.divs_conteudo[i].className = '';
        }

        this.parentElement.className = 'active';
        propPerfis.conteudo_ativo = this.getAttribute('href');
        document.querySelector(propPerfis.conteudo_ativo).className = 'active';
        document.querySelector(propPerfis.conteudo_ativo).style.opacity = 0;
        setTimeout(function(){
            document.querySelector(propPerfis.conteudo_ativo).style.opacity = 1;
        }, 100);
    }
}

metPefis.inicio();