$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo

  document.getElementById('iniciar').addEventListener('click', function() {
    // Limpa a tela inicial
   home.classList.add('hidden-div');
   menu.classList.remove('hidden-div');
});

  //  Criação das variáveis 
  let data;
  var num = 0;
  let iniciar = document.getElementById('iniciar');
  let home = document.getElementById('home');
  let menu = document.getElementById('menu');


  // Função para carregar o JSON
  async function loadJSON() {
      try {
          const response = await fetch('data.json');
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          data = await response.json();
          // Carregar a página inicial ao abrir
          //loadPage('home');
      } catch (error) {
          console.error('Erro ao carregar o JSON:', error);
      }
  }

  function loadPage(page) {
      const pageData = data.pages[page];
      if (pageData) {
          document.getElementById('teste').innerText = pageData.title;

          // Limpar o conteúdo anterior
          const contentDiv = document.getElementById('teste');
          contentDiv.innerHTML = ''; // Limpa o conteúdo anterior

          // Adicionar todos os textos do array content como parágrafos
          pageData.content.forEach(text => {
              const paragraph = document.createElement('p') // Cria o paragrafo
              paragraph.className = `${page}`; // Adiciona a classe ao paragrafo 
              paragraph.innerHTML = text; // Define o texto do parágrafo
              contentDiv.appendChild(paragraph); // Adiciona o parágrafo ao div
          });
      }
  }

  // Chamar a função para carregar o JSON
  loadJSON();

  // Adicionar funções aos botões

  iniciar.addEventListener('click', function () {
    RenderizarTexto();
  });
})
