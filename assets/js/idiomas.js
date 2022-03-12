//SCRIPT EXCLUSIVO PARA IDIOMAS---

//reseteamos las clases de idioma
function resetearIdioma(){
    document.querySelector("#eu").classList.remove("idioma-select");
    document.querySelector("#es").classList.remove("idioma-select");
    document.querySelector("#en").classList.remove("idioma-select");
}

//función en la que cambiamos el idioma
function cambioIdioma(){
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