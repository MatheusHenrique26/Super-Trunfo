var harryPotter = {
    nome: "Harry Potter",
    imagem: "https://i2-prod.liverpoolecho.co.uk/incoming/article16965538.ece/ALTERNATES/s1200c/0_harry-potter-prisoner-of-azkaban-warner-bros.jpg",
    atributos: {
        ataque: 94,
        defesa: 92,
        magia: 98
    }
}

var dumbledore = {
    nome: "Dumbledore",
    imagem: "https://wallpapercave.com/wp/wp2291346.jpg",
    atributos: {
        ataque: 93,
        defesa: 91,
        magia: 96
    }
}

var lordVoldemort = {
    nome: "Lorde Voldemort",
    imagem: "https://i.pinimg.com/originals/47/22/aa/4722aaee1322cd6adc02b4f2fb250075.jpg",
    atributos: {
        ataque: 94,
        defesa: 90,
        magia: 95
    }
}

var hermione = {
    nome: "Hermione",
    imagem: "https://wallpapercave.com/wp/wp2729157.jpg",
    atributos: {
        ataque: 84,
        defesa: 80,
        magia: 87
    }
}

var rony = {
    nome: "Ron Weasley",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRit2_4MEviC__m6Gy5YhisskVP_RJ3O3qHbsfeBbSvUpeq4gHjqB_ehtTNcLje9RY2H-Q&usqp=CAU",
    atributos: {
        ataque: 80,
        defesa: 74,
        magia: 77
    }
}

var siriusBlack = {
    nome: "Sirius Black",
    imagem: "https://i.pinimg.com/originals/40/7f/3e/407f3e0a2ff9006ae8d99746255501e7.jpg",
    atributos: {
        ataque: 88,
        defesa: 84,
        magia: 88
    }
}

var hagrid = {
    nome: "Hagrid",
    imagem: "https://wallpapercave.com/wp/wp3786227.jpg",
    atributos: {
        ataque: 88,
        defesa: 74,
        magia: 56
    }
}

var dracoMalfoy = {
    nome: "Draco Malfoy",
    imagem: "https://www.nawpic.com/media/2020/draco-malfoy-nawpic-4.jpg",
    atributos: {
        ataque: 79,
        defesa: 80,
        magia: 81
    }
}

var snape = {
    nome: "Severus Snape",
    imagem: "https://cdn.hipwallpaper.com/i/63/20/7HETZ9.jpg",
    atributos: {
        ataque: 92,
        defesa: 89,
        magia: 93
    }
}

var dobby = {
    nome: "Dobby",
    imagem: "https://wallpaperaccess.com/full/2716718.jpg",
    atributos: {
        ataque: 66,
        defesa: 54,
        magia: 72
    }
}

var cartaMaquina
var cartaJogador
var cartas = [harryPotter, dumbledore, lordVoldemort, hermione, rony, siriusBlack, hagrid, dracoMalfoy , snape , dobby]
//            0           1           2          3         4            5            6           7     

var pontosJogador = 0
var pontosMaquina = 0
atualizaPlacar()
atualizaQuantidadeCartas()

function atualizaQuantidadeCartas(){
  var divQuantidadeCartas = document.getElementById("quantidade-cartas")
  var html = "Quantidade de cartas no jogo : " + cartas.length
  
 divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
  var divPlacar = document.getElementById("placar")
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina +" Maquina"
  
divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina , 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador , 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>' 
    }
  
    if(cartas.length == 0){
      alert('Fim de jogo')
      if(pontosJogador > pontosMaquina){
        htmlResultado ='<p class="resultado-final">Venceu</p>'
      }else if(pontosJogador < pontosMaquina){
        htmlResultado ='<p class="resultado-final">Perdeu</p>'
      }else{
        htmlResultado ='<p class="resultado-final">Empatou</p>'
      }
    }else{
      document.getElementById("btnProximaRodada").disabled = false
    }

    divResultado.innerHTML = htmlResultado
  
  document.getElementById("btnJogar").disabled = true
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById("cartas")
  
  divCartas.innerHTML = `<div id ='carta-jogador' class='carta'></div><div id='carta-maquina' class='carta'></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}