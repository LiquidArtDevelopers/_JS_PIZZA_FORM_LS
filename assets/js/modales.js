export default function modales(){

    document.body.addEventListener("click", function(event){        
        //escuchamos los  botones del carousel de pizzas
        if(event.target.classList.contains("imgOferta")){        
            //enviamos el valor de la etiqueta con el SRC del archivo en HQ
            modalesOfertas(event.target.getAttribute('hq'));
        }
        //escuchamos si cerramos el modal de ofertas
        if(event.target.classList.contains("fondo_modal") || event.target.classList.contains("x_cierre")){       
            //enviamos el valor de la etiqueta con el SRC del archivo en HQ
            cerrarModal();
        }
    })
}

const cerrarModal=()=>{
    document.querySelector("#modal_ofertas").remove();
}

//función para mostrar un modal
const modalesOfertas=(srcFoto)=>{
    console.log("oferta clickada: "+ srcFoto);
    //dibujamos el HTML con la ventana modal
    var modalOfertaHTML = `<div id="modal_ofertas" class="fondo_modal"><div class="oferta_modal"><span class="x_cierre">X</span><img src="${srcFoto}" alt=""></div></div>`;

    const cabecera = document.querySelector("#cabecera");
    cabecera.insertAdjacentHTML("afterend",modalOfertaHTML);

}