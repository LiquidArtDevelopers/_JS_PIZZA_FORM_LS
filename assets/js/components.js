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
    
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.body.classList.add("cambio_fondo")
    } else {
        document.body.classList.remove("cambio_fondo")
    }
}