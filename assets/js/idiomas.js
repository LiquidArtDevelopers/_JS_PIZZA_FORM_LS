//SCRIPT EXCLUSIVO PARA IDIOMAS---

import Cookie from "./Cookie.js";


//Instanciamos el objeto Cookie.
const cookie=Cookie.getInstance();
    //VARIABLES
    let idioma="";
export default function idiomas(){
    cambioIdioma();
    //Escuchamos la selección de idioma
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("idioma")){
            /* //creamos la cookie del idioma
            console.log("cookie creada: "+ event.target.id); */
            cookie.setCookie("idiomas", event.target.id, 90);
            idioma = event.target.id
            resetearIdioma()
            cambioIdioma()
        }
    });
}

 //reseteamos las clases de idioma
 function resetearIdioma(){
    document.querySelector("#eu").classList.remove("idioma-select");
    document.querySelector("#es").classList.remove("idioma-select");
    document.querySelector("#en").classList.remove("idioma-select");
}
/* let idioma=""; */

//función en la que cambiamos el idioma
function cambioIdioma(){
    cookie.setCookieName('idiomas');
//Comprobamos que exista la cookie
if (cookie.getCookie()!="") {
    idioma=cookie.getCookie();
    console.log("cookie de idioma establecida en: "+ idioma);
} else {
    cookie.setCookie("idiomas", "es", 90);
    idioma="es";
}
    //en función de la var, construimos los objetos en uno u otro idioma
    switch(idioma){
        case "eu":
            var iCabecera = {
                text0:"deskontuak",
                text1:"zure ezkarea",
                text2:"sukaldaritza",
            };                    
            document.querySelector("#eu").classList.add("idioma-select");
            break;
        case "es":
            var iCabecera = {
                text0:"ofertas",
                text1:"tu pedido",
                text2:"la cocina",
            };        
            document.querySelector("#es").classList.add("idioma-select");
            break;
        case "en":
            var iCabecera = {
                text0:"discounts",
                text1:"your order",
                text2:"kitchen",
            };   
            document.querySelector("#en").classList.add("idioma-select");
            break;
    }

    //recorremos los valores del objeto creado
    let c = Object.values(iCabecera)
    for(let i=0; i< c.length; i++){
        //escribimos el html
        document.querySelector("#nav-enlaces-"+i).innerHTML=c[i];
    }
    console.log("cookie de idioma establecida en: "+ idioma);
}

