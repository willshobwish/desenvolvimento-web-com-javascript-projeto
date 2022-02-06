$(document).ready(function () {
    console.log("Ready for use!");
});

var duracao = 250;
var adicaoDuracao = 250;
var duracaoFadeIn = 500;

// Criacao dos menus em js, ficara mais facil caso tenha alguma alteracao nos botoes do menu

// Index
// prettier-ignore
$("#index")
    .append('<a href="./projeto/pages/page1-posts.html" id="posts" class="menu-button">Posts</a>')
    .append('<a href="./projeto/pages/page2-projetos.html" id="projetos" class="menu-button">Projetos</a>')
    .append('<a href="./projeto/pages/page3-contato.html" id="contato" class="menu-button">Contato</a>');

//Restante da pagina
// prettier-ignore
$("#page")
    .append('<a href="./page1-posts.html" id="posts" class="menu-button">Posts</a>')
    .append('<a href="./page2-projetos.html" id="projetos" class="menu-button">Projetos</a>')
    .append('<a href="./page3-contato.html" id="contato" class="menu-button">Contato</a>');

// Fade in no conteudo do site quando entra ou vai para o outro link
// prettier-ignore
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
