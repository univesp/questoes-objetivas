$(document).ready(function () {

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

  $(window).scroll(function () {
    var nav = $(".header-dinamico .container");
    var scroll = $(window).scrollTop();
    if (scroll == 0) {
      nav.fadeIn();
    } else {
      nav.fadeOut();
    }
  });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo

  //Variáveis

})

let home = document.getElementById('home');
let menu = document.getElementById('menu');

//Botão inicial
document.getElementById('iniciar').addEventListener('click', function () {
  // Limpa a tela inicial e exibe a próxima
  home.classList.add('hidden-div');
  home.classList.add('disappear'); // efeito de transição
  menu.classList.remove('hidden-div');
  menu.classList.add('appear'); // efito de transição
  num = 0;
  console.log(`página-${num}`);
});

var num;

//Variáveis
let asserção1 = document.getElementById('asserção-1');
let asserção2 = document.getElementById('asserção-2');
let lacuna1 = document.getElementById('lacuna-1');
let lacuna2 = document.getElementById('lacuna-2');
let associação1 = document.getElementById('associação-1');
let associação2 = document.getElementById('associação-2');
let respostaUnica1 = document.getElementById('resposta-unica-1');
let respostaUnica2 = document.getElementById('resposta-unica-2');
let multiplas1 = document.getElementById('multiplas-1');
let multiplas2 = document.getElementById('multiplas-2');
let asserção = document.getElementById('asserção');
let lacuna = document.getElementById('lacuna');
let associação = document.getElementById('associação');
let respostaUnica = document.getElementById('resposta-unica-e-complementação');
let multiplas = document.getElementById('respostas-multiplas');
let praticar1 = document.getElementById('img-praticar');
let praticar2 = document.getElementById('img-praticar-invertido');
let estrategia1 = document.getElementById('estratégia-1');
let estrategia2 = document.getElementById('estratégia-2');
let estrategia3 = document.getElementById('estratégia-3');
let estrategia4 = document.getElementById('estratégia-4');
let estrategia5 = document.getElementById('estratégia-5');
let sublinhadoRosa1 = document.getElementById('sublinhado-rosa-1');
let sublinhadoRosa2 = document.getElementById('sublinhado-rosa-2');
let sublinhadoRosa3 = document.getElementById('sublinhado-rosa-3');
let sublinhadoRosa4 = document.getElementById('sublinhado-rosa-4');
let sublinhadoRosa5 = document.getElementById('sublinhado-rosa-5');
let respostaAsserção = document.getElementById('resposta-asserção');
let modalAsserção = document.getElementById('modal-asserção');
let modalBackground = document.getElementById('background');
let inicio1 = document.getElementById('inicio-1');
let inicio2 = document.getElementById('inicio-2');
let text = document.getElementById('text-0');
let box = document.getElementById('box');
let boxAsserção = document.getElementById('box-asserção');
let boxPraticarAsserção = document.getElementById('box-praticar-asserção');
let botão1 = document.getElementById('botão-1');
let botão2 = document.getElementById('botão-2');
let botão3 = document.getElementById('botão-3');
let botão4 = document.getElementById('botão-4');
let botão5 = document.getElementById('botão-5');
const botãoInicio = document.getElementById('botão-inicio');
const opçõesMenu = document.getElementById('opções-menu');
const menuAsserção = document.getElementById('menu-asserção');
const menuLacuna = document.getElementById('menu-lacuna');
const menuAssociação = document.getElementById('menu-associação');
const menuRespostaUnica = document.getElementById('menu-resposta-unica');
const menuRespostasMultiplas = document.getElementById('menu-respostas-multiplas');
const praticarAsserção = document.getElementById('vamos-praticar');
let estrategiaLacuna1 = document.getElementById('estratégia-lacuna-1');
let estrategiaLacuna2 = document.getElementById('estratégia-lacuna-2');
let estrategiaLacuna3 = document.getElementById('estratégia-lacuna-3');
let estrategiaLacuna4 = document.getElementById('estratégia-lacuna-4');
let estrategiaLacuna5 = document.getElementById('estratégia-lacuna-5');
let sublinhadoAmarelo1 = document.getElementById('sublinhado-amarelo-1');
let sublinhadoAmarelo2 = document.getElementById('sublinhado-amarelo-2');
let sublinhadoAmarelo3 = document.getElementById('sublinhado-amarelo-3');
let sublinhadoAmarelo4 = document.getElementById('sublinhado-amarelo-4');
let sublinhadoAmarelo5 = document.getElementById('sublinhado-amarelo-5');
let respostaLacuna = document.getElementById('resposta-lacuna');
let modalLacuna = document.getElementById('modal-lacuna');
let praticarLacuna1 = document.getElementById('img-praticar-lacuna');
let praticarLacuna2 = document.getElementById('img-praticar-lacuna-invertido');
let boxPraticarLacuna = document.getElementById('box-praticar-lacuna');
let boxLacuna = document.getElementById('box-lacuna');
let modalAssociação = document.getElementById('modal-associação');
let estrategiaAssociação1 = document.getElementById('estratégia-associação-1');
let estrategiaAssociação2 = document.getElementById('estratégia-associação-2');
let estrategiaAssociação3 = document.getElementById('estratégia-associação-3');
let estrategiaAssociação4 = document.getElementById('estratégia-associação-4');
let estrategiaAssociação5 = document.getElementById('estratégia-associação-5');
let sublinhadoVerde1 = document.getElementById('sublinhado-verde-1');
let sublinhadoVerde2 = document.getElementById('sublinhado-verde-2');
let sublinhadoVerde3 = document.getElementById('sublinhado-verde-3');
let sublinhadoVerde4 = document.getElementById('sublinhado-verde-4');
let sublinhadoVerde5 = document.getElementById('sublinhado-verde-5');
let respostaAssociação = document.getElementById('resposta-associação');
let boxAssociação = document.getElementById('box-associação');
let boxPraticarAssociação = document.getElementById('box-praticar-associação');
let praticarAssociação1 = document.getElementById('img-praticar-associação');
let praticarAssociação2 = document.getElementById('img-praticar-associação-invertido');
let modalRespostaUnica = document.getElementById('modal-resposta-unica');
let sublinhadoAzul1 = document.getElementById('sublinhado-azul-1');
let sublinhadoAzul2 = document.getElementById('sublinhado-azul-2');
let sublinhadoAzul3 = document.getElementById('sublinhado-azul-3');
let sublinhadoAzul4 = document.getElementById('sublinhado-azul-4');
let sublinhadoAzul5 = document.getElementById('sublinhado-azul-5');
let estrategiaRespostaUnica1 = document.getElementById('estratégia-resposta-unica-1');
let estrategiaRespostaUnica2 = document.getElementById('estratégia-resposta-unica-2');
let estrategiaRespostaUnica3 = document.getElementById('estratégia-resposta-unica-3');
let estrategiaRespostaUnica4 = document.getElementById('estratégia-resposta-unica-4');
let estrategiaRespostaUnica5 = document.getElementById('estratégia-resposta-unica-5');


//Função para inverter imagem menu ao passar o mouse
function invertAsserção() {
  asserção1.classList.add('hidden-div');
  asserção2.classList.remove('hidden-div');
}

//Função para converter a imagem ao passar o mouse
function convertAsserção() {
  asserção1.classList.remove('hidden-div');
  asserção2.classList.add('hidden-div');
}

//Função para inverter imagem menu ao passar o mouse
function invertLacuna() {
  lacuna1.classList.add('hidden-div');
  lacuna2.classList.remove('hidden-div');
}

//Função para converter a imagem ao passar o mouse
function convertLacuna() {
  lacuna1.classList.remove('hidden-div');
  lacuna2.classList.add('hidden-div');
}

//Função para inverter imagem menu ao passar o mouse
function invertAssociação() {
  associação1.classList.add('hidden-div');
  associação2.classList.remove('hidden-div');
}

//Função para converter a imagem ao passar o mouse
function convertAssociação() {
  associação1.classList.remove('hidden-div');
  associação2.classList.add('hidden-div');
}

//Função para inverter imagem menu ao passar o mouse
function invertRespostaUnica() {
  respostaUnica1.classList.add('hidden-div');
  respostaUnica2.classList.remove('hidden-div');
}

//Função para converter a imagem ao passar o mouse
function convertRespostaUnica() {
  respostaUnica1.classList.remove('hidden-div');
  respostaUnica2.classList.add('hidden-div');
}

//Função para inverter imagem menu ao passar o mouse
function invertMultiplas() {
  multiplas1.classList.add('hidden-div');
  multiplas2.classList.remove('hidden-div');
}

//Função para converter a imagem ao passar o mouse
function convertMultiplas() {
  multiplas1.classList.remove('hidden-div');
  multiplas2.classList.add('hidden-div');
}

//Função para inverter imagem menu ao passar o mouse
function invertPraticar() {
  praticar1.style.display = "none";
  praticar2.style.display = "block";
}

//Função para converter a imagem ao passar o mouse
function convertPraticar() {
  praticar1.style.display = "block";
  praticar2.style.display = "none";
}

//Função para inverter imagem menu ao passar o mouse
function invertInicio() {
  inicio1.style.display = "none";
  inicio2.style.display = "block";
  text.style.color = "#343434";
}

//Função para converter a imagem ao passar o mouse
function convertInicio() {
  inicio1.style.display = "block";
  inicio2.style.display = "none";
  text.style.color = "#ffffff";
}

function invertPraticarLacuna() {
  praticarLacuna1.style.display = "none";
  praticarLacuna2.style.display = "block";
}

//Função para converter a imagem ao passar o mouse
function convertPraticarLacuna() {
  praticarLacuna1.style.display = "block";
  praticarLacuna2.style.display = "none";
}

function invertPraticarAssociação() {
  praticarAssociação1.style.display = "none";
  praticarAssociação2.style.display = "block";
}

//Função para converter a imagem ao passar o mouse
function convertPraticarAssociação() {
  praticarAssociação1.style.display = "block";
  praticarAssociação2.style.display = "none";
}


//FUNÇÕES OPÇÕES QUESTÕES MENU

//Opção de asserção
function questãoAsserção() {
  // Limpa a tela inicial e exibe a próxima
  botãoInicio.classList.remove('hidden-div');
  botãoInicio.parentElement.removeChild(botãoInicio);
  menuAsserção.appendChild(botãoInicio);
  opçõesMenu.parentElement.removeChild(opçõesMenu);
  menuAsserção.appendChild(opçõesMenu);
  opçõesMenu.style.marginLeft = "0";
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  asserção.classList.remove('hidden-div');
  asserção.classList.add('appear'); // efito de transição
  num = 1;
  console.log(`pagina-${num}`);
  if (num == 1) {
    botão1.style = "pointer-events: none";
    botão2.style = "pointer-events: none";
    botão3.style = "pointer-events: none";
    botão4.style = "pointer-events: none";
    botão5.style = "pointer-events: none";
    boxAsserção.classList.remove('hidden-div');
    boxAsserção.classList.add('appear');
  }
};

//Opção de lacuna
function questãoLacuna() {
  // Limpa a tela inicial e exibe a próxima
  botãoInicio.classList.remove('hidden-div');
  botãoInicio.parentElement.removeChild(botãoInicio);
  menuLacuna.appendChild(botãoInicio);
  opçõesMenu.parentElement.removeChild(opçõesMenu);
  menuLacuna.appendChild(opçõesMenu);
  opçõesMenu.style.marginLeft = "0";
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  lacuna.classList.remove('hidden-div');
  lacuna.classList.add('appear'); // efito de transição
  num = 2;
  console.log(`pagina-${num}`);
  if (num == 2) {
    botão1.style = "pointer-events: none";
    botão2.style = "pointer-events: none";
    botão3.style = "pointer-events: none";
    botão4.style = "pointer-events: none";
    botão5.style = "pointer-events: none";
    boxLacuna.classList.remove('hidden-div');
    boxLacuna.classList.add('appear');
  }
};

//Opção de lacuna
function questãoAssociação() {
  // Limpa a tela inicial e exibe a próxima
  botãoInicio.classList.remove('hidden-div');
  botãoInicio.parentElement.removeChild(botãoInicio);
  menuAssociação.appendChild(botãoInicio);
  opçõesMenu.parentElement.removeChild(opçõesMenu);
  menuAssociação.appendChild(opçõesMenu);
  opçõesMenu.style.marginLeft = "0";
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  associação.classList.remove('hidden-div');
  associação.classList.add('appear'); // efito de transição
  num = 3;
  console.log(`pagina-${num}`);
  if (num == 3) {
    botão1.style = "pointer-events: none";
    botão2.style = "pointer-events: none";
    botão3.style = "pointer-events: none";
    botão4.style = "pointer-events: none";
    botão5.style = "pointer-events: none";
    boxAssociação.classList.remove('hidden-div');
    boxAssociação.classList.add('appear');
  }
};

function questãoRespostaUnica() {
  // Limpa a tela inicial e exibe a próxima
  botãoInicio.classList.remove('hidden-div');
  botãoInicio.parentElement.removeChild(botãoInicio);
  menuRespostaUnica.appendChild(botãoInicio);
  opçõesMenu.parentElement.removeChild(opçõesMenu);
  menuRespostaUnica.appendChild(opçõesMenu);
  opçõesMenu.style.marginLeft = "0";
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  respostaUnica.classList.remove('hidden-div');
  respostaUnica.classList.add('appear'); // efito de transição
  num = 4;
  console.log(`pagina-${num}`);
  if (num == 4) {
    botão1.style = "pointer-events: none";
    botão2.style = "pointer-events: none";
    botão3.style = "pointer-events: none";
    botão4.style = "pointer-events: none";
    botão5.style = "pointer-events: none";
  }
};

function questãoMultiplas() {
  // Limpa a tela inicial e exibe a próxima
  botãoInicio.classList.remove('hidden-div');
  botãoInicio.parentElement.removeChild(botãoInicio);
  menuRespostasMultiplas.appendChild(botãoInicio);
  opçõesMenu.parentElement.removeChild(opçõesMenu);
  menuRespostasMultiplas.appendChild(opçõesMenu);
  opçõesMenu.style.marginLeft = "0";
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  multiplas.classList.remove('hidden-div');
  multiplas.classList.add('appear'); // efito de transição
  num = 5;
  console.log(`pagina-${num}`);
  if (num == 5) {
    botão1.style="pointer-events: none";
    botão2.style="pointer-events: none";
    botão3.style="pointer-events: none";
    botão4.style="pointer-events: none";
    botão5.style="pointer-events: none";
  }
};

function voltarMenu() {
  // Limpa a tela inicial e exibe a próxima
  if (num != 0) {
    if (num == 1) {
      asserção.classList.add('hidden-div');
      asserção.classList.add('disappear'); // efeito de transição 
    }
    if (num == 2) {
      lacuna.classList.add('hidden-div');
      lacuna.classList.add('disappear'); // efeito de transição
    }
    if (num == 3) {
      associação.classList.add('hidden-div');
      associação.classList.add('disappear'); // efeito de transição
    }
    if (num == 4) {
      respostaUnica.classList.add('hidden-div');
      respostaUnica.classList.add('disappear'); // efeito de transição
    }
    if (num == 5) {
      multiplas.classList.add('hidden-div');
      multiplas.classList.add('disappear'); // efeito de transição
    }
    if (num == 6) {
      boxPraticarAsserção.classList.add('hidden-div');
      boxPraticarAsserção.classList.add('desappear');
      botãoInicio.classList.add('hidden-div');
    }
    if (num == 7) {
      boxPraticarLacuna.classList.add('hidden-div');
      boxPraticarLacuna.classList.add('desappear');
      botãoInicio.classList.add('hidden-div');
    }
    if (num == 8) {
      boxPraticarAssociação.classList.add('hidden-div');
      boxPraticarAssociação.classList.add('desappear');
      botãoInicio.classList.add('hidden-div');
    }
  }
  menu.classList.remove('hidden-div');
  menu.classList.add('appear'); // efeito de transição
  opçõesMenu.parentElement.removeChild(opçõesMenu);
  box.appendChild(opçõesMenu);
  opçõesMenu.style.marginLeft = "85px";
  num = 0;
  console.log(`página-${num}`);
  if(num == 0) {
    botão1.style="pointer-events: auto";
    botão2.style="pointer-events: auto";
    botão3.style="pointer-events: auto";
    botão4.style="pointer-events: auto";
    botão5.style="pointer-events: auto";
  }
};

function vamosPraticarAsserção() {
  boxAsserção.classList.add('hidden-div');
  boxAsserção.classList.add('disappear');
  boxPraticarAsserção.classList.remove('hidden-div');
  boxPraticarAsserção.classList.add('apper');
  num = 6;
  console.log(`página-${num}`);
}

function voltarEstrategias(){
  boxPraticarAsserção.classList.add('hidden-div');
  boxPraticarAsserção.classList.add('disapper');
  boxAsserção.classList.remove('hidden-div');
  boxAsserção.classList.add('appear');
  num=1;
  console.log(`página-${num}`);
}

function vamosPraticarLacuna() {
  boxLacuna.classList.add('hidden-div');
  boxLacuna.classList.add('disappear');
  boxPraticarLacuna.classList.remove('hidden-div');
  boxPraticarLacuna.classList.add('apper');
  num = 7;
  console.log(`página-${num}`);
}

function voltarEstrategiasLacuna(){
  boxPraticarLacuna.classList.add('hidden-div');
  boxPraticarLacuna.classList.add('disapper');
  boxLacuna.classList.remove('hidden-div');
  boxLacuna.classList.add('appear');
  num=2;
  console.log(`página-${num}`);
}

function vamosPraticarAssociação() {
  boxAssociação.classList.add('hidden-div');
  boxAssociação.classList.add('disappear');
  boxPraticarAssociação.classList.remove('hidden-div');
  boxPraticarAssociação.classList.add('apper');
  num = 8;
  console.log(`página-${num}`);
}

function voltarEstrategiasAssociação(){
  boxPraticarAssociação.classList.add('hidden-div');
  boxPraticarAssociação.classList.add('disapper');
  boxAssociação.classList.remove('hidden-div');
  boxAssociação.classList.add('appear');
  num = 3;
  console.log(`página-${num}`);
}

//FUNÇÕES APARECER ESTRATÉGIAS ASSERÇÃO

function estrategia1Apper() {
  estrategia1.style.display = "block";
  sublinhadoRosa1.style.backgroundColor = "#FFB5FF"
}

function estrategia2Apper() {
  estrategia2.style.display = "block";
  sublinhadoRosa2.style.backgroundColor = "#FFB5FF"
}

function estrategia3Apper() {
  estrategia3.style.display = "block";
  sublinhadoRosa3.style.backgroundColor = "#FFB5FF"
}

function estrategia4Apper() {
  estrategia4.style.display = "block";
  sublinhadoRosa4.style.backgroundColor = "#FFB5FF"
}

function estrategia5Apper() {
  estrategia5.style.display = "block";
  sublinhadoRosa5.style.backgroundColor = "#FFB5FF"
  respostaAsserção.style.display = "block";
}

function sobreAsserção() {
  modalAsserção.style.display = "block";
  modalBackground.style.display = "block";
}

//FUNÇÕES APARECER ESTRATÉGIAS LACUNA

function estrategiaLacuna1Apper() {
  estrategiaLacuna1.style.display = "block";
}

function estrategiaLacuna2Apper() {
  estrategiaLacuna2.style.display = "block";
  sublinhadoAmarelo2.style.backgroundColor = "#F9FFB5"
}

function estrategiaLacuna3Apper() {
  estrategiaLacuna3.style.display = "block";
  sublinhadoAmarelo3.style.backgroundColor = "#F9FFB5"
}

function estrategiaLacuna4Apper() {
  estrategiaLacuna4.style.display = "block";
  sublinhadoAmarelo4.style.backgroundColor = "#F9FFB5"
}

function estrategiaLacuna5Apper() {
  estrategiaLacuna5.style.display = "block";
  sublinhadoAmarelo5.style.backgroundColor = "#F9FFB5"
  respostaLacuna.style.display = "block";
}

function sobreLacuna() {
  modalLacuna.style.display = "block";
  modalBackground.style.display = "block";
}

//FUNÇÕES APARECER ESTRATÉGIAS ASSOCIAÇÃO

function estrategiaAssociação1Apper() {
  estrategiaAssociação1.style.display = "block";
  sublinhadoVerde1.style.backgroundColor = "#B5FBB9"
}

function estrategiaAssociação2Apper() {
  estrategiaAssociação2.style.display = "block";
  sublinhadoVerde2.style.backgroundColor = "#B5FBB9"
}

function estrategiaAssociação3Apper() {
  estrategiaAssociação3.style.display = "block";
  sublinhadoVerde3.style.backgroundColor = "#B5FBB9"
}

function estrategiaAssociação4Apper() {
  estrategiaAssociação4.style.display = "block";
  sublinhadoVerde4.style.backgroundColor = "##B5FBB9"
}

function estrategiaAssociação5Apper() {
  estrategiaAssociação5.style.display = "block";
  sublinhadoVerde5.style.backgroundColor = "#B5FBB9"
  respostaAssociação.style.display = "block";
}

function sobreAssociação() {
  modalAssociação.style.display = "block";
  modalBackground.style.display = "block";
}

//FUNÇÕES APARECER RESPOSTA UNICA

function estrategiaAssociação1Apper() {
  estrategiaRespostaUnica1.style.display = "block";
  sublinhadoAzul1.style.backgroundColor = "#B5FBB9"
}

function estrategiaAssociação2Apper() {
  estrategiaRespostaUnica2.style.display = "block";
  sublinhadoAzul2.style.backgroundColor = "#B5FBB9"
}

function estrategiaAssociação3Apper() {
  estrategiaRespostaUnica3.style.display = "block";
  sublinhadoAzul3.style.backgroundColor = "#B5FBB9"
}

function estrategiaAssociação4Apper() {
  estrategiaRespostaUnica4.style.display = "block";
  sublinhadoAzul4.style.backgroundColor = "##B5FBB9"
}

function estrategiaAssociação5Apper() {
  estrategiaRespostaUnica5.style.display = "block";
  sublinhadoAzul5.style.backgroundColor = "#B5FBB9"
  respostaAssociação.style.display = "block";
}

function sobreRespostaUnica() {
  modalRespostaUnica.style.display = "block";
  modalBackground.style.display = "block";
}

window.onclick = function (event) {
  if (event.target === modalBackground) {
    modalAsserção.style.display = "none";
    modalLacuna.style.display = "none";
    modalAssociação.style.display = "none";
    modalRespostaUnica.style.display = "none";
    modalBackground.style.display = "none";
  }
}

//Variáveis


let alternativa1lacuna = document.getElementById('alternativa-1-lacuna');
let alternativa2lacuna = document.getElementById('alternativa-2-lacuna');
let alternativa3lacuna = document.getElementById('alternativa-3-lacuna');
let alternativa4lacuna = document.getElementById('alternativa-4-lacuna');
let alternativa5lacuna = document.getElementById('alternativa-5-lacuna');
let respostaPraticarAsserção = document.getElementById('resposta-praticar-asserção');
let checkbox1 = document.getElementById('checkbox-1-lacuna');
let checkbox2 = document.getElementById('checkbox-2-lacuna');
let checkbox3 = document.getElementById('checkbox-3-lacuna');
let checkbox4 = document.getElementById('checkbox-4-lacuna');
let checkbox5 = document.getElementById('checkbox-5-lacuna');
let alternativa1asserção = document.getElementById('alternativa-1-asserção');
let alternativa2asserção = document.getElementById('alternativa-2-asserção');
let alternativa3asserção = document.getElementById('alternativa-3-asserção');
let alternativa4asserção = document.getElementById('alternativa-4-asserção');
let alternativa5asserção = document.getElementById('alternativa-5-asserção');
let respostaPraticarLacuna = document.getElementById('resposta-praticar-lacuna');
let respostaPraticarAssociação = document.getElementById('resposta-praticar-associação');
let alternativa1associação = document.getElementById('alternativa-1-associação');
let alternativa2associação = document.getElementById('alternativa-2-associação');
let alternativa3associação = document.getElementById('alternativa-3-associação');
let alternativa4associação = document.getElementById('alternativa-4-associação');
let alternativa5associação = document.getElementById('alternativa-5-associação');


// FUNÇÕES CHECKBOX VAMOS PRATICAR ASSERÇÕES

function checkboxAsserção1 (checkbox){
  if (checkbox.checked){
    respostaPraticarAsserção.classList.remove('hidden-div');
    alternativa1asserção.style.backgroundColor = "#FFB5FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAsserção2 (checkbox){
  if (checkbox.checked){
    respostaPraticarAsserção.classList.remove('hidden-div');
    alternativa2asserção.style.backgroundColor = "#FFB5FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAsserção3 (checkbox){
  if (checkbox.checked){
    respostaPraticarAsserção.classList.remove('hidden-div');
    alternativa3asserção.style.backgroundColor = "#FFB5FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAsserção4 (checkbox){
  if (checkbox.checked){
    respostaPraticarAsserção.classList.remove('hidden-div');
    alternativa4asserção.style.backgroundColor = "#FFB5FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAsserção5 (checkbox){
  if (checkbox.checked){
    respostaPraticarAsserção.classList.remove('hidden-div');
    alternativa5asserção.style.backgroundColor = "#FFB5FF"
    console.log('ESTOU CHECADO');
  }
}

// FUNÇÕES CHECKBOX VAMOS PRATICAR LACUNA

function checkboxLacuna1 (checkbox){
  if (checkbox.checked){
    respostaPraticarLacuna.classList.remove('hidden-div');
    alternativa1lacuna.style.backgroundColor = "#F9FFB5"
    console.log('ESTOU CHECADO');
  }
}

function checkboxLacuna2 (checkbox){
  if (checkbox.checked){
    respostaPraticarLacuna.classList.remove('hidden-div');
    alternativa2lacuna.style.backgroundColor = "#F9FFB5"
    console.log('ESTOU CHECADO');
  }
}

function checkboxLacuna3 (checkbox){
  if (checkbox.checked){
    respostaPraticarLacuna.classList.remove('hidden-div');
    alternativa3lacuna.style.backgroundColor = "#F9FFB5"
    console.log('ESTOU CHECADO');
  }
}

function checkboxLacuna4 (checkbox){
  if (checkbox.checked){
    respostaPraticarLacuna.classList.remove('hidden-div');
    alternativa4lacuna.style.backgroundColor = "#F9FFB5"
    console.log('ESTOU CHECADO');
  }
}

function checkboxLacuna5 (checkbox){
  if (checkbox.checked){
    respostaPraticarLacuna.classList.remove('hidden-div');
    alternativa5lacuna.style.backgroundColor = "#F9FFB5"
    console.log('ESTOU CHECADO');
  }
}

// FUNÇÕES CHECKBOX VAMOS PRATICAR ASSOCIAÇÃO

function checkboxAssociação1 (checkbox){
  if (checkbox.checked){
    respostaPraticarAssociação.classList.remove('hidden-div');
    alternativa1associação.style.backgroundColor = "#B5FBB9"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAssociação2 (checkbox){
  if (checkbox.checked){
    respostaPraticarAssociação.classList.remove('hidden-div');
    alternativa2associação.style.backgroundColor = "#B5FBB9"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAssociação3 (checkbox){
  if (checkbox.checked){
    respostaPraticarAssociação.classList.remove('hidden-div');
    alternativa3associação.style.backgroundColor = "#B5FBB9"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAssociação4 (checkbox){
  if (checkbox.checked){
    respostaPraticarAssociação.classList.remove('hidden-div');
    alternativa4associação.style.backgroundColor = "#B5FBB9"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAssociação5 (checkbox){
  if (checkbox.checked){
    respostaPraticarAssociação.classList.remove('hidden-div');
    alternativa5associação.style.backgroundColor = "#B5FBB9"
    console.log('ESTOU CHECADO');
  }
}