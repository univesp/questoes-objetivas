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
  let data;
  let iniciar = document.getElementById('iniciar');
  let home = document.getElementById('home');
  let menu = document.getElementById('menu');

  //Botão inicial
  document.getElementById('iniciar').addEventListener('click', function () {
    // Limpa a tela inicial e exibe a próxima
    home.classList.add('hidden-div');
    home.classList.add('disappear'); // efeito de transição
    menu.classList.remove('hidden-div');
    menu.classList.add('appear'); // efito de transição
  });

})

let jsonData;

// Função para carregar o JSON
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o JSON');
    }
    return response.json(); // Converte a resposta em JSON
  })
  .then(data => {
    jsonData = data; // Armazena os dados em uma variável
  })
  .catch(error => {
    console.error('Erro:', error);
  });

function mostrarConteudo(id) {
  const container = document.getElementById('meuContainer');
  container.innerHTML = ''; // Limpa o conteúdo anterior

  const conteudo = jsonData.find(item => item.id === id);
  if (conteudo) {
    const titulo = document.createElement('h'); 
    titulo.textContent = conteudo.titulo;         
    titulo.className = conteudo.classeTitulo;        
    container.appendChild(titulo); 
    const paragrafo = document.createElement('p'); // Cria um novo parágrafo
    paragrafo.textContent = conteudo.paragrafo;         // Adiciona o texto
    paragrafo.className = conteudo.classeParagrafo;          // Adiciona a classe
    container.appendChild(paragrafo);                // Adiciona ao container
    const paragrafo2 = document.createElement('p'); 
    paragrafo2.textContent = conteudo.paragrafo2;         
    paragrafo2.className = conteudo.classeParagrafo2;         
    container.appendChild(paragrafo2);                
  }
}

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
function convertRespostaunica() {
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

//FUNÇÕES OPÇÕES QUESTÕES MENU

//Opção de asserção
function questãoAsserção() {
  // Limpa a tela inicial e exibe a próxima
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  asserção.classList.remove('hidden-div');
  asserção.classList.add('appear'); // efito de transição
  mostrarConteudo('secao1');
};

//Opção de lacuna
function questãoLacuna() {
  // Limpa a tela inicial e exibe a próxima
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  lacuna.classList.remove('hidden-div');
  lacuna.classList.add('appear'); // efito de transição
  mostrarConteudo('secao2');
};

//Opção de lacuna
function questãoAssociação() {
  // Limpa a tela inicial e exibe a próxima
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  associação.classList.remove('hidden-div');
  associação.classList.add('appear'); // efito de transição
};

function questãoRespostaUnica() {
  // Limpa a tela inicial e exibe a próxima
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  respostaUnica.classList.remove('hidden-div');
  respostaUnica.classList.add('appear'); // efito de transição
};

function questãoMultiplas() {
  // Limpa a tela inicial e exibe a próxima
  menu.classList.add('hidden-div');
  menu.classList.add('disappear'); // efeito de transição
  multiplas.classList.remove('hidden-div');
  multiplas.classList.add('appear'); // efito de transição
};