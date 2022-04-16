let existe = false;
export default function modales(){
    document.body.addEventListener("click", function(event){        
        //escuchamos los  botones del carousel de pizzas
        if(event.target.classList.contains("imgOferta")){        
            //enviamos el valor de la etiqueta con el SRC del archivo en HQ
            modalesOfertas(event.target.getAttribute('hq'));
        }
        //escuchamos si cerramos el modal de ofertas
        if(event.target.classList.contains("fondo_modal_oferta") || event.target.classList.contains("x_cierre")){       
            //enviamos el valor de la etiqueta con el SRC del archivo en HQ
            cerrarModal();
        }
    })

    window.onload = function() { 
        document.onkeydown = mostrarInformacionCaracter;
    }
    function mostrarInformacionCaracter(evObject) {

        /* console.log(String.fromCharCode(evObject.which));
        console.log(evObject.keyCode); */

        //si pulsamos ESC y existe el modal abierto, lo cerramos.
        if (evObject.keyCode == 27 && existe == true){
            /* calculadora.elements[15].focus(); */
            cerrarModal();              
        }
    }

}

//función para cerrar el modal.
const cerrarModal=()=>{
    document.querySelector("#modal_ofertas").remove();
    existe = false;
}

//función para mostrar el modal
const modalesOfertas=(srcFoto)=>{
    console.log("oferta clickada: "+ srcFoto);
    //creamos el HTML con la ventana modal
    var modalOfertaHTML = `<div id="modal_ofertas" class="fondo_modal_oferta"><div class="oferta_modal"><span class="x_cierre">X</span><img src="${srcFoto}" alt=""></div></div>`;
    //dibujamos el HTML
    const cabecera = document.querySelector("#cabecera");
    cabecera.insertAdjacentHTML("afterend",modalOfertaHTML);
    existe = true;
}
export const modalAlertPedido=(msg)=>{
    let contentModalWindow=`
    <div class="modalInfoPedido">
        <div class="modal">
        <img class="humo" src="assets/img/logos/pointer03.png" alt="">
        <img src="./assets/img/logos/pointer02.png" alt="pizza" class="img_pizza"> 
            <div class='modal-text'>
                <p>${msg}</p>
            </div>
            <span class='close'>X</span>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('afterbegin',contentModalWindow);
    let $modal_window=document.querySelector('.modalInfoPedido');
    document.addEventListener('click',(e)=>{
        if(e.target.matches('.close')){
            $modal_window.remove();
            e.target.removeEventListener('click',e.preventDefault(),true);
        }
    });
}
