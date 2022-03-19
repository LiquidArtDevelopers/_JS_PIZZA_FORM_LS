let conta

export default function ofertas(){    
    rellenarOfertas()

    document.body.addEventListener("click", function(event){        
        //escuchamos los botones del carousel de pizzas
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

    

}


