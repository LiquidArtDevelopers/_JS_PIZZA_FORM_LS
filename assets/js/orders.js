
export default function pedido(){    
    comanda();
}

function comanda(){
    //escuchar la clase part02-opc
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("nota1")){        
            console.log("Tamaño: "+ event.target.id);
            limpiar_comanda(1)
            insertar_comanda(event.target.id)            
        }
    })
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("nota2")){        
            console.log("tipo: "+ event.target.id);            
        }
    })
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("nota3")){        
            console.log("ingrediente: "+ event.target.id);            
        }
    })    
}

function limpiar_comanda(){

}

function insertar_comanda(com){

    switch(com){
        case "peq":
            break;
        case "med":
            break;
        case "fam":
            break;
        case "fin":
            break;        
        case "gru":
            break;
        case "cqu":
            break;
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        case "6":
            break;     
    }
}







