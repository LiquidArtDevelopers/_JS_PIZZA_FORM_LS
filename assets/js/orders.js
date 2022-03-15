
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
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("nota3Sel")){        
            console.log("Quitamos ingrediente: "+ event.target.id);
            document.querySelector(`#${event.target.id}`).remove()
        }
    })  
}

function limpiar_comanda(){

}

function insertar_comanda(com){
    const nota1Sel= document.querySelector(".nota1Sel");
    const nota2Sel= document.querySelector(".nota2Sel");
    const selecciones = document.querySelector("#selecciones")
    switch(com){
        case "peq":
            nota1Sel.style.display="block";
            nota1Sel.style.top="205px"
            nota1Sel.style.left="19px"
            break;
        case "med":
            nota1Sel.style.display="block";
            nota1Sel.style.top="205px";
            nota1Sel.style.left="160px";
            break;
        case "fam":
            nota1Sel.style.display="block";
            nota1Sel.style.top="202px";
            nota1Sel.style.left="312px";
            break;
        case "fin":
            nota2Sel.style.display="block";
            nota2Sel.style.top="340px"
            nota2Sel.style.left="10px"
            break;        
        case "gru":
            nota2Sel.style.display="block";
            nota2Sel.style.top="340px"
            nota2Sel.style.left="125px"
            break;
        case "cqu":
            nota2Sel.style.display="block";
            nota2Sel.style.top="340px"
            nota2Sel.style.left="299px"
            break;
        default:

            //ver si existe para quitarlo
            console.log(document.querySelector(`.nota3Sel${com}`))
            if(document.querySelector(`.nota3Sel${com}`)==null){
                //si no está, dibujamos
                
                let topP = "",leftP ="", etiquetas="";

                switch(com){
                    case "1":
                        topP ="445px";
                        leftP = "45px";
                        break;
                    case "2":
                        topP ="445px";
                        leftP = "175px";
                        break;
                    case "3":
                        topP ="445px";
                        leftP = "330px";
                        break;
                    case "4":
                        topP ="530px";
                        leftP = "50px";
                        break;
                    case "5":
                        topP ="530px";
                        leftP = "180px";
                        break;
                    case "6":
                        topP ="530px";
                        leftP = "335px";
                        break;
                    case "7":
                        topP ="605px";
                        leftP = "55px";
                        break;
                    case "8":
                        topP ="605px";
                        leftP = "185px";
                        break;
                    case "9":
                        topP ="605px";
                        leftP = "340px";
                        break;                    
                }
                
                //Insertamos HTML y cambiamos Style
                etiquetas+=`<img id="i${com}" src="assets/img/select-ing.png" class="nota3Sel${com} nota3Sel" alt="">`            
                selecciones.insertAdjacentHTML('beforeend',etiquetas);
                document.querySelector(`.nota3Sel${com}`).insertAdjacentHTML('beforeend',etiquetas);            
                document.querySelector(`.nota3Sel${com}`).style.display="block";
                document.querySelector(`.nota3Sel${com}`).style.top=topP;
                document.querySelector(`.nota3Sel${com}`).style.left=leftP;

            }


             
                
             
    }
}







