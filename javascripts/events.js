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
  });

})

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
const botãoInicio = document.getElementById('botão-inicio');
const opçõesMenu = document.getElementById('opções-menu');
const menuAsserção = document.getElementById('menu-asserção');
const menuLacuna = document.getElementById('menu-lacuna');
const menuAssociação = document.getElementById('menu-associação');
const menuRespostaUnica = document.getElementById('menu-resposta-unica');
const menuRespostasMultiplas = document.getElementById('menu-respostas-multiplas');
const praticarAsserção = document.getElementById('vamos-praticar');

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


//FUNÇÕES OPÇÕES QUESTÕES MENU

//Opção de asserção
function questãoAsserção() {
  // Limpa a tela inicial e exibe a próxima
  botãoInicio.parentElement.removeChild(botãoInicio);
  menuAsserção.appendChild(botãoInicio);
  opçõesMenu.parentElement.removeChild(opçõesMenu);
  menuAsserção.appendChild(opçõesMenu);
  opçõesMenu.style.marginLeft = "0";
  if (num != 0) { //REMOVER AQUI SE FOR SOLICITADO PARA NÃO TER COMO ACESSAR OUTROS TIPOS DE QUESTÃO FORA DO MENU!
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
  }
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  asserção.classList.remove('hidden-div');
  asserção.classList.add('appear'); // efito de transição
  num = 1;
  console.log(`pagina-${num}`);
};

//Opção de lacuna
function questãoLacuna() {
  // Limpa a tela inicial e exibe a próxima
  botãoInicio.parentElement.removeChild(botãoInicio);
  menuLacuna.appendChild(botãoInicio);
  opçõesMenu.parentElement.removeChild(opçõesMenu);
  menuLacuna.appendChild(opçõesMenu);
  opçõesMenu.style.marginLeft = "0";
  if (num != 0) {
    if (num == 1) {
      asserção.classList.add('hidden-div');
      asserção.classList.add('disappear'); // efeito de transição 
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
  }
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  lacuna.classList.remove('hidden-div');
  lacuna.classList.add('appear'); // efito de transição
  num = 2;
  console.log(`pagina-${num}`);
};

//Opção de lacuna
function questãoAssociação() {
  // Limpa a tela inicial e exibe a próxima
  botãoInicio.parentElement.removeChild(botãoInicio);
  menuAssociação.appendChild(botãoInicio);
  opçõesMenu.parentElement.removeChild(opçõesMenu);
  menuAssociação.appendChild(opçõesMenu);
  opçõesMenu.style.marginLeft = "0";
  if (num != 0) {
    if (num == 1) {
      asserção.classList.add('hidden-div');
      asserção.classList.add('disappear'); // efeito de transição 
    }
    if (num == 2) {
      lacuna.classList.add('hidden-div');
      lacuna.classList.add('disappear'); // efeito de transição
    }
    if (num == 4) {
      respostaUnica.classList.add('hidden-div');
      respostaUnica.classList.add('disappear'); // efeito de transição
    }
    if (num == 5) {
      multiplas.classList.add('hidden-div');
      multiplas.classList.add('disappear'); // efeito de transição
    }
  }
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  associação.classList.remove('hidden-div');
  associação.classList.add('appear'); // efito de transição
  num = 3;
  console.log(`pagina-${num}`);
};

function questãoRespostaUnica() {
  // Limpa a tela inicial e exibe a próxima
  botãoInicio.parentElement.removeChild(botãoInicio);
  menuRespostaUnica.appendChild(botãoInicio);
  opçõesMenu.parentElement.removeChild(opçõesMenu);
  menuRespostaUnica.appendChild(opçõesMenu);
  opçõesMenu.style.marginLeft = "0";
  if (num != 0) {
    if (num == 1) {
      asserção.classList.add('hidden-div');
      asserção.classList.add('disappear'); // efeito de transição 
    }
    if (num == 3) {
      associação.classList.add('hidden-div');
      associação.classList.add('disappear'); // efeito de transição
    }
    if (num == 2) {
      lacuna.classList.add('hidden-div');
      lacuna.classList.add('disappear'); // efeito de transição
    }
    if (num == 5) {
      multiplas.classList.add('hidden-div');
      multiplas.classList.add('disappear'); // efeito de transição
    }
  }
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  respostaUnica.classList.remove('hidden-div');
  respostaUnica.classList.add('appear'); // efito de transição
  num = 4;
  console.log(`pagina-${num}`);
};

function questãoMultiplas() {
  // Limpa a tela inicial e exibe a próxima
  botãoInicio.parentElement.removeChild(botãoInicio);
  menuRespostasMultiplas.appendChild(botãoInicio);
  opçõesMenu.parentElement.removeChild(opçõesMenu);
  menuRespostasMultiplas.appendChild(opçõesMenu);
  opçõesMenu.style.marginLeft = "0";
  if (num != 0) {
    if (num == 1) {
      asserção.classList.add('hidden-div');
      asserção.classList.add('disappear'); // efeito de transição 
    }
    if (num == 3) {
      associação.classList.add('hidden-div');
      associação.classList.add('disappear'); // efeito de transição
    }
    if (num == 4) {
      respostaUnica.classList.add('hidden-div');
      respostaUnica.classList.add('disappear'); // efeito de transição
    }
    if (num == 2) {
      lacuna.classList.add('hidden-div');
      lacuna.classList.add('disappear'); // efeito de transição
    }
  }
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  multiplas.classList.remove('hidden-div');
  multiplas.classList.add('appear'); // efito de transição
  num = 5;
  console.log(`pagina-${num}`);
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
  }
  menu.classList.remove('hidden-div');
  menu.classList.add('appear'); // efeito de transição
  opçõesMenu.parentElement.removeChild(opçõesMenu);
  box.appendChild(opçõesMenu);
  opçõesMenu.style.marginLeft = "85px";
};

function vamosPraticarAsserção(){
  boxAsserção.classList.add('hidden-div');
  boxAsserção.classList.add('disappear');
  boxPraticarAsserção.classList.remove('hidden-div');
  boxPraticarAsserção.classList.add('apper');
}

//FUNÇÕES APARECER ESTRATÉGIAS

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

window.onclick = function (event) {
  if (event.target === modalBackground) {
    modalAsserção.style.display = "none";
    modalBackground.style.display = "none";
  }
}