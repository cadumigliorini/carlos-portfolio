/*botão light-dark mode*/
function changeMode(){
    changeClasses();
    changeText();
    changeAllText();
}

function changeClasses(){
    principal.classList.toggle('light-mode-principal');
}

function changeText(){
    if(principal.classList.contains('light-mode-principal')){
        btnLightDark.innerHTML = 'Dark';
    }
    else btnLightDark.innerHTML = 'Light';
}

function changeAllText(){
    for(let i = 0; i <= texto.length; i++){
        texto[i].classList.toggle('light-mode-texto');
    }
}

let btnLightDark = document.querySelector('.btn-light');
let principal = document.getElementsByTagName('main')[0];
let texto = document.getElementsByClassName('light-text');


btnLightDark.addEventListener('click', changeMode);   
    

/*botão de contato*/
let btnContato = document.querySelector('.btn-contato');

btnContato.addEventListener('click', function(){
    let contato = document.querySelector('.contato-container');
    
    contato.classList.toggle('contato-open');
    this.classList.toggle('mudar-icon');
})

/*formulário de contato*/
let toggleForm = document.querySelectorAll('.toggle-form');

for(let i = 0; i < toggleForm.length; i++){
    toggleForm[i].addEventListener('click', function() {
        let overlay = document.querySelector('.overlay')
        let formContato = document.querySelector('#form-contato')

        overlay.classList.toggle('contato-open')
        formContato.classList.toggle('contato-open')
        formContato.classList.toggle('slide-top-in')
    })
}

/* Máscara do telefone do formulário  */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}
