// A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function () {
    console.log("ready!");
});

// Criacao dos menus em js, ficara mais facil caso tenha alguma alteracao nos botoes do menu, assim, alterara simultaneamente as quatro paginas.
// Index
$("#index") //Seleciona a id do div
    .append(
        '<a href="./projeto/pages/page1-posts.html" id="posts" class="menu-button">Posts</a>'
    )
    .append(
        '<a href="./projeto/pages/page2-projetos.html" id="projetos" class="menu-button">Projetos</a>'
    )
    .append(
        '<a href="./projeto/pages/page3-contato.html" id="contato" class="menu-button">Contato</a>'
    );

// Restante da pagina
$("#page") //Seleciona a id do div
    .append(
        '<a href="./page1-posts.html" id="posts" class="menu-button">Posts</a>'
    )
    .append(
        '<a href="./page2-projetos.html" id="projetos" class="menu-button">Projetos</a>'
    )
    .append(
        '<a href="./page3-contato.html" id="contato" class="menu-button">Contato</a>'
    );

//Variaveis para especificar a duracao do ms do "fadeIn()"
var duracao = 250;
var adicaoDuracao = 250;
var duracaoFadeIn = 500;

// Fade in no conteudo do site quando entra ou vai para o outro link
$(".title").hide().fadeIn(duracaoFadeIn);
$(".description").hide().delay(250).fadeIn(duracaoFadeIn);

// Fade in nos botoes do menu, da esquerda para a direita
$("#contato").hide().delay(duracao).fadeIn(duracaoFadeIn);
$("#projetos")
    .hide()
    .delay((duracao += adicaoDuracao))
    .fadeIn(duracaoFadeIn);
$("#posts")
    .hide()
    .delay((duracao += adicaoDuracao))
    .fadeIn(duracaoFadeIn);
