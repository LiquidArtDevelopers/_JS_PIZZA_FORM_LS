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
            //creamos la cookie del idioma
            console.log("cookie creada: "+ event.target.id);
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

//función en la que cambiamos el idioma
function cambioIdioma(){

    cookie.setCookieName('idiomas');
    //Comprobamos que exista la cookie
    if (cookie.getCookie()!="") {
        idioma=cookie.getCookie();
    } else {
        cookie.setCookie("idiomas", "es", 90);
        idioma="es";
    }

    //en función de la var, construimos los objetos en uno u otro idioma
    let jsonIdioma = "";
    jsonIdioma = `assets/json/${idioma}.json`;
    document.querySelector(`#${idioma}`).classList.add("idioma-select");
    
    //recorremos todos los elementos del json y buscamos una id con su misma clave
    fetch(jsonIdioma)
    .then(response =>{
        if(response.ok)
            return response.text()
        else
            throw new Error(response.status);
    })
    .then(data =>{
        //paseamos el json
        const iJs=JSON.parse(data);
        //recorremos las claves del json parseado 
        for (var clave in iJs){
            //si es una clave, nos quedamos con el valor
            if (iJs.hasOwnProperty(clave)) {
              //mostramos los datos y los índices en la consola por si erramos en alguna texto
              /* console.log("Clave: " + clave+ " - Valor: " + iJs[clave]); */
              document.querySelector(`.tx${clave}`).innerHTML=iJs[clave];
              /* document.querySelector(`#tx${clave}`).innerHTML=iJs[clave]; */
            }
          }
        console.log("cookie de idioma establecida en: "+ idioma);
    })
    .catch(err =>{
        //por si el json da error, le metemos precios
        console.error("ERROR", err.message)        
    });

}

