var contador = 0;

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
            //Quitamos ralla de ingrediente
            console.log("Quitamos ingrediente: "+ event.target.id);
            document.querySelector(`#${event.target.id}`).remove();
            //Quitamos topping            
            let idt = event.target.id.split("i").join("t");
            document.querySelector(`#${idt}`).remove();
            contador-=1;
            console.log(contador);
            //si existe topping de queso rallado y el contador es =< que 2, quitamos el queso-rallado
            if(contador<=2 && document.querySelector(`#t10`)!=null){
                document.querySelector(`#t10`).remove();
            }   
        }
    })  
}


function insertar_comanda(com){
    const nota1Sel= document.querySelector(".nota1Sel");
    const nota2Sel= document.querySelector(".nota2Sel");
    const selecciones = document.querySelector("#selecciones");
    const resultado = document.querySelector("#resultado");
    
    contador=Number(contador);
    switch(com){
        //marcamos tamaño
        case "peq":
            nota1Sel.style.display="block";
            nota1Sel.style.top="205px";
            nota1Sel.style.left="19px";
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
            nota2Sel.style.top="340px";
            nota2Sel.style.left="10px";
            break;        
        case "gru":
            nota2Sel.style.display="block";
            nota2Sel.style.top="340px";
            nota2Sel.style.left="125px";
            break;
        case "cqu":
            nota2Sel.style.display="block";
            nota2Sel.style.top="340px";
            nota2Sel.style.left="299px";
            break;
        //marcamos (o desmarcamos)m ingredientes
        default:
            //si no existe, metemos            
            if(document.querySelector(`.nota3Sel${com}`)==null){
                let topP = "",leftP ="", etiquetas="", topping="";
                let indexxx;
                indexxx = Number(indexxx);
                switch(com){
                    case "1":
                        topP ="445px";
                        leftP = "45px";                        
                        indexxx=2;
                        topping+=`<img id="t1" src="assets/img/extra-queso.png" alt="">`;                        
                        break;
                    case "2":
                        topP ="445px";
                        leftP = "175px";
                        indexxx=3;
                        topping+=`<img id="t2" src="assets/img/queso-cabra.png" alt="">`;
                        break;
                    case "3":
                        topP ="445px";
                        leftP = "330px";
                        indexxx=5;
                        topping+=`<img id="t3" src="assets/img/aceitunas.png" alt="">`;
                        break;
                    case "4":
                        topP ="530px";
                        leftP = "50px";
                        indexxx=8;
                        topping+=`<img id="t4" src="assets/img/pimiento-rojo.png" alt="">`;
                        break;
                    case "5":
                        topP ="530px";
                        leftP = "180px";
                        indexxx=6;
                        topping+=`<img id="t5" src="assets/img/pimiento-verde.png" alt="">`;
                        break;
                    case "6":
                        topP ="530px";
                        leftP = "335px";
                        indexxx=4;
                        topping+=`<img id="t6" src="assets/img/salami.png" alt="">`;
                        break;
                    case "7":
                        topP ="605px";
                        leftP = "55px";
                        indexxx=10;
                        topping+=`<img id="t7" src="assets/img/champis.png" alt="">`;
                        break;
                    case "8":
                        topP ="605px";
                        leftP = "185px";
                        indexxx=7;
                        topping+=`<img id="t8" src="assets/img/cebolla.png" alt="">`;
                        break;
                    case "9":
                        topP ="605px";
                        leftP = "340px";
                        indexxx=9;
                        topping+=`<img id="t9" src="assets/img/bacon.png" alt="">`;
                        break;                    
                }                
                //Insertamos HTML y cambiamos Style de las marcas
                etiquetas+=`<img id="i${com}" src="assets/img/select-ing.png" class="nota3Sel${com} nota3Sel" alt="">`            
                selecciones.insertAdjacentHTML('beforeend',etiquetas);
                document.querySelector(`.nota3Sel${com}`).style.display="block";
                document.querySelector(`.nota3Sel${com}`).style.top=topP;
                document.querySelector(`.nota3Sel${com}`).style.left=leftP;
                
                //Insertamos HTML y cambiamos Style del topping
                resultado.insertAdjacentHTML('beforeend',topping);
                document.querySelector(`#t${com}`).style.display="block";
                document.querySelector(`#t${com}`).style.zIndex=indexxx;
                console.log();
                contador+=1
                console.log(contador)
                if(contador==3){
                    let topping2=`<img id="t10" src="assets/img/queso-rallado.png" alt="">`;
                    indexxx=11;
                    resultado.insertAdjacentHTML('beforeend',topping2);
                    document.querySelector("#t10").style.display="block";
                    document.querySelector("#t10").style.zIndex=indexxx;
                }              
            }             
    }
}








