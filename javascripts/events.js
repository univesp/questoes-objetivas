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

})

let home = document.getElementById('home');
let menu = document.getElementById('menu');

//BOTÃO INICIAL "VAMOS PRATICAR"

document.getElementById('iniciar').addEventListener('click', function () {
  // Limpa a tela inicial e exibe a próxima
  home.classList.add('hidden-div');
  home.classList.add('disappear'); // efeito de transição
  menu.classList.remove('hidden-div');
  menu.classList.add('appear'); // efito de transição
  num = 0; // Atualiza o número da página
  console.log(`página-${num}`);
});

var num; //Variável para contar as páginas

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
let respostaRespostaUnica = document.getElementById('resposta-resposta-unica');
let praticarRespostaUnica1 = document.getElementById('img-praticar-resposta-unica');
let praticarRespostaUnica2 = document.getElementById('img-praticar-resposta-unica-invertido');
let boxRespostaUnica = document.getElementById('box-resposta-unica');
let boxPraticarRespostaUnica = document.getElementById('box-praticar-resposta-unica')
let modalRespostasMultiplas = document.getElementById('modal-respostas-multiplas');
let estrategiaRespostasMultiplas1 = document.getElementById('estratégia-respostas-multiplas-1');
let estrategiaRespostasMultiplas2 = document.getElementById('estratégia-respostas-multiplas-2');
let estrategiaRespostasMultiplas3 = document.getElementById('estratégia-respostas-multiplas-3');
let estrategiaRespostasMultiplas4 = document.getElementById('estratégia-respostas-multiplas-4');
let estrategiaRespostasMultiplas5 = document.getElementById('estratégia-respostas-multiplas-5');
let sublinhadoRoxo1 = document.getElementById('sublinhado-roxo-1');
let sublinhadoRoxo2 = document.getElementById('sublinhado-roxo-2');
let sublinhadoRoxo3 = document.getElementById('lista-respostas-multiplas');
let sublinhadoRoxo4 = document.getElementById('sublinhado-roxo-4');
let sublinhadoRoxo5 = document.getElementById('sublinhado-roxo-5');
let praticarRespostasMultiplas1 = document.getElementById('img-praticar-respostas-multiplas');
let praticarRespostasMultiplas2 = document.getElementById('img-praticar-respostas-multiplas-invertido');
let respostaRespostasMultiplas = document.getElementById('resposta-respostas-multiplas');
let boxRespostasMultiplas = document.getElementById('box-respostas-multiplas');
let boxPraticarRespostasMultiplas = document.getElementById('box-praticar-respostas-multiplas')

//INVERTE A IMAGEM DOS TIPOS DE QUESTÃO

//Função para inverter imagem menu ao passar o mouse
function invertAsserção() {
  const mediaDesktop = window.matchMedia("(min-width: 1030px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      asserção1.classList.add('hidden-div');
      asserção2.classList.remove('hidden-div');
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para converter a imagem ao passar o mouse
function convertAsserção() {
  const mediaDesktop = window.matchMedia("(min-width: 1030px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      asserção1.classList.remove('hidden-div');
      asserção2.classList.add('hidden-div');
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para inverter imagem menu ao passar o mouse
function invertLacuna() {
  const mediaDesktop = window.matchMedia("(min-width: 1030px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      lacuna1.classList.add('hidden-div');
      lacuna2.classList.remove('hidden-div');
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para converter a imagem ao passar o mouse
function convertLacuna() {
  const mediaDesktop = window.matchMedia("(min-width: 1030px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      lacuna1.classList.remove('hidden-div');
      lacuna2.classList.add('hidden-div');
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para inverter imagem menu ao passar o mouse
function invertAssociação() {
  const mediaDesktop = window.matchMedia("(min-width: 1030px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      associação1.classList.add('hidden-div');
      associação2.classList.remove('hidden-div');
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para converter a imagem ao passar o mouse
function convertAssociação() {
  const mediaDesktop = window.matchMedia("(min-width: 1030px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      associação1.classList.remove('hidden-div');
      associação2.classList.add('hidden-div');
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para inverter imagem menu ao passar o mouse
function invertRespostaUnica() {
  const mediaDesktop = window.matchMedia("(min-width: 1030px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      respostaUnica1.classList.add('hidden-div');
      respostaUnica2.classList.remove('hidden-div');
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para converter a imagem ao passar o mouse
function convertRespostaUnica() {
  const mediaDesktop = window.matchMedia("(min-width: 1030px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      respostaUnica1.classList.remove('hidden-div');
      respostaUnica2.classList.add('hidden-div');
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para inverter imagem menu ao passar o mouse
function invertMultiplas() {
  const mediaDesktop = window.matchMedia("(min-width: 1030px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      multiplas1.classList.add('hidden-div');
      multiplas2.classList.remove('hidden-div');
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para converter a imagem ao passar o mouse
function convertMultiplas() {
  const mediaDesktop = window.matchMedia("(min-width: 1030px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      multiplas1.classList.remove('hidden-div');
      multiplas2.classList.add('hidden-div');
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para inverter imagem menu ao passar o mouse
function invertPraticar() {
  const mediaDesktop = window.matchMedia("(min-width: 1024px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      praticar1.style.display = "none";
      praticar2.style.display = "block";
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para converter a imagem ao passar o mouse
function convertPraticar() {
  const mediaDesktop = window.matchMedia("(min-width: 1024px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      praticar1.style.display = "block";
      praticar2.style.display = "none";
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para inverter imagem menu ao passar o mouse
function invertInicio() {
  const mediaDesktop = window.matchMedia("(min-width: 1024px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      inicio1.style.display = "none";
      inicio2.style.display = "block";
      text.style.color = "#343434";
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para converter a imagem ao passar o mouse
function convertInicio() {
  const mediaDesktop = window.matchMedia("(min-width: 1024px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      inicio1.style.display = "block";
      inicio2.style.display = "none";
      text.style.color = "#ffffff";
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para inverter imagem menu ao passar o mouse
function invertPraticarLacuna() {
  const mediaDesktop = window.matchMedia("(min-width: 1024px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      praticarLacuna1.style.display = "none";
      praticarLacuna2.style.display = "block";
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para converter a imagem ao passar o mouse
function convertPraticarLacuna() {
  const mediaDesktop = window.matchMedia("(min-width: 1024px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      praticarLacuna1.style.display = "block";
      praticarLacuna2.style.display = "none";
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para inverter imagem menu ao passar o mouse
function invertPraticarAssociação() {
  const mediaDesktop = window.matchMedia("(min-width: 1024px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      praticarAssociação1.style.display = "none";
      praticarAssociação2.style.display = "block";
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para converter a imagem ao passar o mouse
function convertPraticarAssociação() {
  const mediaDesktop = window.matchMedia("(min-width: 1024px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      praticarAssociação1.style.display = "block";
      praticarAssociação2.style.display = "none";
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para inverter imagem menu ao passar o mouse
function invertPraticarRespostaUnica() {
  const mediaDesktop = window.matchMedia("(min-width: 1024px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      praticarRespostaUnica1.style.display = "none";
      praticarRespostaUnica2.style.display = "block";
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para converter a imagem ao passar o mouse
function convertPraticarRespostaUnica() {
  const mediaDesktop = window.matchMedia("(min-width: 1024px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      praticarRespostaUnica1.style.display = "block";
      praticarRespostaUnica2.style.display = "none";
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para inverter imagem menu ao passar o mouse
function invertPraticarRespostasMultiplas() {
  const mediaDesktop = window.matchMedia("(min-width: 1024px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      praticarRespostasMultiplas1.style.display = "none";
      praticarRespostasMultiplas2.style.display = "block";
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}

//Função para converter a imagem ao passar o mouse
function convertPraticarRespostasMultiplas() {
  const mediaDesktop = window.matchMedia("(min-width: 1024px)");

  function adjustLayout() {
    if (mediaDesktop.matches) {
      // Ajuste para dispositivos móveis
      praticarRespostasMultiplas1.style.display = "block";
      praticarRespostasMultiplas2.style.display = "none";
    }
  }
  mediaDesktop.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
}



//FUNÇÕES OPÇÕES QUESTÕES MENU

//Opção de asserção
function questãoAsserção() {
  // Limpa a tela inicial e exibe a próxima
  botãoInicio.classList.remove('hidden-div');
  botãoInicio.parentElement.removeChild(botãoInicio); //Remove o botão do elemento pai atual
  menuAsserção.appendChild(botãoInicio); //Adiciona o botão a questão atual
  opçõesMenu.parentElement.removeChild(opçõesMenu); //Remove o menu do elemento pai atual
  menuAsserção.appendChild(opçõesMenu); // Adiciona o menu a questão atual
  opçõesMenu.style.marginLeft = "0"; // Remove a margem existente na tela de menu
  menu.classList.add('hidden-div'); // Oculta o menu
  menu.classList.add('disappear'); // efeito de transição
  asserção.classList.remove('hidden-div'); // Exibe o conteúdo de asserção
  asserção.classList.add('appear'); // efito de transição
  num = 1; // Número da página atual
  console.log(`pagina-${num}`);
  if (num == 1) {
    // Desativa a função de clicar na opção da questão atual e mantém as outras
    botão1.style = "pointer-events: none";
    botão2.style = "pointer-events: auto";
    botão3.style = "pointer-events: auto";
    botão4.style = "pointer-events: auto";
    botão5.style = "pointer-events: auto";
    // Força o ocultamento de todas as página e exibe a página da questão acessada
    boxAsserção.classList.remove('hidden-div');
    boxAsserção.classList.add('appear');
    boxLacuna.classList.add('hidden-div');
    boxLacuna.classList.add('disappear');
    boxAssociação.classList.add('hidden-div');
    boxAssociação.classList.add('disappear');
    boxRespostaUnica.classList.add('hidden-div');
    boxRespostaUnica.classList.add('disappear');
    boxRespostasMultiplas.classList.add('hidden-div');
    boxRespostasMultiplas.classList.add('disappear');
    boxPraticarLacuna.classList.add('hidden-div');
    boxPraticarLacuna.classList.add('disappear');
    boxPraticarAssociação.classList.add('hidden-div');
    boxPraticarAssociação.classList.add('disappear');
    boxPraticarRespostaUnica.classList.add('hidden-div');
    boxPraticarRespostaUnica.classList.add('disappear');
    boxPraticarRespostasMultiplas.classList.add('hidden-div');
    boxPraticarRespostasMultiplas.classList.add('disappear');

    var Text1 = document.getElementById("text-1");
    var Text2 = document.getElementById("text-2");
    var Text3 = document.getElementById("text-3");
    var Text4 = document.getElementById("text-4");
    var Text5 = document.getElementById("text-5");
    var Botao1 = document.getElementById("botão-1");
    var Botao2 = document.getElementById("botão-2");
    var Botao3 = document.getElementById("botão-3");
    var Botao4 = document.getElementById("botão-4");
    var Botao5 = document.getElementById("botão-5");
    var Botao0 = document.getElementById("botão-0");
    var opçãoMenu = document.getElementById("opções-menu");

    const mediaMobile = window.matchMedia("(max-width: 1024px)");

    function adjustLayout() {
      if (mediaMobile.matches) {
        // Ajuste para dispositivos móveis
        Text1.style.display = "none";
        Botao1.style.width = "70px";
        Botao1.style.height = "70px";
        Botao1.style.padding = "10px";
        Text2.style.display = "none";
        Botao2.style.width = "70px";
        Botao2.style.height = "70px";
        Botao2.style.padding = "10px";
        Text3.style.display = "none";
        Botao3.style.width = "70px";
        Botao3.style.height = "70px";
        Botao3.style.padding = "10px";
        Text4.style.display = "none";
        Botao4.style.width = "70px";
        Botao4.style.height = "70px";
        Botao4.style.padding = "10px";
        Text5.style.display = "none";
        Botao5.style.width = "70px";
        Botao5.style.height = "70px";
        Botao5.style.padding = "10px";
        Botao2.style.borderRight = "none";
        Botao2.style.borderTop = "none";
        Botao1.style.borderTop = "none";
        Botao4.style.borderRight = "none";
        Botao0.style.borderRight = "3px solid #343434"

        const mediaTablet = window.matchMedia("(max-width:1024px) and (min-width:1024px)");
        const mediaIpadMini = window.matchMedia("(max-width:768px) and (min-width:768px)");
        const mediaIpadAir = window.matchMedia("(max-width:820px) and (min-width:820px)");
        const mediaSurfacePro7 = window.matchMedia("(max-width:912px) and (min-width:912px)");
        const mediaAsusFold = window.matchMedia("(max-width:853px) and (min-width:853px)");
        if (mediaTablet.matches) {
          opçãoMenu.style.marginLeft = "350px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaIpadMini.matches) {
          opçãoMenu.style.marginLeft = "222px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaIpadAir.matches) {
          opçãoMenu.style.marginLeft = "248px";
          opçãoMenu.style.left = "0%";
        }
        else if (mediaSurfacePro7.matches) {
          opçãoMenu.style.marginLeft = "294px";
          opçãoMenu.style.left = "0%";
        }
        else if (mediaAsusFold.matches) {
          opçãoMenu.style.marginLeft = "264px";
          opçãoMenu.style.left = "0%";
        }
        else {
          opçãoMenu.style.marginLeft = "5px";
          opçãoMenu.style.left = "50%";
          opçãoMenu.style.transform = "translateX(-50%)"
        }
      }
    }
    mediaMobile.addEventListener('change', adjustLayout);

    // Chama a função inicialmente
    adjustLayout();
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
    botão1.style = "pointer-events: auto";
    botão2.style = "pointer-events: none";
    botão3.style = "pointer-events: auto";
    botão4.style = "pointer-events: auto";
    botão5.style = "pointer-events: auto";
    boxLacuna.classList.remove('hidden-div');
    boxLacuna.classList.add('appear');
    boxAsserção.classList.add('hidden-div');
    boxAsserção.classList.add('disappear');
    boxAssociação.classList.add('hidden-div');
    boxAssociação.classList.add('disappear');
    boxRespostaUnica.classList.add('hidden-div');
    boxRespostaUnica.classList.add('disappear');
    boxRespostasMultiplas.classList.add('hidden-div');
    boxRespostasMultiplas.classList.add('disappear');
    boxPraticarAsserção.classList.add('hidden-div');
    boxPraticarAsserção.classList.add('disappear');
    boxPraticarAssociação.classList.add('hidden-div');
    boxPraticarAssociação.classList.add('disappear');
    boxPraticarRespostaUnica.classList.add('hidden-div');
    boxPraticarRespostaUnica.classList.add('disappear');
    boxPraticarRespostasMultiplas.classList.add('hidden-div');
    boxPraticarRespostasMultiplas.classList.add('disappear');

    var Text1 = document.getElementById("text-1");
    var Text2 = document.getElementById("text-2");
    var Text3 = document.getElementById("text-3");
    var Text4 = document.getElementById("text-4");
    var Text5 = document.getElementById("text-5");
    var Botao1 = document.getElementById("botão-1");
    var Botao2 = document.getElementById("botão-2");
    var Botao3 = document.getElementById("botão-3");
    var Botao4 = document.getElementById("botão-4");
    var Botao5 = document.getElementById("botão-5");
    var Botao0 = document.getElementById("botão-0");
    var opçãoMenu = document.getElementById("opções-menu");

    const mediaMobile = window.matchMedia("(max-width: 1024px)");

    function adjustLayout() {
      if (mediaMobile.matches) {
        // Ajuste para dispositivos móveis
        Text1.style.display = "none";
        Botao1.style.width = "70px";
        Botao1.style.height = "70px";
        Botao1.style.padding = "10px";
        Text2.style.display = "none";
        Botao2.style.width = "70px";
        Botao2.style.height = "70px";
        Botao2.style.padding = "10px";
        Text3.style.display = "none";
        Botao3.style.width = "70px";
        Botao3.style.height = "70px";
        Botao3.style.padding = "10px";
        Text4.style.display = "none";
        Botao4.style.width = "70px";
        Botao4.style.height = "70px";
        Botao4.style.padding = "10px";
        Text5.style.display = "none";
        Botao5.style.width = "70px";
        Botao5.style.height = "70px";
        Botao5.style.padding = "10px";
        Botao2.style.borderRight = "none";
        Botao2.style.borderTop = "none";
        Botao1.style.borderTop = "none";
        Botao4.style.borderRight = "none";
        Botao0.style.borderRight = "3px solid #343434"
        const mediaTablet = window.matchMedia("(max-width:1024px) and (min-width:1024px)");
        const mediaIpadMini = window.matchMedia("(max-width:768px) and (min-width:768px)");
        const mediaIpadAir = window.matchMedia("(max-width:820px) and (min-width:820px)");
        const mediaSurfacePro7 = window.matchMedia("(max-width:912px) and (min-width:912px)");
        const mediaAsusFold = window.matchMedia("(max-width:853px) and (min-width:853px)");
        if (mediaTablet.matches) {
          opçãoMenu.style.marginLeft = "350px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaIpadMini.matches) {
          opçãoMenu.style.marginLeft = "222px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaIpadAir.matches) {
          opçãoMenu.style.marginLeft = "248px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaSurfacePro7.matches) {
          opçãoMenu.style.marginLeft = "294px";
          opçãoMenu.style.left = "0%";
        }
        else if (mediaAsusFold.matches) {
          opçãoMenu.style.marginLeft = "264px";
          opçãoMenu.style.left = "0%";
        }
        else {
          opçãoMenu.style.marginLeft = "5px";
          opçãoMenu.style.left = "50%";
          opçãoMenu.style.transform = "translateX(-50%)"
        }
      }
    }
    mediaMobile.addEventListener('change', adjustLayout);

    // Chama a função inicialmente
    adjustLayout();
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
    botão1.style = "pointer-events: auto";
    botão2.style = "pointer-events: auto";
    botão3.style = "pointer-events: none";
    botão4.style = "pointer-events: auto";
    botão5.style = "pointer-events: auto";
    boxAssociação.classList.remove('hidden-div');
    boxAssociação.classList.add('appear');
    boxLacuna.classList.add('hidden-div');
    boxLacuna.classList.add('disappear');
    boxAsserção.classList.add('hidden-div');
    boxAsserção.classList.add('disappear');
    boxRespostaUnica.classList.add('hidden-div');
    boxRespostaUnica.classList.add('disappear');
    boxRespostasMultiplas.classList.add('hidden-div');
    boxRespostasMultiplas.classList.add('disappear');
    boxPraticarLacuna.classList.add('hidden-div');
    boxPraticarLacuna.classList.add('disappear');
    boxPraticarAsserção.classList.add('hidden-div');
    boxPraticarAsserção.classList.add('disappear');
    boxPraticarRespostaUnica.classList.add('hidden-div');
    boxPraticarRespostaUnica.classList.add('disappear');
    boxPraticarRespostasMultiplas.classList.add('hidden-div');
    boxPraticarRespostasMultiplas.classList.add('disappear');

    var Text1 = document.getElementById("text-1");
    var Text2 = document.getElementById("text-2");
    var Text3 = document.getElementById("text-3");
    var Text4 = document.getElementById("text-4");
    var Text5 = document.getElementById("text-5");
    var Botao1 = document.getElementById("botão-1");
    var Botao2 = document.getElementById("botão-2");
    var Botao3 = document.getElementById("botão-3");
    var Botao4 = document.getElementById("botão-4");
    var Botao5 = document.getElementById("botão-5");
    var Botao0 = document.getElementById("botão-0");
    var opçãoMenu = document.getElementById("opções-menu");

    const mediaMobile = window.matchMedia("(max-width: 1024px)");

    function adjustLayout() {
      if (mediaMobile.matches) {
        // Ajuste para dispositivos móveis
        Text1.style.display = "none";
        Botao1.style.width = "70px";
        Botao1.style.height = "70px";
        Botao1.style.padding = "10px";
        Text2.style.display = "none";
        Botao2.style.width = "70px";
        Botao2.style.height = "70px";
        Botao2.style.padding = "10px";
        Text3.style.display = "none";
        Botao3.style.width = "70px";
        Botao3.style.height = "70px";
        Botao3.style.padding = "10px";
        Text4.style.display = "none";
        Botao4.style.width = "70px";
        Botao4.style.height = "70px";
        Botao4.style.padding = "10px";
        Text5.style.display = "none";
        Botao5.style.width = "70px";
        Botao5.style.height = "70px";
        Botao5.style.padding = "10px";
        Botao2.style.borderRight = "none";
        Botao2.style.borderTop = "none";
        Botao1.style.borderTop = "none";
        Botao4.style.borderRight = "none";
        Botao0.style.borderRight = "3px solid #343434"
        const mediaTablet = window.matchMedia("(max-width:1024px) and (min-width:1024px)");
        const mediaIpadMini = window.matchMedia("(max-width:768px) and (min-width:768px)");
        const mediaIpadAir = window.matchMedia("(max-width:820px) and (min-width:820px)");
        const mediaSurfacePro7 = window.matchMedia("(max-width:912px) and (min-width:912px)");
        const mediaAsusFold = window.matchMedia("(max-width:853px) and (min-width:853px)");
        if (mediaTablet.matches) {
          opçãoMenu.style.marginLeft = "350px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaIpadMini.matches) {
          opçãoMenu.style.marginLeft = "222px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaIpadAir.matches) {
          opçãoMenu.style.marginLeft = "248px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaSurfacePro7.matches) {
          opçãoMenu.style.marginLeft = "294px";
          opçãoMenu.style.left = "0%";
        }
        else if (mediaAsusFold.matches) {
          opçãoMenu.style.marginLeft = "264px";
          opçãoMenu.style.left = "0%";
        }
        else {
          opçãoMenu.style.marginLeft = "5px";
          opçãoMenu.style.left = "50%";
          opçãoMenu.style.transform = "translateX(-50%)"
        }
      }
    }
    mediaMobile.addEventListener('change', adjustLayout);

    // Chama a função inicialmente
    adjustLayout();
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
    botão1.style = "pointer-events: auto";
    botão2.style = "pointer-events: auto";
    botão3.style = "pointer-events: auto";
    botão4.style = "pointer-events: none";
    botão5.style = "pointer-events: auto";
    boxRespostaUnica.classList.remove('hidden-div');
    boxRespostaUnica.classList.add('appear');
    boxLacuna.classList.add('hidden-div');
    boxLacuna.classList.remove('appear');
    boxAsserção.classList.add('hidden-div');
    boxAsserção.classList.add('disappear');
    boxAssociação.classList.add('hidden-div');
    boxAssociação.classList.add('disappear');
    boxRespostasMultiplas.classList.add('hidden-div');
    boxRespostasMultiplas.classList.add('disappear');
    boxPraticarLacuna.classList.add('hidden-div');
    boxPraticarLacuna.classList.remove('appear');
    boxPraticarAsserção.classList.add('hidden-div');
    boxPraticarAsserção.classList.add('disappear');
    boxPraticarAssociação.classList.add('hidden-div');
    boxPraticarAssociação.classList.add('disappear');
    boxPraticarRespostasMultiplas.classList.add('hidden-div');
    boxPraticarRespostasMultiplas.classList.add('disappear');

    var Text1 = document.getElementById("text-1");
    var Text2 = document.getElementById("text-2");
    var Text3 = document.getElementById("text-3");
    var Text4 = document.getElementById("text-4");
    var Text5 = document.getElementById("text-5");
    var Botao1 = document.getElementById("botão-1");
    var Botao2 = document.getElementById("botão-2");
    var Botao3 = document.getElementById("botão-3");
    var Botao4 = document.getElementById("botão-4");
    var Botao5 = document.getElementById("botão-5");
    var Botao0 = document.getElementById("botão-0");
    var opçãoMenu = document.getElementById("opções-menu");

    const mediaMobile = window.matchMedia("(max-width: 1024px)");

    function adjustLayout() {
      if (mediaMobile.matches) {
        // Ajuste para dispositivos móveis
        Text1.style.display = "none";
        Botao1.style.width = "70px";
        Botao1.style.height = "70px";
        Botao1.style.padding = "10px";
        Text2.style.display = "none";
        Botao2.style.width = "70px";
        Botao2.style.height = "70px";
        Botao2.style.padding = "10px";
        Text3.style.display = "none";
        Botao3.style.width = "70px";
        Botao3.style.height = "70px";
        Botao3.style.padding = "10px";
        Text4.style.display = "none";
        Botao4.style.width = "70px";
        Botao4.style.height = "70px";
        Botao4.style.padding = "10px";
        Text5.style.display = "none";
        Botao5.style.width = "70px";
        Botao5.style.height = "70px";
        Botao5.style.padding = "10px";
        Botao2.style.borderRight = "none";
        Botao2.style.borderTop = "none";
        Botao1.style.borderTop = "none";
        Botao4.style.borderRight = "none";
        Botao0.style.borderRight = "3px solid #343434"
        const mediaTablet = window.matchMedia("(max-width:1024px) and (min-width:1024px)");
        const mediaIpadMini = window.matchMedia("(max-width:768px) and (min-width:768px)");
        const mediaIpadAir = window.matchMedia("(max-width:820px) and (min-width:820px)");
        const mediaSurfacePro7 = window.matchMedia("(max-width:912px) and (min-width:912px)");
        const mediaAsusFold = window.matchMedia("(max-width:853px) and (min-width:853px)");
        if (mediaTablet.matches) {
          opçãoMenu.style.marginLeft = "350px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaIpadMini.matches) {
          opçãoMenu.style.marginLeft = "222px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaIpadAir.matches) {
          opçãoMenu.style.marginLeft = "248px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaSurfacePro7.matches) {
          opçãoMenu.style.marginLeft = "294px";
          opçãoMenu.style.left = "0%";
        }
        else if (mediaAsusFold.matches) {
          opçãoMenu.style.marginLeft = "264px";
          opçãoMenu.style.left = "0%";
        }
        else {
          opçãoMenu.style.marginLeft = "5px";
          opçãoMenu.style.left = "50%";
          opçãoMenu.style.transform = "translateX(-50%)"
        }
      }
    }
    mediaMobile.addEventListener('change', adjustLayout);

    // Chama a função inicialmente
    adjustLayout();
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
    botão1.style = "pointer-events: auto";
    botão2.style = "pointer-events: auto";
    botão3.style = "pointer-events: auto";
    botão4.style = "pointer-events: auto";
    botão5.style = "pointer-events: none";
    boxRespostasMultiplas.classList.remove('hidden-div');
    boxRespostasMultiplas.classList.add('appear');
    boxLacuna.classList.add('hidden-div');
    boxLacuna.classList.remove('appear');
    boxAsserção.classList.add('hidden-div');
    boxAsserção.classList.add('disappear');
    boxAssociação.classList.add('hidden-div');
    boxAssociação.classList.add('disappear');
    boxRespostaUnica.classList.add('hidden-div');
    boxRespostaUnica.classList.add('disappear');
    boxPraticarLacuna.classList.add('hidden-div');
    boxPraticarLacuna.classList.remove('appear');
    boxPraticarAsserção.classList.add('hidden-div');
    boxPraticarAsserção.classList.add('disappear');
    boxPraticarAssociação.classList.add('hidden-div');
    boxPraticarAssociação.classList.add('disappear');
    boxPraticarRespostaUnica.classList.add('hidden-div');
    boxPraticarRespostaUnica.classList.add('disappear');

    var Text1 = document.getElementById("text-1");
    var Text2 = document.getElementById("text-2");
    var Text3 = document.getElementById("text-3");
    var Text4 = document.getElementById("text-4");
    var Text5 = document.getElementById("text-5");
    var Botao1 = document.getElementById("botão-1");
    var Botao2 = document.getElementById("botão-2");
    var Botao3 = document.getElementById("botão-3");
    var Botao4 = document.getElementById("botão-4");
    var Botao5 = document.getElementById("botão-5");
    var Botao0 = document.getElementById("botão-0");
    var opçãoMenu = document.getElementById("opções-menu");

    const mediaMobile = window.matchMedia("(max-width: 1024px)");

    function adjustLayout() {
      if (mediaMobile.matches) {
        // Ajuste para dispositivos móveis
        Text1.style.display = "none";
        Botao1.style.width = "70px";
        Botao1.style.height = "70px";
        Botao1.style.padding = "10px";
        Text2.style.display = "none";
        Botao2.style.width = "70px";
        Botao2.style.height = "70px";
        Botao2.style.padding = "10px";
        Text3.style.display = "none";
        Botao3.style.width = "70px";
        Botao3.style.height = "70px";
        Botao3.style.padding = "10px";
        Text4.style.display = "none";
        Botao4.style.width = "70px";
        Botao4.style.height = "70px";
        Botao4.style.padding = "10px";
        Text5.style.display = "none";
        Botao5.style.width = "70px";
        Botao5.style.height = "70px";
        Botao5.style.padding = "10px";
        Botao2.style.borderRight = "none";
        Botao2.style.borderTop = "none";
        Botao1.style.borderTop = "none";
        Botao4.style.borderRight = "none";
        Botao0.style.borderRight = "3px solid #343434"
        const mediaTablet = window.matchMedia("(max-width:1024px) and (min-width:1024px)");
        const mediaIpadMini = window.matchMedia("(max-width:768px) and (min-width:768px)");
        const mediaIpadAir = window.matchMedia("(max-width:820px) and (min-width:820px)");
        const mediaSurfacePro7 = window.matchMedia("(max-width:912px) and (min-width:912px)");
        const mediaAsusFold = window.matchMedia("(max-width:853px) and (min-width:853px)");
        if (mediaTablet.matches) {
          opçãoMenu.style.marginLeft = "350px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaIpadMini.matches) {
          opçãoMenu.style.marginLeft = "222px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaIpadAir.matches) {
          opçãoMenu.style.marginLeft = "248px";
          opçãoMenu.style.left = "0%";

        }
        else if (mediaSurfacePro7.matches) {
          opçãoMenu.style.marginLeft = "294px";
          opçãoMenu.style.left = "0%";
        }
        else if (mediaAsusFold.matches) {
          opçãoMenu.style.marginLeft = "264px";
          opçãoMenu.style.left = "0%";
        }
        else {
          opçãoMenu.style.marginLeft = "5px";
          opçãoMenu.style.left = "50%";
          opçãoMenu.style.transform = "translateX(-50%)"
        }
      }
    }
    mediaMobile.addEventListener('change', adjustLayout);

    // Chama a função inicialmente
    adjustLayout();
  }
};

//FUNÇÃO BOTÃO INICIO

function voltarMenu() {
  // Volta para o menu de início e oculta o botão
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
      botãoInicio.classList.add('hidden-div'); //Oculta o botão de início
    }
    if (num == 7) {
      boxPraticarLacuna.classList.add('hidden-div');
      boxPraticarLacuna.classList.add('desappear');
      botãoInicio.classList.add('hidden-div'); //Oculta o botão de início
    }
    if (num == 8) {
      boxPraticarAssociação.classList.add('hidden-div');
      boxPraticarAssociação.classList.add('desappear');
      botãoInicio.classList.add('hidden-div'); //Oculta o botão de início
    }
    if (num == 9) {
      boxPraticarRespostaUnica.classList.add('hidden-div');
      boxPraticarRespostaUnica.classList.add('desappear');
      botãoInicio.classList.add('hidden-div'); //Oculta o botão de início
    }
    if (num == 10) {
      boxPraticarRespostasMultiplas.classList.add('hidden-div');
      boxPraticarRespostasMultiplas.classList.add('desappear');
      botãoInicio.classList.add('hidden-div'); //Oculta o botão de início
    }
  }
  menu.classList.remove('hidden-div');
  menu.classList.add('appear'); // efeito de transição
  opçõesMenu.parentElement.removeChild(opçõesMenu); // Remove o menu do elemento pai atual
  box.appendChild(opçõesMenu); // Adiciona o menu a tela de menu
  const mediaMobile = window.matchMedia("(max-width: 767px)");
  const mediaTablet = window.matchMedia("(max-width:1024px) and (min-width:1024px)");
  const mediaIpadMini = window.matchMedia("(max-width:768px)and (min-width:768px)");
  const mediaIpadAir = window.matchMedia("(max-width:820px)and (min-width:820px)");
  const mediaAsusFold = window.matchMedia("(max-width:853px) and (min-width:853px)");

  function adjustLayout() {
    if (mediaMobile.matches) {
      // Ajuste para dispositivos móveis
      opçõesMenu.style.marginLeft = "20px";
    }
    else if (mediaIpadMini.matches) {
      opçõesMenu.style.marginLeft = "20px";
      opçõesMenu.style.left = "5%";
    }
    else if (mediaIpadAir.matches) {
      opçõesMenu.style.marginLeft = "20px";
    }
    else if (mediaTablet.matches) {
      opçõesMenu.style.marginLeft = "20px";
      opçõesMenu.style.left = "15%";
    }
    else if (mediaAsusFold.matches) {
      opçõesMenu.style.marginLeft = "0px";
      opçõesMenu.style.left = "5%";
    }
    else {
      opçõesMenu.style.marginLeft = "85px"; // Adiciona a margem ao menu
    }
  }

  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();

  num = 0;
  console.log(`página-${num}`);
  if (num == 0) {
    // Torna todos os botões de questão ativos novamente
    botão1.style = "pointer-events: auto";
    botão2.style = "pointer-events: auto";
    botão3.style = "pointer-events: auto";
    botão4.style = "pointer-events: auto";
    botão5.style = "pointer-events: auto";

    var Text1 = document.getElementById("text-1");
    var Text2 = document.getElementById("text-2");
    var Text3 = document.getElementById("text-3");
    var Text4 = document.getElementById("text-4");
    var Text5 = document.getElementById("text-5");
    const mediaMobile = window.matchMedia("(max-width: 1024px)");

    function adjustLayout() {
      if (mediaMobile.matches) {
        // Ajuste para dispositivos móveis
        Text1.style.display = "block";
        Text2.style.display = "block";
        Text3.style.display = "block";
        Text4.style.display = "block";
        Text5.style.display = "block";
      }
    }

    mediaMobile.addEventListener('change', adjustLayout);

    // Chama a função inicialmente
    adjustLayout();
  }
};

// FUNÇÕES BOTÕES EXIBIR A PÁGINA VAMOS PRATICAR E VOLTAR ESTRATÉGIAS

function vamosPraticarAsserção() {
  boxAsserção.classList.add('hidden-div');
  boxAsserção.classList.add('disappear');
  boxPraticarAsserção.classList.remove('hidden-div');
  boxPraticarAsserção.classList.add('appear');
  num = 6;
  console.log(`página-${num}`);
}

function voltarEstrategias() {
  boxPraticarAsserção.classList.add('hidden-div');
  boxPraticarAsserção.classList.add('disappear');
  boxAsserção.classList.remove('hidden-div');
  boxAsserção.classList.add('appear');
  num = 1;
  console.log(`página-${num}`);
}

function vamosPraticarLacuna() {
  boxLacuna.classList.add('hidden-div');
  boxLacuna.classList.add('disappear');
  boxPraticarLacuna.classList.remove('hidden-div');
  boxPraticarLacuna.classList.add('appear');
  num = 7;
  console.log(`página-${num}`);
}

function voltarEstrategiasLacuna() {
  boxPraticarLacuna.classList.add('hidden-div');
  boxPraticarLacuna.classList.add('disappear');
  boxLacuna.classList.remove('hidden-div');
  boxLacuna.classList.add('appear');
  num = 2;
  console.log(`página-${num}`);
}

function vamosPraticarAssociação() {
  boxAssociação.classList.add('hidden-div');
  boxAssociação.classList.add('disappear');
  boxPraticarAssociação.classList.remove('hidden-div');
  boxPraticarAssociação.classList.add('appear');
  num = 8;
  console.log(`página-${num}`);
}

function voltarEstrategiasAssociação() {
  boxPraticarAssociação.classList.add('hidden-div');
  boxPraticarAssociação.classList.add('disappear');
  boxAssociação.classList.remove('hidden-div');
  boxAssociação.classList.add('appear');
  num = 3;
  console.log(`página-${num}`);
}

function vamosPraticarRespostaUnica() {
  boxRespostaUnica.classList.add('hidden-div');
  boxRespostaUnica.classList.add('disappear');
  boxPraticarRespostaUnica.classList.remove('hidden-div');
  boxPraticarRespostaUnica.classList.add('appear');
  num = 9;
  console.log(`página-${num}`);
}

function voltarEstrategiasRespostaUnica() {
  boxPraticarRespostaUnica.classList.add('hidden-div');
  boxPraticarRespostaUnica.classList.add('disappear');
  boxRespostaUnica.classList.remove('hidden-div');
  boxRespostaUnica.classList.add('appear');
  num = 4;
  console.log(`página-${num}`);
}

function vamosPraticarRespostasMultiplas() {
  boxRespostasMultiplas.classList.add('hidden-div');
  boxRespostasMultiplas.classList.add('disappear');
  boxPraticarRespostasMultiplas.classList.remove('hidden-div');
  boxPraticarRespostasMultiplas.classList.add('appear');
  num = 10;
  console.log(`página-${num}`);
}

function voltarEstrategiasRespostasMultiplas() {
  boxPraticarRespostasMultiplas.classList.add('hidden-div');
  boxPraticarRespostasMultiplas.classList.add('disappear');
  boxRespostasMultiplas.classList.remove('hidden-div');
  boxRespostasMultiplas.classList.add('appear');
  num = 5;
  console.log(`página-${num}`);
}

//FUNÇÕES APARECER ESTRATÉGIAS ASSERÇÃO

var AsserçãoEstrategiaCheck1 = 0;
var AsserçãoEstrategiaCheck2 = 0;
var AsserçãoEstrategiaCheck3 = 0;
var AsserçãoEstrategiaCheck4 = 0;
var AsserçãoEstrategiaCheck5 = 0;

function estrategia1Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategia1.style.display = "block";
      estrategia1.parentElement.removeChild(estrategia1); //Remove a estratégia do elemento pai atual
      sublinhadoRosa1.appendChild(estrategia1); //Adiciona a estratégia no local adequado para versão mobile 
      AsserçãoEstrategiaCheck1 += 1;
    }
    else {
      estrategia1.style.display = "block";
      sublinhadoRosa1.style.backgroundColor = "#FFB5FF"
      AsserçãoEstrategiaCheck1 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarAsserção();
}

function estrategia2Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategia2.style.display = "block";
      estrategia2.parentElement.removeChild(estrategia2); //Remove a estratégia do elemento pai atual
      sublinhadoRosa2.appendChild(estrategia2); //Adiciona a estratégia no local adequado para versão mobile 
      AsserçãoEstrategiaCheck2 += 1;
    }
    else {
      estrategia2.style.display = "block";
      sublinhadoRosa2.style.backgroundColor = "#FFB5FF"
      AsserçãoEstrategiaCheck2 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarAsserção();
}

function estrategia3Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategia3.style.display = "block";
      estrategia3.parentElement.removeChild(estrategia3); //Remove a estratégia do elemento pai atual
      sublinhadoRosa3.appendChild(estrategia3); //Adiciona a estratégia no local adequado para versão mobile 
      AsserçãoEstrategiaCheck3 += 1;
    }
    else {
      estrategia3.style.display = "block";
      sublinhadoRosa3.style.backgroundColor = "#FFB5FF"
      AsserçãoEstrategiaCheck3 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarAsserção();
}

function estrategia4Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategia4.style.display = "block";
      estrategia4.parentElement.removeChild(estrategia4); //Remove a estratégia do elemento pai atual
      sublinhadoRosa4.appendChild(estrategia4); //Adiciona a estratégia no local adequado para versão mobile 
      AsserçãoEstrategiaCheck4 += 1;
    }
    else {
      estrategia4.style.display = "block";
      sublinhadoRosa4.style.backgroundColor = "#FFB5FF"
      AsserçãoEstrategiaCheck4 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarAsserção();
}

function estrategia5Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategia5.style.display = "block";
      estrategia5.parentElement.removeChild(estrategia5); //Remove a estratégia do elemento pai atual
      sublinhadoRosa5.appendChild(estrategia5); //Adiciona a estratégia no local adequado para versão mobile 
      respostaAsserção.style.display = "block";
      AsserçãoEstrategiaCheck5 += 1;
    }
    else {
      estrategia5.style.display = "block";
      sublinhadoRosa5.style.backgroundColor = "#FFB5FF"
      respostaAsserção.style.display = "block";
      AsserçãoEstrategiaCheck5 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarAsserção();
}

// FUNÇÃO ABRIR POP-UP SOBRE O TIPO DE QUESTÃO

let ModalAsserçãoMobile = document.getElementById("modal-asserção-mobile");
let ModalAsserçãoMobilePraticar = document.getElementById("modal-asserção-mobile-praticar");
let AbrirSobreAsserção = document.getElementById("abrir-sobre-asserção");
let AbrirSobreAsserçãoPraticar = document.getElementById("abrir-sobre-asserção-praticar");
var PopUpAberto = 0;

function sobreAsserção() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");

  function ModalAsserçãoResponsivo() {
    if (mediaMobile.matches && PopUpAberto == 0) {
      ModalAsserçãoMobile.style.display = "block";
      AbrirSobreAsserção.style.transform = "rotate(360deg)";
      PopUpAberto += 1;
    }
    else if (mediaMobile.matches && PopUpAberto == 1) {
      ModalAsserçãoMobile.style.display = "none";
      AbrirSobreAsserção.style.transform = "rotate(180deg)";
      PopUpAberto -= 1;
    }
    else {
      modalAsserção.style.display = "block";
      modalBackground.style.display = "block";
    }
  }
  mediaMobile.addEventListener('change', ModalAsserçãoResponsivo);

  // Chama a função inicialmente
  ModalAsserçãoResponsivo();
}

function sobreAsserçãoPraticar() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");

  function ModalAsserçãoResponsivo() {
    if (mediaMobile.matches && PopUpAberto == 0) {
      ModalAsserçãoMobilePraticar.style.display = "block";
      AbrirSobreAsserçãoPraticar.style.transform = "rotate(360deg)";
      PopUpAberto += 1;
    }
    else if (mediaMobile.matches && PopUpAberto == 1) {
      ModalAsserçãoMobilePraticar.style.display = "none";
      AbrirSobreAsserçãoPraticar.style.transform = "rotate(180deg)";
      PopUpAberto -= 1;
    }
    else {
      modalAsserção.style.display = "block";
      modalBackground.style.display = "block";
    }
  }
  mediaMobile.addEventListener('change', ModalAsserçãoResponsivo);

  // Chama a função inicialmente
  ModalAsserçãoResponsivo();
}

//FUNÇÕES APARECER ESTRATÉGIAS LACUNA

var LacunaEstrategiaCheck1 = 0;
var LacunaEstrategiaCheck2 = 0;
var LacunaEstrategiaCheck3 = 0;
var LacunaEstrategiaCheck4 = 0;
var LacunaEstrategiaCheck5 = 0;

function estrategiaLacuna1Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaLacuna1.style.display = "block";
      estrategiaLacuna1.parentElement.removeChild(estrategiaLacuna1); //Remove a estratégia do elemento pai atual2
      sublinhadoAmarelo1.appendChild(estrategiaLacuna1); //Adiciona a estratégia no local adequado para versão mobile 
      LacunaEstrategiaCheck1 += 1;
    }
    else {
      estrategiaLacuna1.style.display = "block";
      sublinhadoAmarelo1.style.backgroundColor = "#F9FFB5"
      LacunaEstrategiaCheck1 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarLacuna();
}

function estrategiaLacuna2Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaLacuna2.style.display = "block";
      estrategiaLacuna2.parentElement.removeChild(estrategiaLacuna2); //Remove a estratégia do elemento pai atual2
      sublinhadoAmarelo2.appendChild(estrategiaLacuna2); //Adiciona a estratégia no local adequado para versão mobile 
      LacunaEstrategiaCheck2 += 1;
    }
    else {
      estrategiaLacuna2.style.display = "block";
      sublinhadoAmarelo2.style.backgroundColor = "#F9FFB5"
      LacunaEstrategiaCheck2 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarLacuna();
}

function estrategiaLacuna3Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaLacuna3.style.display = "block";
      estrategiaLacuna3.parentElement.removeChild(estrategiaLacuna3); //Remove a estratégia do elemento pai atual2
      sublinhadoAmarelo3.appendChild(estrategiaLacuna3); //Adiciona a estratégia no local adequado para versão mobile 
      LacunaEstrategiaCheck3 += 1;
    }
    else {
      estrategiaLacuna3.style.display = "block";
      sublinhadoAmarelo3.style.backgroundColor = "#F9FFB5"
      LacunaEstrategiaCheck3 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarLacuna();
}

function estrategiaLacuna4Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaLacuna4.style.display = "block";
      estrategiaLacuna4.parentElement.removeChild(estrategiaLacuna4); //Remove a estratégia do elemento pai atual2
      sublinhadoAmarelo4.appendChild(estrategiaLacuna4); //Adiciona a estratégia no local adequado para versão mobile 
      LacunaEstrategiaCheck4 += 1;
    }
    else {
      estrategiaLacuna4.style.display = "block";
      sublinhadoAmarelo4.style.backgroundColor = "#F9FFB5"
      LacunaEstrategiaCheck4 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarLacuna();
}

function estrategiaLacuna5Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaLacuna5.style.display = "block";
      estrategiaLacuna5.parentElement.removeChild(estrategiaLacuna5); //Remove a estratégia do elemento pai atual2
      sublinhadoAmarelo5.appendChild(estrategiaLacuna5); //Adiciona a estratégia no local adequado para versão mobile 
      respostaLacuna.style.display = "block";
      LacunaEstrategiaCheck5 += 1;
    }
    else {
      estrategiaLacuna5.style.display = "block";
      sublinhadoAmarelo5.style.backgroundColor = "#F9FFB5"
      respostaLacuna.style.display = "block";
      LacunaEstrategiaCheck5 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarLacuna();
}

// FUNÇÃO ABRIR POP-UP SOBRE O TIPO DE QUESTÃO

let ModalLacunaMobile = document.getElementById("modal-lacuna-mobile");
let AbrirSobreLacuna = document.getElementById("abrir-sobre-lacuna");
let ModalLacunaMobilePraticar = document.getElementById("modal-lacuna-mobile-praticar")
let AbrirSobreLacunaPraticar = document.getElementById("abrir-sobre-lacuna-praticar");
var PopUpAberto = 0;

function sobreLacuna() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");

  function ModalLacunaResponsivo() {
    if (mediaMobile.matches && PopUpAberto == 0) {
      ModalLacunaMobile.style.display = "block";
      AbrirSobreLacuna.style.transform = "rotate(360deg)";
      PopUpAberto += 1;
    }
    else if (mediaMobile.matches && PopUpAberto == 1) {
      ModalLacunaMobile.style.display = "none";
      AbrirSobreLacuna.style.transform = "rotate(180deg)";
      PopUpAberto -= 1;
    }
    else {
      modalLacuna.style.display = "block";
      modalBackground.style.display = "block";
    }
  }
  mediaMobile.addEventListener('change', ModalLacunaResponsivo);

  // Chama a função inicialmente
  ModalLacunaResponsivo();
}

function sobreLacunaPraticar() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");

  function ModalLacunaResponsivo() {
    if (mediaMobile.matches && PopUpAberto == 0) {
      ModalLacunaMobilePraticar.style.display = "block";
      AbrirSobreLacunaPraticar.style.transform = "rotate(360deg)";
      PopUpAberto += 1;
    }
    else if (mediaMobile.matches && PopUpAberto == 1) {
      ModalLacunaMobilePraticar.style.display = "none";
      AbrirSobreLacunaPraticar.style.transform = "rotate(180deg)";
      PopUpAberto -= 1;
    }
    else {
      modalLacuna.style.display = "block";
      modalBackground.style.display = "block";
    }
  }
  mediaMobile.addEventListener('change', ModalLacunaResponsivo);

  // Chama a função inicialmente
  ModalLacunaResponsivo();
}


//FUNÇÕES APARECER ESTRATÉGIAS ASSOCIAÇÃO

var AssociaçãoEstrategiaCheck1 = 0;
var AssociaçãoEstrategiaCheck2 = 0;
var AssociaçãoEstrategiaCheck3 = 0;
var AssociaçãoEstrategiaCheck4 = 0;
var AssociaçãoEstrategiaCheck5 = 0;

function estrategiaAssociação1Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaAssociação1.style.display = "block";
      estrategiaAssociação1.parentElement.removeChild(estrategiaAssociação1); //Remove a estratégia do elemento pai atual2
      sublinhadoVerde1.appendChild(estrategiaAssociação1); //Adiciona a estratégia no local adequado para versão mobile 
      AssociaçãoEstrategiaCheck1 += 1;
    }
    else {
      estrategiaAssociação1.style.display = "block";
      sublinhadoVerde1.style.backgroundColor = "#B5FBB9"
      AssociaçãoEstrategiaCheck1 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarAssociação();
}

function estrategiaAssociação2Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaAssociação2.style.display = "block";
      estrategiaAssociação2.parentElement.removeChild(estrategiaAssociação2); //Remove a estratégia do elemento pai atual2
      sublinhadoVerde2.appendChild(estrategiaAssociação2); //Adiciona a estratégia no local adequado para versão mobile 
      AssociaçãoEstrategiaCheck2 += 1;
    }
    else {
      estrategiaAssociação2.style.display = "block";
      sublinhadoVerde2.style.backgroundColor = "#B5FBB9"
      AssociaçãoEstrategiaCheck2 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarAssociação();
}

function estrategiaAssociação3Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaAssociação3.style.display = "block";
      estrategiaAssociação3.parentElement.removeChild(estrategiaAssociação3); //Remove a estratégia do elemento pai atual2
      sublinhadoVerde3.appendChild(estrategiaAssociação3); //Adiciona a estratégia no local adequado para versão mobile 
      AssociaçãoEstrategiaCheck3 += 1;
    }
    else {
      estrategiaAssociação3.style.display = "block";
      sublinhadoVerde3.style.backgroundColor = "#B5FBB9"
      AssociaçãoEstrategiaCheck3 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarAssociação();
}

function estrategiaAssociação4Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaAssociação4.style.display = "block";
      estrategiaAssociação4.parentElement.removeChild(estrategiaAssociação4); //Remove a estratégia do elemento pai atual2
      sublinhadoVerde4.appendChild(estrategiaAssociação4); //Adiciona a estratégia no local adequado para versão mobile 
      AssociaçãoEstrategiaCheck4 += 1;
    }
    else {
      estrategiaAssociação4.style.display = "block";
      sublinhadoVerde4.style.backgroundColor = "#B5FBB9"
      AssociaçãoEstrategiaCheck4 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarAssociação();
}

function estrategiaAssociação5Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaAssociação5.style.display = "block";
      estrategiaAssociação5.parentElement.removeChild(estrategiaAssociação5); //Remove a estratégia do elemento pai atual2
      sublinhadoVerde5.appendChild(estrategiaAssociação5); //Adiciona a estratégia no local adequado para versão mobile 
      AssociaçãoEstrategiaCheck5 += 1;
    }
    else {
      estrategiaAssociação5.style.display = "block";
      sublinhadoVerde5.style.backgroundColor = "#B5FBB9"
      respostaAssociação.style.display = "block";
      AssociaçãoEstrategiaCheck5 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarAssociação();
}

// FUNÇÃO ABRIR POP-UP SOBRE O TIPO DE QUESTÃO

let ModalAssociaçãoMobile = document.getElementById("modal-associação-mobile");
let ModalAssociaçãoMobilePraticar = document.getElementById("modal-associação-mobile-praticar");
let AbrirSobreAssociação = document.getElementById("abrir-sobre-associação");
let AbrirSobreAssociaçãoPraticar = document.getElementById("abrir-sobre-associação-praticar");
var PopUpAberto = 0;

function sobreAssociação() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");

  function ModalAssociaçãoResponsivo() {
    if (mediaMobile.matches && PopUpAberto == 0) {
      ModalAssociaçãoMobile.style.display = "block";
      AbrirSobreAssociação.style.transform = "rotate(360deg)";
      PopUpAberto += 1;
    }
    else if (mediaMobile.matches && PopUpAberto == 1) {
      ModalAssociaçãoMobile.style.display = "none";
      AbrirSobreAssociação.style.transform = "rotate(180deg)";
      PopUpAberto -= 1;
    }
    else {
      modalAssociação.style.display = "block";
      modalBackground.style.display = "block";
    }
  }
  mediaMobile.addEventListener('change', ModalAssociaçãoResponsivo);

  // Chama a função inicialmente
  ModalAssociaçãoResponsivo();
}

function sobreAssociaçãoPraticar() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");

  function ModalAssociaçãoResponsivo() {
    if (mediaMobile.matches && PopUpAberto == 0) {
      ModalAssociaçãoMobilePraticar.style.display = "block";
      AbrirSobreAssociaçãoPraticar.style.transform = "rotate(360deg)";
      PopUpAberto += 1;
    }
    else if (mediaMobile.matches && PopUpAberto == 1) {
      ModalAssociaçãoMobilePraticar.style.display = "none";
      AbrirSobreAssociaçãoPraticar.style.transform = "rotate(180deg)";
      PopUpAberto -= 1;
    }
    else {
      modalAssociação.style.display = "block";
      modalBackground.style.display = "block";
    }
  }
  mediaMobile.addEventListener('change', ModalAssociaçãoResponsivo);

  // Chama a função inicialmente
  ModalAssociaçãoResponsivo();
}

//FUNÇÕES APARECER RESPOSTA UNICA

var RespostaUnicaEstrategiaCheck1 = 0;
var RespostaUnicaEstrategiaCheck2 = 0;
var RespostaUnicaEstrategiaCheck3 = 0;
var RespostaUnicaEstrategiaCheck4 = 0;
var RespostaUnicaEstrategiaCheck5 = 0;

function estrategiaRespostaUnica1Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaRespostaUnica1.style.display = "block";
      estrategiaRespostaUnica1.parentElement.removeChild(estrategiaRespostaUnica1); //Remove a estratégia do elemento pai atual2
      sublinhadoAzul1.appendChild(estrategiaRespostaUnica1); //Adiciona a estratégia no local adequado para versão mobile 
      RespostaUnicaEstrategiaCheck1 += 1;
    }
    else {
      estrategiaRespostaUnica1.style.display = "block";
      sublinhadoAzul1.style.backgroundColor = "#B5F2FF"
      RespostaUnicaEstrategiaCheck1 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarRespostaUnica();
}

function estrategiaRespostaUnica2Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaRespostaUnica2.style.display = "block";
      estrategiaRespostaUnica2.parentElement.removeChild(estrategiaRespostaUnica2); //Remove a estratégia do elemento pai atual2
      sublinhadoAzul2.appendChild(estrategiaRespostaUnica2); //Adiciona a estratégia no local adequado para versão mobile 
      RespostaUnicaEstrategiaCheck2 += 1;
    }
    else {
      estrategiaRespostaUnica2.style.display = "block";
      sublinhadoAzul2.style.backgroundColor = "#B5F2FF"
      RespostaUnicaEstrategiaCheck2 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarRespostaUnica();
}

function estrategiaRespostaUnica3Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaRespostaUnica3.style.display = "block";
      estrategiaRespostaUnica3.parentElement.removeChild(estrategiaRespostaUnica3); //Remove a estratégia do elemento pai atual2
      sublinhadoAzul3.appendChild(estrategiaRespostaUnica3); //Adiciona a estratégia no local adequado para versão mobile 
      RespostaUnicaEstrategiaCheck3 += 1;
    }
    else {
      estrategiaRespostaUnica3.style.display = "block";
      sublinhadoAzul3.style.backgroundColor = "#B5F2FF"
      RespostaUnicaEstrategiaCheck3 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarRespostaUnica();
}

function estrategiaRespostaUnica4Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaRespostaUnica4.style.display = "block";
      estrategiaRespostaUnica4.parentElement.removeChild(estrategiaRespostaUnica4); //Remove a estratégia do elemento pai atual2
      sublinhadoAzul4.appendChild(estrategiaRespostaUnica4); //Adiciona a estratégia no local adequado para versão mobile 
      RespostaUnicaEstrategiaCheck4 += 1;
    }
    else {
      estrategiaRespostaUnica4.style.display = "block";
      sublinhadoAzul4.style.backgroundColor = "#B5F2FF"
      respostaRespostaUnica.style.display = "block";
      RespostaUnicaEstrategiaCheck4 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarRespostaUnica();
}

// FUNÇÃO ABRIR POP-UP SOBRE O TIPO DE QUESTÃO

let ModalRespostaUnicaMobile = document.getElementById("modal-resposta-unica-mobile");
let ModalRespostaUnicaMobilePraticar = document.getElementById("modal-resposta-unica-mobile-praticar");
let AbrirSobreRespostaUnica = document.getElementById("abrir-sobre-resposta-unica");
let AbrirSobreRespostaUnicaPraticar = document.getElementById("abrir-sobre-resposta-unica-praticar");
var PopUpAberto = 0;

function sobreRespostaUnica() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");

  function ModalRespostaUnicaResponsivo() {
    if (mediaMobile.matches && PopUpAberto == 0) {
      ModalRespostaUnicaMobile.style.display = "block";
      AbrirSobreRespostaUnica.style.transform = "rotate(360deg)";
      PopUpAberto += 1;
    }
    else if (mediaMobile.matches && PopUpAberto == 1) {
      ModalRespostaUnicaMobile.style.display = "none";
      AbrirSobreRespostaUnica.style.transform = "rotate(180deg)";
      PopUpAberto -= 1;
    }
    else {
      modalRespostaUnica.style.display = "block";
      modalBackground.style.display = "block";
    }
  }
  mediaMobile.addEventListener('change', ModalRespostaUnicaResponsivo);

  // Chama a função inicialmente
  ModalRespostaUnicaResponsivo();
}

function sobreRespostaUnicaPraticar() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");

  function ModalRespostaUnicaResponsivo() {
    if (mediaMobile.matches && PopUpAberto == 0) {
      ModalRespostaUnicaMobilePraticar.style.display = "block";
      AbrirSobreRespostaUnicaPraticar.style.transform = "rotate(360deg)";
      PopUpAberto += 1;
    }
    else if (mediaMobile.matches && PopUpAberto == 1) {
      ModalRespostaUnicaMobilePraticar.style.display = "none";
      AbrirSobreRespostaUnicaPraticar.style.transform = "rotate(180deg)";
      PopUpAberto -= 1;
    }
    else {
      modalRespostaUnica.style.display = "block";
      modalBackground.style.display = "block";
    }
  }
  mediaMobile.addEventListener('change', ModalRespostaUnicaResponsivo);

  // Chama a função inicialmente
  ModalRespostaUnicaResponsivo();
}


//FUNÇÕES APARECER RESPOSTAS MULTIPLAS

var RespostasMultiplasEstrategiaCheck1 = 0;
var RespostasMultiplasEstrategiaCheck2 = 0;
var RespostasMultiplasEstrategiaCheck3 = 0;
var RespostasMultiplasEstrategiaCheck4 = 0;
var RespostasMultiplasEstrategiaCheck5 = 0;

function estrategiaRespostasMultiplas1Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaRespostasMultiplas1.style.display = "block";
      estrategiaRespostasMultiplas1.parentElement.removeChild(estrategiaRespostasMultiplas1); //Remove a estratégia do elemento pai atual2
      sublinhadoRoxo1.appendChild(estrategiaRespostasMultiplas1); //Adiciona a estratégia no local adequado para versão mobile 
      RespostasMultiplasEstrategiaCheck1 += 1;
    }
    else {
      estrategiaRespostasMultiplas1.style.display = "block";
      sublinhadoRoxo1.style.backgroundColor = "#D5D3FF"
      RespostasMultiplasEstrategiaCheck1 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarRespostasMultiplas();
}

function estrategiaRespostasMultiplas2Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaRespostasMultiplas2.style.display = "block";
      estrategiaRespostasMultiplas2.parentElement.removeChild(estrategiaRespostasMultiplas2); //Remove a estratégia do elemento pai atual2
      sublinhadoRoxo2.appendChild(estrategiaRespostasMultiplas2); //Adiciona a estratégia no local adequado para versão mobile 
      RespostasMultiplasEstrategiaCheck2 += 1;
    }
    else {
      estrategiaRespostasMultiplas2.style.display = "block";
      sublinhadoRoxo2.style.backgroundColor = "#D5D3FF"
      RespostasMultiplasEstrategiaCheck2 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarRespostasMultiplas();
}

function estrategiaRespostasMultiplas3Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaRespostasMultiplas3.style.display = "block";
      estrategiaRespostasMultiplas3.parentElement.removeChild(estrategiaRespostasMultiplas3); //Remove a estratégia do elemento pai atual2
      sublinhadoRoxo3.appendChild(estrategiaRespostasMultiplas3); //Adiciona a estratégia no local adequado para versão mobile 
      RespostasMultiplasEstrategiaCheck3 += 1;
    }
    else {
      estrategiaRespostasMultiplas3.style.display = "block";
      sublinhadoRoxo3.style.backgroundColor = "#D5D3FF"
      RespostasMultiplasEstrategiaCheck3 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarRespostasMultiplas();
}

function estrategiaRespostasMultiplas4Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaRespostasMultiplas4.style.display = "block";
      estrategiaRespostasMultiplas4.parentElement.removeChild(estrategiaRespostasMultiplas4); //Remove a estratégia do elemento pai atual2
      sublinhadoRoxo4.appendChild(estrategiaRespostasMultiplas4); //Adiciona a estratégia no local adequado para versão mobile 
      RespostasMultiplasEstrategiaCheck4 += 1;
    }
    else {
      estrategiaRespostasMultiplas4.style.display = "block";
      sublinhadoRoxo4.style.backgroundColor = "#D5D3FF"
      RespostasMultiplasEstrategiaCheck4 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarRespostasMultiplas();
}

function estrategiaRespostasMultiplas5Appear() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");//Ajusta a versão responsiva para mobile não acionar o hover

  function adjustLayout() {
    if (mediaMobile.matches) {
      estrategiaRespostasMultiplas5.style.display = "block";
      estrategiaRespostasMultiplas5.parentElement.removeChild(estrategiaRespostasMultiplas5); //Remove a estratégia do elemento pai atual2
      sublinhadoRoxo5.appendChild(estrategiaRespostasMultiplas5); //Adiciona a estratégia no local adequado para versão mobile 
      RespostasMultiplasEstrategiaCheck5 += 1;
    }
    else {
      estrategiaRespostasMultiplas5.style.display = "block";
      sublinhadoRoxo5.style.backgroundColor = "#D5D3FF"
      respostaRespostasMultiplas.style.display = "block";
      RespostasMultiplasEstrategiaCheck5 += 1;
    }
  }
  mediaMobile.addEventListener('change', adjustLayout);

  // Chama a função inicialmente
  adjustLayout();
  BotãoPraticarRespostasMultiplas();
}

// FUNÇÃO ABRIR POP-UP SOBRE O TIPO DE QUESTÃO

let ModalRespostasMultiplasMobile = document.getElementById("modal-respostas-multiplas-mobile");
let ModalRespostasMultiplasMobilePraticar = document.getElementById("modal-respostas-multiplas-mobile-praticar");
let AbrirSobreRespostasMultiplas = document.getElementById("abrir-sobre-respostas-multiplas");
let AbrirSobreRespostasMultiplasPraticar = document.getElementById("abrir-sobre-respostas-multiplas-praticar");
var PopUpAberto = 0;

function sobreRespostasMultiplas() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");

  function ModalRespostasMultiplasResponsivo() {
    if (mediaMobile.matches && PopUpAberto == 0) {
      ModalRespostasMultiplasMobile.style.display = "block";
      AbrirSobreRespostasMultiplas.style.transform = "rotate(360deg)";
      PopUpAberto += 1;
    }
    else if (mediaMobile.matches && PopUpAberto == 1) {
      ModalRespostasMultiplasMobile.style.display = "none";
      AbrirSobreRespostasMultiplas.style.transform = "rotate(180deg)";
      PopUpAberto -= 1;
    }
    else {
      modalRespostasMultiplas.style.display = "block";
      modalBackground.style.display = "block";
    }
  }
  mediaMobile.addEventListener('change', ModalRespostasMultiplasResponsivo);

  // Chama a função inicialmente
  ModalRespostasMultiplasResponsivo();
}

function sobreRespostasMultiplasPraticar() {
  const mediaMobile = window.matchMedia("(max-width: 1024px)");

  function ModalRespostasMultiplasResponsivo() {
    if (mediaMobile.matches && PopUpAberto == 0) {
      ModalRespostasMultiplasMobilePraticar.style.display = "block";
      AbrirSobreRespostasMultiplasPraticar.style.transform = "rotate(360deg)";
      PopUpAberto += 1;
    }
    else if (mediaMobile.matches && PopUpAberto == 1) {
      ModalRespostasMultiplasMobilePraticar.style.display = "none";
      AbrirSobreRespostasMultiplasPraticar.style.transform = "rotate(180deg)";
      PopUpAberto -= 1;
    }
    else {
      modalRespostasMultiplas.style.display = "block";
      modalBackground.style.display = "block";
    }
  }
  mediaMobile.addEventListener('change', ModalRespostasMultiplasResponsivo);

  // Chama a função inicialmente
  ModalRespostasMultiplasResponsivo();
}

// FUNÇÃO PARA FECHAR O POP-UP AO CLICAR EM QUALQUER PARTE DA TELA

window.onclick = function (event) {
  if (event.target === modalBackground) {
    modalAsserção.style.display = "none";
    modalLacuna.style.display = "none";
    modalAssociação.style.display = "none";
    modalRespostaUnica.style.display = "none";
    modalRespostasMultiplas.style.display = "none";
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
let respostaPraticarRespostaUnica = document.getElementById('resposta-praticar-resposta-unica');
let alternativa1RespostaUnica = document.getElementById('alternativa-1-resposta-unica');
let alternativa2RespostaUnica = document.getElementById('alternativa-2-resposta-unica');
let alternativa3RespostaUnica = document.getElementById('alternativa-3-resposta-unica');
let alternativa4RespostaUnica = document.getElementById('alternativa-4-resposta-unica');
let alternativa5RespostaUnica = document.getElementById('alternativa-5-resposta-unica');
let respostaPraticarRespostasMultiplas = document.getElementById('resposta-praticar-respostas-multiplas');
let alternativa1RespostasMultiplas = document.getElementById('alternativa-1-respostas-multiplas');
let alternativa2RespostasMultiplas = document.getElementById('alternativa-2-respostas-multiplas');
let alternativa3RespostasMultiplas = document.getElementById('alternativa-3-respostas-multiplas');
let alternativa4RespostasMultiplas = document.getElementById('alternativa-4-respostas-multiplas');
let alternativa5RespostasMultiplas = document.getElementById('alternativa-5-respostas-multiplas');



// FUNÇÕES CHECKBOX VAMOS PRATICAR ASSERÇÕES

function checkboxAsserção1(checkbox) {
  if (checkbox.checked) {
    respostaPraticarAsserção.classList.remove('hidden-div');
    alternativa1asserção.style.backgroundColor = "#FFB5FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAsserção2(checkbox) {
  if (checkbox.checked) {
    respostaPraticarAsserção.classList.remove('hidden-div');
    alternativa2asserção.style.backgroundColor = "#FFB5FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAsserção3(checkbox) {
  if (checkbox.checked) {
    respostaPraticarAsserção.classList.remove('hidden-div');
    alternativa3asserção.style.backgroundColor = "#FFB5FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAsserção4(checkbox) {
  if (checkbox.checked) {
    respostaPraticarAsserção.classList.remove('hidden-div');
    alternativa4asserção.style.backgroundColor = "#FFB5FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAsserção5(checkbox) {
  if (checkbox.checked) {
    respostaPraticarAsserção.classList.remove('hidden-div');
    alternativa5asserção.style.backgroundColor = "#FFB5FF"
    console.log('ESTOU CHECADO');
  }
}

// FUNÇÕES CHECKBOX VAMOS PRATICAR LACUNA

function checkboxLacuna1(checkbox) {
  if (checkbox.checked) {
    respostaPraticarLacuna.classList.remove('hidden-div');
    alternativa1lacuna.style.backgroundColor = "#F9FFB5"
    console.log('ESTOU CHECADO');
  }
}

function checkboxLacuna2(checkbox) {
  if (checkbox.checked) {
    respostaPraticarLacuna.classList.remove('hidden-div');
    alternativa2lacuna.style.backgroundColor = "#F9FFB5"
    console.log('ESTOU CHECADO');
  }
}

function checkboxLacuna3(checkbox) {
  if (checkbox.checked) {
    respostaPraticarLacuna.classList.remove('hidden-div');
    alternativa3lacuna.style.backgroundColor = "#F9FFB5"
    console.log('ESTOU CHECADO');
  }
}

function checkboxLacuna4(checkbox) {
  if (checkbox.checked) {
    respostaPraticarLacuna.classList.remove('hidden-div');
    alternativa4lacuna.style.backgroundColor = "#F9FFB5"
    console.log('ESTOU CHECADO');
  }
}

function checkboxLacuna5(checkbox) {
  if (checkbox.checked) {
    respostaPraticarLacuna.classList.remove('hidden-div');
    alternativa5lacuna.style.backgroundColor = "#F9FFB5"
    console.log('ESTOU CHECADO');
  }
}

// FUNÇÕES CHECKBOX VAMOS PRATICAR ASSOCIAÇÃO

function checkboxAssociação1(checkbox) {
  if (checkbox.checked) {
    respostaPraticarAssociação.classList.remove('hidden-div');
    alternativa1associação.style.backgroundColor = "#B5FBB9"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAssociação2(checkbox) {
  if (checkbox.checked) {
    respostaPraticarAssociação.classList.remove('hidden-div');
    alternativa2associação.style.backgroundColor = "#B5FBB9"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAssociação3(checkbox) {
  if (checkbox.checked) {
    respostaPraticarAssociação.classList.remove('hidden-div');
    alternativa3associação.style.backgroundColor = "#B5FBB9"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAssociação4(checkbox) {
  if (checkbox.checked) {
    respostaPraticarAssociação.classList.remove('hidden-div');
    alternativa4associação.style.backgroundColor = "#B5FBB9"
    console.log('ESTOU CHECADO');
  }
}

function checkboxAssociação5(checkbox) {
  if (checkbox.checked) {
    respostaPraticarAssociação.classList.remove('hidden-div');
    alternativa5associação.style.backgroundColor = "#B5FBB9"
    console.log('ESTOU CHECADO');
  }
}

// FUNÇÕES CHECKBOX VAMOS PRATICAR RESPOSTA UNICA

function checkboxRespostaUnica1(checkbox) {
  if (checkbox.checked) {
    respostaPraticarRespostaUnica.classList.remove('hidden-div');
    alternativa1RespostaUnica.style.backgroundColor = "#B5F2FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxRespostaUnica2(checkbox) {
  if (checkbox.checked) {
    respostaPraticarRespostaUnica.classList.remove('hidden-div');
    alternativa2RespostaUnica.style.backgroundColor = "#B5F2FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxRespostaUnica3(checkbox) {
  if (checkbox.checked) {
    respostaPraticarRespostaUnica.classList.remove('hidden-div');
    alternativa3RespostaUnica.style.backgroundColor = "#B5F2FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxRespostaUnica4(checkbox) {
  if (checkbox.checked) {
    respostaPraticarRespostaUnica.classList.remove('hidden-div');
    alternativa4RespostaUnica.style.backgroundColor = "#B5F2FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxRespostaUnica5(checkbox) {
  if (checkbox.checked) {
    respostaPraticarRespostaUnica.classList.remove('hidden-div');
    alternativa5RespostaUnica.style.backgroundColor = "#B5F2FF"
    console.log('ESTOU CHECADO');
  }
}

// FUNÇÕES CHECKBOX VAMOS PRATICAR RESPOSTAS MULTIPLAS

function checkboxRespostasMultiplas1(checkbox) {
  if (checkbox.checked) {
    respostaPraticarRespostasMultiplas.classList.remove('hidden-div');
    alternativa1RespostasMultiplas.style.backgroundColor = "#D5D3FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxRespostasMultiplas2(checkbox) {
  if (checkbox.checked) {
    respostaPraticarRespostasMultiplas.classList.remove('hidden-div');
    alternativa2RespostasMultiplas.style.backgroundColor = "#D5D3FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxRespostasMultiplas3(checkbox) {
  if (checkbox.checked) {
    respostaPraticarRespostasMultiplas.classList.remove('hidden-div');
    alternativa3RespostasMultiplas.style.backgroundColor = "#D5D3FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxRespostasMultiplas4(checkbox) {
  if (checkbox.checked) {
    respostaPraticarRespostasMultiplas.classList.remove('hidden-div');
    alternativa4.style.backgroundColor = "#D5D3FF"
    console.log('ESTOU CHECADO');
  }
}

function checkboxRespostasMultiplas5(checkbox) {
  if (checkbox.checked) {
    respostaPraticarRespostasMultiplas.classList.remove('hidden-div');
    alternativa5.style.backgroundColor = "#D5D3FF"
    console.log('ESTOU CHECADO');
  }
}

//FUNÇÕES PARA OS BOTÕES DE PRATICAR APARECER APÓS CLICAR EM TODAS AS ESTRATÉGIAS

let BotãoVamosPraticarAsserção = document.getElementById("vamos-praticar");

function BotãoPraticarAsserção() {
  if (AsserçãoEstrategiaCheck1 == 1 && AsserçãoEstrategiaCheck2 == 1 && AsserçãoEstrategiaCheck3 == 1 && AsserçãoEstrategiaCheck4 == 1 && AsserçãoEstrategiaCheck5 == 1) {
    BotãoVamosPraticarAsserção.style.display = "flex";
  }
}

let BotãoVamosPraticarLacuna = document.getElementById("vamos-praticar-lacuna");

function BotãoPraticarLacuna() {
  if (LacunaEstrategiaCheck1 == 1 && LacunaEstrategiaCheck2 == 1 && LacunaEstrategiaCheck3 == 1 && LacunaEstrategiaCheck4 == 1 && LacunaEstrategiaCheck5 == 1) {
    BotãoVamosPraticarLacuna.style.display = "flex";
  }
}

let BotãoVamosPraticarAssociação = document.getElementById("vamos-praticar-associação");

function BotãoPraticarAssociação() {
  if (AssociaçãoEstrategiaCheck1 == 1 && AssociaçãoEstrategiaCheck2 == 1 && AssociaçãoEstrategiaCheck3 == 1 && AssociaçãoEstrategiaCheck4 == 1 && AssociaçãoEstrategiaCheck5 == 1) {
    BotãoVamosPraticarAssociação.style.display = "flex";
  }
}

let BotãoVamosPraticarRespostaUnica = document.getElementById("vamos-praticar-resposta-unica");

function BotãoPraticarRespostaUnica() {
  if (RespostaUnicaEstrategiaCheck1 == 1 && RespostaUnicaEstrategiaCheck2 == 1 && RespostaUnicaEstrategiaCheck3 == 1 && RespostaUnicaEstrategiaCheck4 == 1) {
    BotãoVamosPraticarRespostaUnica.style.display = "flex";
  }
}

let BotãoVamosPraticarRespostasMultiplas = document.getElementById("vamos-praticar-respostas-multiplas");

function BotãoPraticarRespostasMultiplas() {
  if (RespostasMultiplasEstrategiaCheck1 == 1 && RespostasMultiplasEstrategiaCheck2 == 1 && RespostasMultiplasEstrategiaCheck3 == 1 && RespostasMultiplasEstrategiaCheck4 == 1 && RespostasMultiplasEstrategiaCheck5 == 1) {
    BotãoVamosPraticarRespostasMultiplas.style.display = "flex";
  }
}


//FUNÇÃO DAR ZOOM IMAGENS QUESTÕES NO MOBILE

let imgLacuna = document.getElementById("img-lacuna");
let imgLacunaMobile = document.getElementById("img-lacuna-mobile");

function zoomImagemMobile() {
  const mediaMobile = window.matchMedia("(max-width: 767px)");

  function ImagemLacunaResponsivo() {
    if (mediaMobile.matches) {
      imgLacuna.style.display = "none";
      imgLacunaMobile.style.display = "block";
    }
    else {
      estrategiaLacuna1Appear();
    }
  }
  mediaMobile.addEventListener('change', ImagemLacunaResponsivo);

  // Chama a função inicialmente
  ImagemLacunaResponsivo();
}