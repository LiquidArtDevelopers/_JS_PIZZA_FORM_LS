export default function componentes(){
    window.onscroll = function() {scrollFunction()};
}

//SCRIPT SCROLL NAV-----------------
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0.432)";
    } else {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    /* if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.body.style.backgroundImage = "url('../img/logos/Entramado_verde.svg')";
    } else {
        document.body.style.backgroundImage = "url('../img/logos/Entramado_rojo.svg')";
    } */
}