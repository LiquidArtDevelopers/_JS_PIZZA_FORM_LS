//Escucha el evento antes de cargar el contenido documento.
addEventListener('DOMContentLoaded',()=>{
        //VARIABLES
        let idioma="";
        //Comprobamos que exista la cookie
        if (getCookie("idiomas")!="") {
            idioma=getCookie("idiomas");
            console.log("cookie de idioma establecida en: "+ idioma);
        } else {
            setCookie("idiomas", "es", 90);
            idioma="es";
        }
        cambio();
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
});

//SCRIPT NAV---
window.onscroll = function() {scrollFunction()};        
