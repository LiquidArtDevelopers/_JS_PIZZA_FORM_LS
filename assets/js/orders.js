
export default function pedido(){    
    comanda();
}

function comanda(){
    //escuchar la clase part02-opc
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("nota")){        
            console.log("Tamaño: "+ event.target.id);            
        }
    })
    //pintamos la selección
    //pintamos la pizza
}






