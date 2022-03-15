
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
    //si hay click en la marca de ingrediente seleccionado, quitamos html de la marca
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("nota3Sel")){        
            console.log("Quitamos ingrediente: "+ event.target.id);
            document.querySelector(`#${event.target.id}`).remove()
        }
    })  
}


function insertar_comanda(com){
    const nota1Sel= document.querySelector(".nota1Sel");
    const nota2Sel= document.querySelector(".nota2Sel");
    const selecciones = document.querySelector("#selecciones")
    const resultado = document.querySelector("#resultado")
    switch(com){
        //marcamos tamaño
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
        //marcamos tipo de masa
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
        //marcamos (o desmarcamos)m ingredientes
        default:
            //si no existe, metemos            
            if(document.querySelector(`.nota3Sel${com}`)==null){
                let topP = "",leftP ="", etiquetas="", topping="", indexZ="";
                switch(com){
                    case "1":
                        topP ="445px";
                        leftP = "45px";
                        topping+=`<img id="t1" src="assets/img/extra-queso.png" alt="">`;
                        indexZ="2";
                        break;
                    case "2":
                        topP ="445px";
                        leftP = "175px";
                        indexZ="3";
                        break;
                    case "3":
                        topP ="445px";
                        leftP = "330px";
                        indexZ="5";
                        break;
                    case "4":
                        topP ="530px";
                        leftP = "50px";
                        indexZ="8";
                        break;
                    case "5":
                        topP ="530px";
                        leftP = "180px";
                        indexZ="6";
                        break;
                    case "6":
                        topP ="530px";
                        leftP = "335px";
                        indexZ="4";
                        break;
                    case "7":
                        topP ="605px";
                        leftP = "55px";
                        indexZ="10";
                        break;
                    case "8":
                        topP ="605px";
                        leftP = "185px";
                        indexZ="7";
                        break;
                    case "9":
                        topP ="605px";
                        leftP = "340px";
                        indexZ="9";
                        break;                    
                }
                
                //Insertamos HTML y cambiamos Style
                etiquetas+=`<img id="i${com}" src="assets/img/select-ing.png" class="nota3Sel${com} nota3Sel" alt="">`            
                selecciones.insertAdjacentHTML('beforeend',etiquetas);
                document.querySelector(`.nota3Sel${com}`).style.display="block";
                document.querySelector(`.nota3Sel${com}`).style.top=topP;
                document.querySelector(`.nota3Sel${com}`).style.left=leftP;
                
                console.log(`#t${com}`)
                resultado.insertAdjacentHTML('afterbegin',topping);
                /* document.querySelector("#resultado").innerHTML+=topping; */
                document.querySelector(`#t${com}`).style.display="flex";
                //document.querySelector(`#t${com}`).style.zindex=indexZ; 
            }


             
                
             
    }
}







