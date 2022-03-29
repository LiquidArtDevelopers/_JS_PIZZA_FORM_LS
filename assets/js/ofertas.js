let conta

export default function ofertas(){    
    rellenarOfertas()

    document.body.addEventListener("click", function(event){        
        //escuchamos los  botones del carousel de pizzas
        if(event.target.classList.contains("flecha")){        
            console.log("pestaña: "+ event.target.id);
            switch(event.target.id){
                case "fiz":
                    moverIzda();
                    break;
                case "fde":                    
                    moverDcha()                 
                    break;
            }
        }
    })    
}

function moverIzda(){
    let hijoUltimo = document.querySelector("#ofertas").lastElementChild;
    console.log(hijoUltimo)
    document.querySelector("#ofertas").removeChild(hijoUltimo)
    document.querySelector("#ofertas").insertAdjacentElement("afterbegin", hijoUltimo)
    
}
function moverDcha(){
    let hijoPrimero = document.querySelector("#ofertas").firstElementChild;
    console.log(hijoPrimero)
    document.querySelector("#ofertas").removeChild(hijoPrimero)
    document.querySelector("#ofertas").insertAdjacentElement("beforeend", hijoPrimero)    
}


function rellenarOfertas(){
    let ofertaHTML= "",eur= "",cent= "";
    let pos = 0;
    let contador = 0;
    //cogemos el json con las ofertas
    fetch("assets/json/ofertas.json")
    //recorremos todos los elementos del json y buscamos una id con su misma clave
    .then(response =>{
        if(response.ok)
            return response.text()
        else
            throw new Error(response.status);
    })
    .then(data =>{
        //paseamos el json
        const ofertaJs=JSON.parse(data);
        //recorremos las claves del json parseado
        for (var clave in ofertaJs){
            //si es una clave, nos quedamos con el valor
            if (ofertaJs.hasOwnProperty(clave)) {

                //desglosamos el precio en euros y céntimos
                const oOferta = new Object(ofertaJs[clave])
                let precio = oOferta.precio;
                if(String(precio).indexOf(",")==-1){
                    eur = String(precio);
                    cent = "00";
                }else{
                    pos = Number(String(precio).indexOf(","));
                    console.log("pos"+pos);
                    eur = String(precio).substring(0,pos);
                    cent = String(precio).substring(pos+1,pos+3);
                }
                //desarrollamos el div
                ofertaHTML = `<div id="of${contador+=1}" class="oferta"><img hq="${oOferta.srcHQ}" class="imgOferta" src="${oOferta.src}" alt=""><p class="oTexto">${oOferta.texto}</p><div class="anadir" data-nombre="${oOferta.texto}" data-precio="${oOferta.precio}"><img src="assets/img/varias/carritoADD.svg" alt=""></div><p class="oEuros">${eur}<span>,${cent}€</span></p></div>`
                //escribimos el html dinámico
                document.querySelector("#ofertas").insertAdjacentHTML("afterbegin",ofertaHTML);
            }
          }
        console.log();
    })
    .catch(err =>{
        //por si el json da error, le metemos precios
        console.error("ERROR", err.message)        
    });

}



