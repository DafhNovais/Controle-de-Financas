function abrir(){
    let modal = document.querySelector('.backFon')

    modal.style.display = 'block';
}

function fechar(){
    let modal = document.querySelector('.backFon')

    modal.style.display = 'none';
}


/*var primero= document.getElementById("botao");

primero.addEventListener("click", validar);

function validar (){

  let valor= formulario.valor.value;
  let data= formulario.data.value;
  let titulo= formulario.titulo.value;
  let validarcheck = document.forms["formulario"]["empleoactual"];


  

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

}

if (validarcheck[0].checked==false && validarcheck[1].checked ==false){
  alert('preencher o campo de entrada ou saída de dinheiro')

}/*else{

    return true;
  
  
  }
  }*/

