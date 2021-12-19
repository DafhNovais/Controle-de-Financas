function abrir(){
    let modal = document.querySelector('.backFon')

    modal.style.display = 'block';
}

function fechar(){
    let modal = document.querySelector('.backFon')

    modal.style.display = 'none';
}


var primero= document.getElementById("botao");

primero.addEventListener("click", validar);

function validar (){

  var valor= formulario.valor.value;
  var data= formulario.data.value;
  var titulo= formulario.titulo.value;

  

if (valor=="" ||  valor.length >= 13) {
    alert('Preencha corretamente o campo Valor até 12 caracteres.');
    formulario.valor.focus();
    return false;
}


if (data==""  ){
  alert('Preencha corretamente o campo Data.');
  formulario.data.focus();
  return false;
}

if (titulo=="" || titulo.length >=51){
    alert('Preencha o campo titulo com máximo 50 caracteres.');
    formulario.titulo.focus();
    return false;

}else{

  return true;


}
}

