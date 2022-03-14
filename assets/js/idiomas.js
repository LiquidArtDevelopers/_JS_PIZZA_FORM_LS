//SCRIPT EXCLUSIVO PARA IDIOMAS---
    //VARIABLES
    let idioma="";

export default function idiomas(){
    cambioIdioma();
    //Escuchamos la selección de idioma
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("idioma")){
            /* //creamos la cookie del idioma
            console.log("cookie creada: "+ event.target.id); */
            setCookie("idiomas", event.target.id, 90);
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
let idioma="";

//función en la que cambiamos el idioma
function cambioIdioma(){
<<<<<<< HEAD
  //Comprobamos que exista la cookie
  if (getCookie("idiomas")!="") {
      idioma=getCookie("idiomas");
      console.log("cookie de idioma establecida en: "+ idioma);
  } else {
      setCookie("idiomas", "es", 90);
      idioma="es";
  }
=======
//Comprobamos que exista la cookie
if (getCookie("idiomas")!="") {
    idioma=getCookie("idiomas");
    console.log("cookie de idioma establecida en: "+ idioma);
} else {
    setCookie("idiomas", "es", 90);
    idioma="es";
}
>>>>>>> c4ee4a1e360c1f32d1c42f9532d4813fc5a43963
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
//SCRIPT COOKIES------------------

//creamos cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//recogemos cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}