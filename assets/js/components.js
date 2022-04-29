const list= document.querySelectorAll('.list');
export default function componentes(){
    window.onscroll = function() {scrollFunction()};
    animateBars();
    list.forEach((item)=> item.addEventListener('click',circleListSelection));
    flyeToCart();
}


//FUNCIÓN PARA SABER EN QUÉ MOMENTO NOS ENCONTRAMOS CON CIERTOS ELEMENTOS DEL HTML EN PANTALLA
var elem = document.getElementById('seccion_ofertas');

function isInViewport(elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
    );
}



//SCRIPT SCROLL NAV-----------------
function scrollFunction() {

    /* console.log(document.documentElement.scrollTop) */
    if (isInViewport(elem)) {
        console.log("!!");
    }

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navegador").style.backgroundColor = "rgb(65, 65, 65)";
    } else {
        document.getElementById("navegador").style.backgroundColor = "rgba(65, 65, 65, 1)";
    }
    
    switch(document.documentElement.scrollTop){
        case 695:
            console.log(document.getElementsByClassName('txt1'));
            
        break;
    }

    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        document.body.classList.add("cambio_fondo")
    } else {
        document.body.classList.remove("cambio_fondo")
    }

    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.body.classList.add("cambio_fondo2")
    } else {
        document.body.classList.remove("cambio_fondo2")
    }

    if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
        document.body.classList.add("cambio_fondo3")
    } else {
        document.body.classList.remove("cambio_fondo3")
    }
}
const animateBars=()=>{
    const $line1__bars=document.querySelector('.line1__bars-menu');
    const $line2__bars=document.querySelector('.line2__bars-menu');
    const $line3__bars=document.querySelector('.line3__bars-menu');
    const $nav_enlaces=document.querySelector('.nav-enlaces ul');
    const $nav_idiomas=document.querySelector('.nav-idiomas');
    const $clone_logo=document.querySelector('.nav-logo').cloneNode(true);
    $clone_logo.className='li-logo';
    let click=false;
    document.addEventListener('click',(e)=>{
        if(e.target.matches('.nav-enlaces a') || e.target.matches('.bars__menu')){
                $line1__bars.classList.toggle('activeline1__bars-menu');
                $line2__bars.classList.toggle('activeline2__bars-menu');
                $line3__bars.classList.toggle('activeline3__bars-menu');
                click ? click=false : click= true;
                click ? $nav_enlaces.append($clone_logo) : $nav_enlaces.removeChild($clone_logo);
                $nav_enlaces.classList.toggle('active');
                $nav_idiomas.classList.toggle('active');
        }
    }); 
}
function circleListSelection(){
    list.forEach((el)=>el.classList.remove('active'));
        this.classList.add('active');
};

const flyeToCart=()=>{
    const $cart= document.querySelector('.carrito');
    const $ofertas=document.querySelector('#ofertas').children;
    document.addEventListener('click',(e)=>{
        if(e.target.matches('.add')){
            // image animated to cart
            let $parent= e.target.parentNode.parentNode;
            let $image= $parent.querySelector('img');
            let $span= document.createElement('span');
            $span.className='image-carior';
            $parent.insertBefore($span, $parent.lastElementChild);
            let $s_image= $image.cloneNode(false);
            $span.appendChild($s_image);    
            $span.classList.add('active');
            $cart.classList.add('animated');
            $parent.classList.add('active');
            for(const $oferta of $ofertas){
                if(!$oferta.classList.contains('active')) $oferta.classList.add('hidden');
            }
            setTimeout(()=>{
                $span.classList.remove('active');
                $cart.classList.remove('animated');
                $span.removeChild($s_image);
                $span.remove();
                $parent.classList.remove('active');
                for(const $oferta of $ofertas){
                    $oferta.classList.remove('hidden');
                } 
            },500);
        }
    });
}

//EFECTOS DE APARICIÓN
//------------------------

//función en la que seleccionamos todos los elementos que tengan esa clase enviada
function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    //creamos el array de todos los elementos que existan con esa clase
    els = Array.from(els)
    //recorremos el array
    els.forEach(el => {
        //enviamos un elemento del array (y sus opciones) a la función asíncrona
        addObserver(el, options)
    })
}

function addObserver(el, options){

    
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('active')
        }
        return
    }
    
    let observer = new IntersectionObserver((entries, observer) => {       
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}
//textos de oferta y titulares de sección
scrollTrigger('.texto_oferta')
scrollTrigger('.img_fondo'),{
    rootMargin: '-200px'
}