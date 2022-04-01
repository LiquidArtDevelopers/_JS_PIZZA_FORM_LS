export default function componentes(){
    window.onscroll = function() {scrollFunction()};
}

//SCRIPT SCROLL NAV-----------------
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navegador").style.backgroundColor = "rgb(65, 65, 65)";
    } else {
        document.getElementById("navegador").style.backgroundColor = "rgba(65, 65, 65, 0.5)";
    }
    
    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        document.body.classList.add("cambio_fondo")
    } else {
        document.body.classList.remove("cambio_fondo")
    }

    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.body.classList.add("cambio_fondo2")
    } else {
        document.body.classList.remove("cambio_fondo2")
    }

    if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
        document.body.classList.add("cambio_fondo3")
    } else {
        document.body.classList.remove("cambio_fondo3")
    }
}