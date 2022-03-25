export default function componentes(){
    window.onscroll = function() {scrollFunction()};
}

//SCRIPT SCROLL NAV-----------------
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navegador").style.backgroundColor = "rgb(65, 65, 65)";
    } else {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.body.classList.add("cambio_fondo")
    } else {
        document.body.classList.remove("cambio_fondo")
    }

    /* if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.body.classList.add("cambio_fondo2")
    } else {
        document.body.classList.remove("cambio_fondo2")
    } */

    /* if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        document.body.classList.add("cambio_fondo3")
    } else {
        document.body.classList.remove("cambio_fondo3")
    } */
}