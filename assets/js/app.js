//Escucha el evento antes de cargar el contenido del documento html.
addEventListener('DOMContentLoaded',()=>{
        cambio();
        llamarVentanaCookies();
        //Escuchamos la selección de idioma
        document.body.addEventListener("click", function(event){
            if(event.target.classList.contains("idioma")){
                /* //creamos la cookie del idioma
                console.log("cookie creada: "+ event.target.id); */
                setCookie("idiomas", event.target.id, 90);
                idioma = event.target.id
                resetear()
                cambio()
            }
        });
    //SCRIPT NAV---
    window.onscroll = function() {scrollFunction()};  
});