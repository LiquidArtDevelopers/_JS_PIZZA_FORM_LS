
export default function pedido(){    
    comanda();
}

function comanda(){
    
    //escuchar la clase part02-opc
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("nota1")){        
            console.log("Tamaño: "+ event.target.id);
            insertar_comanda(event.target.id)            
        }
    })
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("nota2")){        
            console.log("tipo: "+ event.target.id);
            insertar_comanda(event.target.id)            
        }
    })
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("nota3")){        
            console.log("ingrediente: "+ event.target.id);
            insertar_comanda(event.target.id)          
        }
    })    
}

function limpiar_comanda(){

}

function insertar_comanda(com){

    switch(com){
        case "peq":
            document.querySelector(".nota1Sel").style.display="block";
            document.querySelector(".nota1Sel").style.top="205px"
            document.querySelector(".nota1Sel").style.left="19px"
            break;
        case "med":
            document.querySelector(".nota1Sel").style.display="block";
            document.querySelector(".nota1Sel").style.top="205px";
            document.querySelector(".nota1Sel").style.left="160px";
            break;
        case "fam":
            document.querySelector(".nota1Sel").style.display="block";
            document.querySelector(".nota1Sel").style.top="202px";
            document.querySelector(".nota1Sel").style.left="312px";
            break;
        case "fin":
            document.querySelector(".nota2Sel").style.display="block";
            document.querySelector(".nota2Sel").style.top="340px"
            document.querySelector(".nota2Sel").style.left="10px"
            break;        
        case "gru":
            document.querySelector(".nota2Sel").style.display="block";
            document.querySelector(".nota2Sel").style.top="340px"
            document.querySelector(".nota2Sel").style.left="125px"
            break;
        case "cqu":
            document.querySelector(".nota2Sel").style.display="block";
            document.querySelector(".nota2Sel").style.top="340px"
            document.querySelector(".nota2Sel").style.left="299px"
            break;
        default:
            //ver si existe para quitarlo
            //--
            //si no está, dibujamos
            let topP = "",leftP ="";
            switch(com){
                case "1":
                    topP ="445px";
                    leftP = "45px";
                    break;
                case "2":
                    topP ="445px";
                    leftP = "170px";
                    break;
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
            }
            //pendiente += del html para que acumule las etiquetas (sigo mñn)
            console.log(com)
            document.querySelector("#selecciones").innerHTML=`<img src="assets/img/select-ing.png" class="nota3Sel${com}" alt="">`
            document.querySelector(`.nota3Sel${com}`).style.display="block";
            document.querySelector(`.nota3Sel${com}`).style.top=topP;
            document.querySelector(`.nota3Sel${com}`).style.left=leftP;
            break;     
    }
}







