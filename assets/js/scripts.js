function scrollFunction() {
    console.log('Si')
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0.432)";
    } else {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}
//SCRIPT COOKIES---
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
//reseteamos las clases de idioma
function resetear(){
    document.querySelector("#eu").classList.remove("idioma-select");
    document.querySelector("#es").classList.remove("idioma-select");
    document.querySelector("#en").classList.remove("idioma-select");
}

//función en la que cambiamos el idioma
function cambio(){
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
