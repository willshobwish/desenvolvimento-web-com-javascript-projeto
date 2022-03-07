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
//
(function ($) {
    $.fn.fadeinfunction = function () {
        this.hide()
            .delay((duracao += adicaoDuracao))
            .fadeIn(duracaoFadeIn);
        return this;
    };
})(jQuery);

//letiaveis para especificar a duracao do ms do "fadeIn()"
let duracao = 250;
let adicaoDuracao = 250;
let duracaoFadeIn = 500;

// Fade in nos botoes do menu, da esquerda para a direita
$(".content-title").fadeinfunction();
$(".content-description").fadeinfunction();
$(".content-description-posts").fadeinfunction();

//Posts
$.getJSON(
    "projeto/js/lista-de-postagens.json",
    function (data, textStatus, jqXHR) {
        console.log("Geração dinâmica das postagens funcional");
        console.log(
            "Quantidade de objetos dentro JSON: " +
                Object.keys(data.dados["0"].data).length
        );
        console.log(data.dados["0"].data);
        let tamanhoDaLista = Object.keys(data).length / 2 - 1;
        let numberOfPost = Object.keys(data.dados).length / 2 - 1;
        console.log(numberOfPost);
        while (numberOfPost >= 0) {
            let $posts = $("<div/>")
                .attr("id", "post-" + numberOfPost)
                .addClass("post-description-div")
                .html(
                    data.dados[numberOfPost].data +
                        "<br>" +
                        data.dados[numberOfPost].conteudo
                );
            $(".content-description-posts").append($posts);
            numberOfPost -= 1;
        }
    }
);
