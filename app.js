window.onscroll = function () {

    if (document.documentElement.scrollTop > 99) {
        document.getElementById("retour").style.background = "#f7b022";
        document.getElementById("up").style.color = "white";
    }
    else {
        document.getElementById("retour").style.background = "none";
        document.getElementById("up").style.color = "transparent";
    }


}
$(function(){
    $("#retour").click(function(){
        $("html, body").animate({scrollTop: 0},"slow");
    });
});

alert("Bonjour et bienvenue, n'hesite pas à slider vers la droite sur les photos pour faire défiler le carrousel :)"
     );
