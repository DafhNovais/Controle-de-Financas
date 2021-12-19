var valor = document.getElementById('valor')
var dia = document.getElementById('dia')
var titulo = document.getElementById('titulo')
var entrada = document.getElementById('entrada')
var saida = document.getElementById('saida')
var botao = document.getElementById('botao')
var fechaModal = document.getElementById('acaoFechar')
var abriModal = document.getElementById('addLancamento')
var titulos = document.getElementById('titulos')
var mensagemVazia = document.getElementById('semLancamento')
var novoElemento = document.createElement('div')
var total = document.getElementById('total')
titulos.style.display = 'none'

function saldoTotal() {
  fetch('http:localhost:3004/finance-register/total').then((saldo) => {
    return saldo.json()
  }).then((saldo) => {
    console.log(saldo)
    if (saldo.total == null) {
      total.innerText = '0,00'
    } else {
    total.innerText = saldo.total.toFixed(2)
    }
  })
}

function corCardPosEdicao (cor) {
  let numeroString = cor.toString()
  let validando = numeroString[0] == '-'? 'card negativo': 'card positivo'
  return validando
}

function tiraSinalDesign (numero) {
  let numeroString = numero.toString()
  let validando = numeroString[0] == '-'? numeroString.replace('-', ''): numeroString.toString()
  let real = parseFloat(validando)
  return real
} 


 function positivoOuNegativo (validador) {
  var guarda = validador[validador.length -1].lancamento.toString()
  var confirmador = guarda[0] === '-'? 'card negativo': 'card positivo'
  return confirmador 
}


function custoOuAquisicao () {
  var validador = entrada.checked === true? parseFloat(valor.value): valor.value * -1
  return validador
}

function adicionandoCard () {

  saldoTotal()   

  fetch('http:localhost:3004/finance-register').then((resultado) => {
        return resultado.json()
  }).then((dadoEspecifico) => {
   
    console.log(dadoEspecifico)
    titulos.style.display = ''
  var caixa = document.getElementById("box")
  var caixaNegativa = document.createElement('div')
  var ulLista = document.createElement('ul')
  var liLista = document.createElement('li')
  var liLista2 = document.createElement('li')
  var liLista3 = document.createElement('li')
  var liLista4 = document.createElement('li')
  var conteudoTitulo = document.createElement('h5')
  var conteudoValor = document.createElement('h5')
  var conteudoTituloData = document.createElement('h5')
  var botao1 = document.createElement('button')
  var botao2 = document.createElement('button')
  var icon1 = document.createElement('i')
  var icon2 = document.createElement('i')
  ulLista.className = "grid"
  caixaNegativa.className = positivoOuNegativo(dadoEspecifico)
  botao1.className = "bn"
  botao1.id = dadoEspecifico[dadoEspecifico.length -1].id
  botao2.id = dadoEspecifico[dadoEspecifico.length -1].id *1000
  caixaNegativa.id = dadoEspecifico[dadoEspecifico.length -1].id + dadoEspecifico[dadoEspecifico.length -1].id + dadoEspecifico[dadoEspecifico.length -1].id
  botao2.className = "bn"
  liLista4.id = 'identificador'
  icon1.className = "fa fa-pencil"
  icon2.className = "fa fa-trash"
  caixa.appendChild(caixaNegativa)
  caixaNegativa.appendChild(ulLista)
  ulLista.appendChild(liLista)
  ulLista.appendChild(liLista2)
  ulLista.appendChild(liLista3)
  ulLista.appendChild(liLista4)
  liLista.appendChild(conteudoTitulo)
  liLista2.appendChild(conteudoValor)
  liLista3.appendChild(conteudoTituloData)
  liLista4.appendChild(botao1)
  liLista4.appendChild(botao2)
  botao1.appendChild(icon1)
  botao2.appendChild(icon2)
  liLista4.dataset.columns = dadoEspecifico[dadoEspecifico.length -1].id
  conteudoTitulo.innerText = dadoEspecifico[dadoEspecifico.length -1].titulo
  conteudoValor.innerText = 'R$ '+ tiraSinalDesign(dadoEspecifico[dadoEspecifico.length -1].lancamento)/*dadoEspecifico[dadoEspecifico.length -1].lancamento.toString()*/
  conteudoTituloData.innerText = dadoEspecifico[dadoEspecifico.length -1].dia
  var eliminacaoCard = document.getElementById(dadoEspecifico[dadoEspecifico.length -1].id + dadoEspecifico[dadoEspecifico.length -1].id + dadoEspecifico[dadoEspecifico.length -1].id) 

  console.log(liLista4.dataset.columns)


  var botaoEditar = document.getElementById(dadoEspecifico[dadoEspecifico.length -1].id)

var atoDeEditar = new Promise (function (aceitar, rejeitar) {
  
  botaoEditar.addEventListener('click', function (e) {
        e.preventDefault() 
        liLista.removeChild(conteudoTitulo)
        liLista2.removeChild(conteudoValor)
        liLista3.removeChild(conteudoTituloData)
        var inputTitulo = document.createElement('input')
        inputTitulo.id = dadoEspecifico[dadoEspecifico.length -1].id *7
        var inputlancamento = document.createElement('input')
        inputlancamento.id = dadoEspecifico[dadoEspecifico.length -1].id *8
        var inputDia = document.createElement('input')
        inputDia.id = dadoEspecifico[dadoEspecifico.length -1].id *9
        var botaoAprovado = document.createElement('button')
        botaoAprovado.innerHTML = 'confirma'
        inputTitulo.value = dadoEspecifico[dadoEspecifico.length -1].titulo
        inputlancamento.value = dadoEspecifico[dadoEspecifico.length -1].lancamento
        inputDia.value = dadoEspecifico[dadoEspecifico.length -1].dia
        liLista4.removeChild(botao1)
        liLista4.removeChild(botao2)
        liLista.appendChild(inputTitulo)
        liLista2.appendChild(inputlancamento)
        liLista3.appendChild(inputDia)
        liLista4.appendChild(botaoAprovado)
        botaoAprovado.id = dadoEspecifico[dadoEspecifico.length -1].id *10
        console.log('Deu certo')
        console.log(liLista4.dataset.columns)
        var botaoConfirma1 = ''
        aceitar(botaoConfirma1 = document.getElementById(dadoEspecifico[dadoEspecifico.length -1].id *10))
        rejeitar(console.log('espera'))
})
}).then(function confirma (botaoConfirma1) {

   botaoConfirma1.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('Está funcionando')
    var novoConteudoTitulo = document.createElement('h5')
    var novoConteudoValor = document.createElement('h5')
    var novoConteudoDia = document.createElement('h5')
    var inputTituloConfirma = document.getElementById(dadoEspecifico[dadoEspecifico.length -1].id *7)
    var inputlancamentoConfirma = document.getElementById(dadoEspecifico[dadoEspecifico.length -1].id *8)
    var inputDiaConfirma = document.getElementById(dadoEspecifico[dadoEspecifico.length -1].id *9)
    novoConteudoTitulo.innerText = inputTituloConfirma.value
    novoConteudoValor.innerText = 'R$ '+ tiraSinalDesign(inputlancamentoConfirma.value) /*${inputlancamentoConfirma.value}*/
    novoConteudoDia.innerText = inputDiaConfirma.value
    caixaNegativa.className = corCardPosEdicao(inputlancamentoConfirma.value)

    var atualizar = {
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        titulo:inputTituloConfirma.value,
        lancamento: parseFloat(inputlancamentoConfirma.value),
        dia: inputDiaConfirma.value
      })
    }
    fetch(`http:localhost:3004/finance-register/${liLista4.dataset.columns}`, atualizar).then((atualizacao) => {
      return atualizacao.json()
    }).then((result) => {
      console.log(result)
    })

    saldoTotal()

    inputTituloConfirma.style.display = 'none'
    inputlancamentoConfirma.style.display ='none'
    inputDiaConfirma.style.display ='none'
    liLista4.removeChild(botaoConfirma1)
    liLista.appendChild(novoConteudoTitulo)
    liLista2.appendChild(novoConteudoValor)
    liLista3.appendChild(novoConteudoDia)
    liLista4.appendChild(botao1)
    liLista4.appendChild(botao2)
    botao1.appendChild(icon1)
    botao2.appendChild(icon2)
    
  })
})


 var botaoDeletar = document.getElementById(dadoEspecifico[dadoEspecifico.length -1].id*1000) 
    
     botaoDeletar.addEventListener('click', function (a){
      a.preventDefault()
      console.log('Opa, funciona')
      console.log(liLista4.dataset.columns)
      eliminacaoCard.style.display = 'none' 
      return fetch(`http:localhost:3004/finance-register/${liLista4.dataset.columns}`, {method:'DELETE'}).then((resposta)=> {
        return resposta.json()
      }).then((resposta1) => {
        console.log(resposta1)

        saldoTotal()

      })
    })
  })
}

 

  var acaoBotaoPostar = new Promise (function (aceito, rejeitado)  {
    botao.addEventListener('click', function (padrao) {
       padrao.preventDefault()

       var postar = {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({  
          titulo:titulo.value,
        lancamento:custoOuAquisicao(),
        dia:dia.value})
        }

       fetch('http:localhost:3004/finance-register', postar).then((res) => {
         return res.json()
       }).then((dados) => {
         console.log(dados)
         return adicionandoCard()
       })

       titulo.value = ''
       dia.value = ''
       valor.value = ''
       entrada.checked = false
       saida.checked = false

       fechaModal.style.display = 'none'
       aceito(mensagemVazia) 
      rejeitado(console.log('deu um errinho'))

      }) 
  }).then((mensagem) => {
    mensagem.style.display = 'none'
  })


  
