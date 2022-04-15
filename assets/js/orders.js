import { modalAlertPedido } from "./modales.js";

/**
 * @author MDMGN & LiquidArt
 */
'use strict'; // Activamos el uso estricto de JS.

export default function pedido(){
    //escuchamos si hay click en carrito para mostrar la nota
    document.body.addEventListener("click", function(event){        
        //escuchamos los  botones del carousel de pizzas
        if(event.target.classList.contains("carrito")){        
            //cambiamos el estilo y mostramos la nota
            if (existe == 0){
                $box_comprar.style.right="10px";
                existe = 1
            }else{
                $box_comprar.style.right="-400px";
                existe = 0
            }
        }        
    })
    comanda();
    escribirPedido();
    addToCart();
}

let contador = 0, existe = 0, idMenu=0;
const $box_comprar=document.querySelector('.comprar');
const $notaPizza=document.querySelector('.list-fact');
const nota1Sel= document.querySelector(".nota1Sel");
const nota2Sel= document.querySelector(".nota2Sel");
const precio = document.querySelector("#precio");

//Array para el precio donde el precio se suma de entre todos sus valores: masa[0],tipo[1], topping[2], bebida[3] y varios[4].
let ticket = [0,0,0,0,0];

//Creamos el objeto Menú. Habrá varios objetos menú en una misma comanda.
const objMenu={
    id_menu:'0',
    masa:'',
    tipo:'',
    topping:[],
    bebida:[],
    otros:[],
    precio:0
}
//array comanda, que se compondrá de todos los objetos menú que haya.
let objComanda=[];
const setObjComanda=()=>{
    let getObjComanda=JSON.parse(localStorage.getItem('objComanda'));
    if(getObjComanda!==null) objComanda=getObjComanda;
}
const cartAnimated=()=>{
    const $cart=document.querySelector('.carrito');
    $cart.classList.add('animated');
    setTimeout(()=>{
        $cart.classList.remove('animated');
    },500);
}
const updateCantidadCart=(objComanda)=>document.querySelector('.caja-cantidad p').textContent=String(objComanda.length);
setObjComanda();
updateCantidadCart(objComanda);
const setIdMenu=(id)=>{
    objComanda.forEach((obj)=>{
        Object.entries(obj).forEach(([key,value]) => {
            if(key=='id' && Number(value)) idMenu=Number(value);
        });
    });
    idMenu+=1;
}
/**
 * Obtenemos el contenido del texto del elemento.
 * @param {String} id Recibimos 'id' en String.
 */
const getTextContentById=(id)=> document.getElementById(id).textContent;
const getTextContent=(type)=> document.querySelector(type).textContent; 
/**
 * Insertamos los datos para imprimirlos en el ticket.
 * @returns {void}
 */
const escribirPedido=()=>{
    /**
     * @type {Element} Elemento 'p' con la clase precio. 
     */
    const pr=document.querySelector('.precio');
    /**
     * @type {String} Template String para almacenar los datos del pedido en la libreta.
     */
    let template_fact='';
    /**
     * Recogemos los valores elegidos en la libreta y creamos una lista por cada uno.
     * @param {Array<String>} arr Array de un objeto.
     */
    const createLiTextContent=(arr)=>{
        arr.forEach((value,index,arr)=>{
            if(arr[index]){
               template_fact+=`<li> ${getTextContentById(value)}</li>`;
            }
        });
    }
    /**
     * @type {Boolean} Alamacenamos si se hizo un click para insertarlos en la lista.
     */
    let click=false, totalPrice=0;
    document.addEventListener('click',(e)=>{
        if(e.target.matches('.carrito')){
            setObjComanda();
            if(objComanda){
                for(const comanda of objComanda){
                    Object.entries(comanda).forEach(([key,value])=>{
                        if(comanda.id_menu && value){
                            if(key==='id_menu')template_fact+=`<h3>Menú Perzonalizado <span>${comanda.precio}€</span></h3>`,totalPrice+=Number(comanda.precio);
                            if(key==='masa') template_fact+= `<li>${getTextContent('.txt5')} ${getTextContentById(value)}</li>`;
                            if(key==='tipo') template_fact+=`<li> ${getTextContent('.txt9')} ${getTextContentById(value)}</li>`;
                            if(key==='topping') createLiTextContent(comanda[key]);
                            if(key==='bebida') createLiTextContent(comanda[key]);
                            if(key==='otros') createLiTextContent(comanda[key]);
                        }
                        if(comanda.id_oferta && value){
                            if(key==='id_oferta') template_fact+=`<li class='pOferta'>${comanda.menu} <span>${comanda.precio}€</span></li>`,totalPrice+=Number(comanda.precio.replace(',','.'));
                        }
                    });
                }
            }
            Object.entries(objMenu).forEach(([key,value])=>{
                if(value && value!==0){
                    if(key==='id_menu'){
                        (objMenu.precio==0) ? template_fact+='<h3>¡Perzonaliza una pizza!</h3>'
                        : template_fact+=`<h3>PIAZZERE <span>${objMenu.precio}€</span></h3>`;
                        totalPrice+=Number(objMenu.precio);
                    }
                    if(key==='masa') template_fact+= `<li class='custom'> ${getTextContent('.txt5')} ${getTextContentById(objMenu[key])}</li>`;
                    if(key==='tipo') template_fact+=`<li> ${getTextContent('.txt9')}   ${getTextContentById(objMenu[key])}</li>`;
                    if(key==='topping') createLiTextContent(objMenu[key]);
                    if(key==='bebida') createLiTextContent(objMenu[key]);
                    if(key==='otros') createLiTextContent(objMenu[key]);
                }
            });
            pr.textContent=`Total: ${totalPrice.toFixed(2)}€`,totalPrice=0;
            click ? click=false : click=true;
            click ? $notaPizza.insertAdjacentHTML('afterbegin',template_fact) : $notaPizza.textContent='';
            template_fact='';
        }
    })
 }
 const countIngredientsComanda=()=>{
     let count=0;
    Object.entries(objMenu).forEach(([key,value])=>{
        if(key==='topping'){
            objMenu['topping'].forEach((value)=>{
                if(value){
                   count++
                }
            });
        }
    });
    return count;
 }
const addToCart=()=>{
    let msgAlert='',isAlert=false;
    document.addEventListener('click',(e)=>{
        if(e.target.matches('#addTocart')){
            if(countIngredientsComanda()<3){
                msgAlert='¡Seleccionar como mínimo 3 ingredientes para tu pizza!';
                isAlert=true;
            }else if(!objMenu.masa){
                msgAlert='¡Selecciona el tamaño!';
                isAlert=true;
            }else if(!objMenu.tipo){
                msgAlert='¡Selecciona la masa!';
                isAlert=true;
            }else{
                isAlert=false;
                setObjComanda();
                setIdMenu(idMenu);
                objMenu['id_menu']=String(idMenu);
                objComanda.push(objMenu);
                localStorage.setItem('objComanda',JSON.stringify(objComanda));
                clearobjMenu(objMenu);
                $notaPizza.textContent='';
                updateCantidadCart(objComanda);
                limpiarLibreta();
                objComanda=[];
                cartAnimated();
            }
            if(isAlert) modalAlertPedido(msgAlert);
        }else if(e.target.matches('.add')){
            let $parentElement=e.target.parentNode.parentElement;
            const oferta={
                id_oferta:$parentElement.id,
                menu:$parentElement.querySelector('.oTexto').textContent,
                precio:$parentElement.querySelector('[data-precio]').dataset.precio
            }
            setObjComanda();
            objComanda.push(oferta);
            localStorage.setItem('objComanda',JSON.stringify(objComanda));
            updateCantidadCart(objComanda);
            objComanda=[];            
        }
    });
}
/**
 * Limpiamos el objeto objMenu
 * @param {Object} objMenu 
 */
const clearobjMenu=(objMenu)=>{
    Object.entries(objMenu).forEach(([key,value])=>{
        switch(key){
            case 'masa':
                objMenu.masa='';
                break;
            case 'tipo':
                objMenu.tipo='';
                break;
            case 'topping':
                objMenu.topping=[];
                break;
            case 'bebida':
                objMenu.bebida=[];
                break;
            case 'otros':
                objMenu.otros=[];
                break;
            case 'precio':
                objMenu.precio=0;
            break;
        }
    })
}

/* limpiamos la libreta de marcas */
const limpiarLibreta=()=>{
    //borramos marcas de libreta 2 y 3
    for(const seleccionesBoli of document.querySelectorAll(".selectBoli")){
        console.log(seleccionesBoli);
        while (seleccionesBoli.firstChild) {
            seleccionesBoli.removeChild(seleccionesBoli.firstChild);
        }        
    }
    //borramos marcas de libreta 1
    for(const seleccionesIng of document.querySelectorAll(".nota3Sel")){
        seleccionesIng.remove()
    }
    //borramos todos los ingredientes de la pizza
    for(const ingr of document.querySelectorAll(".ingr")){
        ingr.remove()
    }
    //ocultamos las marcas alternas
    nota1Sel.style.display="none";
    nota2Sel.style.display="none";
    ticket = [0,0,0,0,0];
    precio.innerHTML="";

    

}

//Precios (esto ya lo traeremos de algún lado donde sea más fácil gestionar)
var precioPeq = 0, precioMed = 0, precioFam = 0, precioFin = 0, precioGru = 0, precioCqu = 0, precioTpp = 0, precioRef = 0, precioOtr = 0;

//cogemos los datos de los precios
fetch("assets/json/precios.json")
.then(response =>{
    if(response.ok)
        return response.text()
    else
        throw new Error(response.status);
})
.then(data =>{
    const rJs=JSON.parse(data);
    precioPeq = rJs.precio_pequena;
    precioMed = rJs.precio_mediana;
    precioFam = rJs.precio_familiar;
    precioFin = rJs.precio_fina;
    precioGru = rJs.precio_gruesa;
    precioCqu = rJs.precio_con_queso;
    precioTpp = rJs.precio_ingrediente;
    precioRef = rJs.precio_refresco;
    precioOtr = rJs.precio_anadidos;
})
.catch(err =>{
    //por si el json da error, le metemos precios
    console.error("ERROR", err.message)
    precioPeq = 6;
    precioMed = 8;
    precioFam = 10;
    precioFin = 1;
    precioGru = 2;
    precioCqu = 3;
    precioTpp = 1.5;
    precioRef = 2;
    precioOtr = 1.5;
});


console.log(precioFam)

function comanda(){
    
    document.body.addEventListener("click", function(event){

        //escuchar la clase pesta (pestaña)
        if(event.target.classList.contains("pesta")){        
            console.log("pestaña: "+ event.target.id);
            cambiar_hoja(event.target.id);  
        }
        //escuchamos la hoja de pedido de pizza
        //tamaño
        if(event.target.classList.contains("nota1")){        
            console.log("Tamaño: "+ event.target.id);
            insertar_comanda(event.target.id);       
        }

        //tipo masa
        if(event.target.classList.contains("nota2")){     
            console.log("tipo: "+ event.target.id);
            insertar_comanda(event.target.id);          
        }

        //ingredientes
        if(event.target.classList.contains("nota3")){        
            console.log("ingrediente: "+ event.target.id);
            insertar_comanda(event.target.id);
        }
        //bebidas
        if(event.target.classList.contains("nota4")){        
            console.log("bebida: "+ event.target.id);
            insertar_comanda2(event.target.id);
        }

        //otros
        if(event.target.classList.contains("nota5")){        
            console.log("bebida: "+ event.target.id);
            insertar_comanda3(event.target.id);        
        }

        //si hay click en la marca de tamaño, quitamos html de la marca
        if(event.target.classList.contains("nota1Sel")){
            //Quitamos círculo que marca tamaño
            console.log("Quitamos tamaño: "+ event.target.id);
            document.querySelector(`#${event.target.id}`).style.display="none";
            ticket[0]=0;
            objMenu.masa=''
            calcTicket();            
        }
        //si hay click en la marca de tipo de masa, quitamos html de la marca
        if(event.target.classList.contains("nota2Sel")){
            //Quitamos círculo que marca de tipo de masa
            console.log("Quitamos tipo: "+ event.target.id);
            document.querySelector(`#${event.target.id}`).style.display="none";
            ticket[1]=0;
            objMenu.tipo=''
            calcTicket();            
        }

       //si hay click en la marca de ingrediente seleccionado, quitamos html de la marca
        if(event.target.classList.contains("nota3Sel")){

            //Quitamos ralla de ingrediente
            console.log("Quitamos ingrediente: "+ event.target.id);
            document.querySelector(`#${event.target.id}`).remove();

            //Quitamos topping de la animación          
            let idt = event.target.id.split("i").join("");
            document.querySelector(`#t${idt}`).remove();
            contador-=1;
            ticket[2]-=precioTpp;
            
            //Quitamos topping del ticket
            let myIndex = objMenu['topping'].indexOf(idt);
            if (myIndex !== -1) {
                objMenu['topping'].splice(myIndex, 1);
            }   

            //si existe topping de queso rallado y el contador es =< que 2, quitamos el queso-rallado
            if(contador<=2 && document.querySelector(`#t10`)!=null){
                document.querySelector(`#t10`).remove();
            }
            calcTicket();           
        }

        //si hay click en la marca de bebidas, quitamos html de la marca
        if(event.target.classList.contains("nota4Sel")){
            //Quitamos ralla de ingrediente
            console.log("Quitamos bebida: "+ event.target.id);
            document.querySelector(`#${event.target.id}`).remove();
            ticket[3]-=precioRef;
            calcTicket();            
        }

        //si hay click en la marca de otros, quitamos html de la marca (pendiente añadir más cantidad)
        if(event.target.classList.contains("nota5Sel")){
            //Quitamos ralla de ingrediente
            console.log("Quitamos complemento: "+ event.target.id);
            document.querySelector(`#${event.target.id}`).remove();
            ticket[4]-=precioOtr;
            calcTicket();            
        }
    });  
}

function cambiar_hoja(hoja){
    const oCuaderno01= document.querySelector("#cuaderno-01");
    const oCuaderno02= document.querySelector("#cuaderno-02");
    const oCuaderno03= document.querySelector("#cuaderno-03");
    switch(hoja){
        case "pest01":            
            oCuaderno01.style.zIndex= "8";    
            oCuaderno02.style.zIndex= "6";
            oCuaderno03.style.zIndex= "4";
            
            break;
        case "pest02":
            oCuaderno01.style.zIndex= "6";    
            oCuaderno02.style.zIndex= "8";
            oCuaderno03.style.zIndex= "4";
            break;
        case "pest03":
            oCuaderno01.style.indexZ= "4";    
            oCuaderno02.style.zIndex= "6";
            oCuaderno03.style.zIndex= "8";
            break;
    }
}

function insertar_comanda(com){
    
    contador=Number(contador);
    switch(com){
        //marcamos tamaño
        case "peq":
            nota1Sel.style.display="block";
            nota1Sel.style.top="205px";
            nota1Sel.style.left="19px";
            objMenu['masa']  = com;
            ticket[0]=precioPeq;
            break;
        case "med":
            nota1Sel.style.display="block";
            nota1Sel.style.top="205px";
            nota1Sel.style.left="160px";
            objMenu['masa']  = com;
            ticket[0]=precioMed;
            break;
        case "fam":
            nota1Sel.style.display="block";
            nota1Sel.style.top="202px";
            nota1Sel.style.left="312px";
            objMenu['masa']  = com;
            ticket[0]=precioFam;
            break;
        //marcamos tipo de masa
        case "fin":
            nota2Sel.style.display="block";
            nota2Sel.style.top="340px";
            nota2Sel.style.left="10px";
            objMenu['tipo']  = com;
            ticket[1]=precioFin;
            break;        
        case "gru":
            nota2Sel.style.display="block";
            nota2Sel.style.top="340px";
            nota2Sel.style.left="125px";
            objMenu['tipo']  = com;
            ticket[1]=precioGru;
            break;
        case "cqu":
            nota2Sel.style.display="block";
            nota2Sel.style.top="340px";
            nota2Sel.style.left="299px";
            objMenu['tipo']  = com;
            ticket[1]=precioCqu;
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
                        topping+=`<img id="t1" class="ingr" src="assets/img/pizza/extra-queso.png" alt="">`;
                        objMenu['topping'].push(com);
                        ticket[2]+=precioTpp;
                        break;
                    case "2":
                        topP ="445px";
                        leftP = "175px";
                        indexxx=3;
                        topping+=`<img id="t2" class="ingr" src="assets/img/pizza/queso-cabra.png" alt="">`;
                        objMenu['topping'].push(com);
                        ticket[2]+=precioTpp;
                        break;
                    case "3":
                        topP ="435px";
                        leftP = "330px";
                        indexxx=5;
                        topping+=`<img id="t3" class="ingr" src="assets/img/pizza/aceitunas.png" alt="">`;
                        objMenu['topping'].push(com);
                        ticket[2]+=precioTpp;
                        break;
                    case "4":
                        topP ="530px";
                        leftP = "50px";
                        indexxx=8;
                        topping+=`<img id="t4" class="ingr" src="assets/img/pizza/pimiento-rojo.png" alt="">`;
                        objMenu['topping'].push(com);
                        ticket[2]+=precioTpp;
                        break;
                    case "5":
                        topP ="530px";
                        leftP = "190px";
                        indexxx=6;
                        topping+=`<img id="t5" class="ingr" src="assets/img/pizza/pimiento-verde.png" alt="">`;
                        objMenu['topping'].push(com);
                        ticket[2]+=precioTpp;
                        break;
                    case "6":
                        topP ="530px";
                        leftP = "345px";
                        indexxx=4;
                        topping+=`<img id="t6" class="ingr" src="assets/img/pizza/salami.png" alt="">`;
                        objMenu['topping'].push(com);
                        ticket[2]+=precioTpp;
                        break;
                    case "7":
                        topP ="605px";
                        leftP = "55px";
                        indexxx=10;
                        topping+=`<img id="t7" class="ingr" src="assets/img/pizza/champis.png" alt="">`;
                        objMenu['topping'].push(com);
                        ticket[2]+=precioTpp;
                        break;
                    case "8":
                        topP ="605px";
                        leftP = "200px";
                        indexxx=7;
                        topping+=`<img id="t8" class="ingr" src="assets/img/pizza/cebolla.png" alt="">`;
                        objMenu['topping'].push(com);
                        ticket[2]+=precioTpp;
                        break;
                    case "9":
                        topP ="605px";
                        leftP = "340px";
                        indexxx=9;
                        topping+=`<img id="t9" class="ingr" src="assets/img/pizza/bacon.png" alt="">`;
                        objMenu['topping'].push(com);
                        ticket[2]+=precioTpp;
                        break;                    
                }
                const selecciones = document.querySelector("#selecciones");
                const resultado = document.querySelector("#resultado");      
                //Insertamos HTML y cambiamos Style de las marcas
                etiquetas+=`<img id="i${com}" src="assets/img/pizza/select-ing.png" class="nota3Sel${com} nota3Sel" alt="">`            
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
                    let topping2=`<img id="t10" class="ingr" src="assets/img/pizza/queso-rallado.png" alt="">`;
                    indexxx=11;
                    resultado.insertAdjacentHTML('beforeend',topping2);
                    document.querySelector("#t10").style.display="block";
                    document.querySelector("#t10").style.zIndex=indexxx;
                }              
            }             
    }

    //llamamos a la función ticket para los cálculos
    /* document.querySelector("#preci").remove() */
    calcTicket()
}

function insertar_comanda2(com){

    const selecciones2 = document.querySelector("#selecciones2");
    let topP = "",leftP ="", etiquetas="";
    
    switch(com){
        //marcamos aguas
        case "agu":
            topP ="190px";
            leftP = "50px";            
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;
        case "aguG":
            topP ="190px";
            leftP = "240px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;
        //marcamos cervezas        
        case "cKel":
            topP ="315px";
            leftP = "35px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;        
        case "cEga":
            topP ="315px";
            leftP = "150px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;
        case "cSN":
            topP ="315px";
            leftP = "299px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;
        case "b1":
            topP ="445px";
            leftP = "40px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;
        case "b2":
            topP ="445px";
            leftP = "170px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;
        case "b3":
            topP ="445px";
            leftP = "305px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;
        case "b4":
            topP ="525px";
            leftP = "50px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;
        case "b5":
            topP ="525px";
            leftP = "195px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;
        case "b6":
            topP ="525px";
            leftP = "345px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;
        case "b7":
            topP ="605px";
            leftP = "55px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;
        case "b8":
            topP ="605px";
            leftP = "195px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;
            break;
        case "b9":
            topP ="605px";
            leftP = "345px";
            objMenu['bebida'].push(com);
            ticket[3]+=precioRef;     
            break;     
    }

    //si no existe, metemos            
    if(document.querySelector(`.nota4Sel${com}`)==null){
        
        //Insertamos HTML y cambiamos Style de las marcas
        etiquetas+=`<img id="b${com}" src="assets/img/pizza/select-ing.png" class="nota4Sel${com} nota4Sel" alt="">`            
        selecciones2.insertAdjacentHTML('beforeend',etiquetas);
        document.querySelector(`.nota4Sel${com}`).style.display="block";
        document.querySelector(`.nota4Sel${com}`).style.top=topP;
        document.querySelector(`.nota4Sel${com}`).style.left=leftP;
    }
    //llamamos a la función ticket para los cálculos
    /* document.querySelector("#preci").remove() */
    calcTicket()
}

function insertar_comanda3(com){

    const selecciones3 = document.querySelector("#selecciones3");
    let topP = "",leftP ="", etiquetas="";
    
    switch(com){
        //marcamos patatas
        case "oPfi":
            topP ="180px";
            leftP = "30px";            
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;
        case "oPde":
            topP ="180px";
            leftP = "150px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;
        case "oPcq":
            topP ="180px";
            leftP = "312px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;            
            break;
        //marcamos cervezas        
        case "oPol":
            topP ="315px";
            leftP = "50px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;        
        case "oAce":
            topP ="315px";
            leftP = "190px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;
        case "oNug":
            topP ="315px";
            leftP = "350px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;
        case "oH1":
            topP ="430px";
            leftP = "60px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;
        case "oH2":
            topP ="430px";
            leftP = "190px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;
        case "oH3":
            topP ="430px";
            leftP = "340px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;
        case "oH4":
            topP ="525px";
            leftP = "55px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;
        case "oH5":
            topP ="525px";
            leftP = "200px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;
        case "oH6":
            topP ="525px";
            leftP = "345px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;
        case "oH7":
            topP ="605px";
            leftP = "40px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;
        case "oH8":
            topP ="605px";
            leftP = "160px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;
        case "oH9":
            topP ="605px";
            leftP = "310px";
            objMenu['otros'].push(com);
            ticket[4]+=precioOtr;
            break;     
    }

    //si no existe, metemos             
    if(document.querySelector(`.nota5Sel${com}`)==null){
        
        //Insertamos HTML y cambiamos Style de las marcas
        etiquetas+=`<img id="b${com}" src="assets/img/pizza/select-ing.png" class="nota5Sel${com} nota5Sel" alt="">`            
        selecciones3.insertAdjacentHTML('beforeend',etiquetas);
        document.querySelector(`.nota5Sel${com}`).style.display="block";
        document.querySelector(`.nota5Sel${com}`).style.top=topP;
        document.querySelector(`.nota5Sel${com}`).style.left=leftP;
    }
    //llamamos a la función ticket para los cálculos
    /* document.querySelector("#preci").remove() */
    calcTicket()
}

function calcTicket(){
       
    let sum = 0
    for (let i = 0; i < ticket.length; i++) {
        sum += ticket[i];
    }
    console.log(objMenu);
    console.log(sum);
    let eur = "", cent = "";
    let pos = 0
    if(String(sum).indexOf(".")==-1){
        eur = String(sum);
        cent = "00";
    }else{
        pos = Number(String(sum).indexOf("."));
        console.log("pos"+pos);
        eur = String(sum).substring(0,pos);
        cent = String(sum).substring(pos+1,pos+2)+"0";
    }
    console.log("Total: "+sum+" Euros: "+eur+" Cent: "+cent)
    
    let precioHtml = `<p id="preci">${eur}<span>,${cent}€</span></p>`;
    precio.innerHTML = precioHtml; 
    objMenu['precio']=sum;

}