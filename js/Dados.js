var valor = document.getElementById('valor')
var dia = document.getElementById('dia')
var titulo = document.getElementById('titulo')
var entrada = document.getElementById('entrada')
var saida = document.getElementById('saida')
var botao = document.getElementById('botao')
var fechaModal = document.getElementById('acaoFechar')
var conjuntoDados = []
var abriModal = document.getElementById('addLancamento')
var vazio1 = ''
var vazio2 = ''
var vazio3 = ''
var entradaVazia = false
var saidaVazia = false


botao.addEventListener ('click', function(evento){

    evento.preventDefault()


      var resultado = {
        valor:valor.value,
        dia:dia.value,
        titulo:titulo.value,
        entrada:entrada.checked,
        saida:saida.checked
    }


    console.log(resultado)
    conjuntoDados.push(resultado)
       valor.value = ''
       dia.value=''
       titulo.value=''
       entrada.checked=false
       saida.checked=false
   fechaModal.style.display='none'


})

console.log(conjuntoDados[0])