// A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function () {
    console.log("ready!");
});

//Funcao para adicionar fade in em elementos do HTML
(function ($) {
    $.fn.fadeinfunction = function () {
        this.hide()
            .delay((duracao += adicaoDuracao))
            .fadeIn(duracaoFadeIn);
        return this;
    };
})(jQuery);

//variavies para especificar a duracao do ms do "fadeIn()"
let duracao = 250;
let adicaoDuracao = 250;
let duracaoFadeIn = 500;

//Funcao para executar o fade in
$(".content-title").fadeinfunction();
$(".content-description").fadeinfunction();
$(".content-description-posts").fadeinfunction();
