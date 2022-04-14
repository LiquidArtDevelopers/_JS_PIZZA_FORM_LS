const list= document.querySelectorAll('.list');
export default function componentes(){
    window.onscroll = function() {scrollFunction()};
    animateBars();
    list.forEach((item)=> item.addEventListener('click',circleListSelection));
    flyeToCart();
}

//SCRIPT SCROLL NAV-----------------
function scrollFunction() {
    /* if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navegador").style.backgroundColor = "rgb(65, 65, 65)";
    } else {
        document.getElementById("navegador").style.backgroundColor = "rgba(65, 65, 65, 1)";
    } */
    
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
    const template_nav_enlaces=`
    <div class="nav-idiomas">
        <ul>
            <li><a id="eu" class="idioma" href="index.html#eu">eu</a></li>
            <li><a id="es"class="idioma" href="index.html#es">es</a></li>
            <li><a id="en" class="idioma" href="index.html#en">en</a></li>
        </ul>
    </div>
    `;
    const $line1__bars=document.querySelector('.line1__bars-menu');
    const $line2__bars=document.querySelector('.line2__bars-menu');
    const $line3__bars=document.querySelector('.line3__bars-menu');
    const $nav_enlaces=document.querySelector('.nav-enlaces ul');
    document.addEventListener('click',(e)=>{
        if(e.target.matches('.nav-enlaces a') || e.target.matches('.bars__menu')){
                $line1__bars.classList.toggle('activeline1__bars-menu');
                $line2__bars.classList.toggle('activeline2__bars-menu');
                $line3__bars.classList.toggle('activeline3__bars-menu');
                $nav_enlaces.classList.toggle('active');
        }
    }); 
}
function circleListSelection(){
    list.forEach((el)=>el.classList.remove('active'));
        this.classList.add('active');
};

const flyeToCart=()=>{
    let $cart= document.querySelector('.carrito');
    let $add= document.getElementsByClassName('add');
    console.log($add)
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
            setTimeout(()=>{
                $span.classList.remove('active');
                $cart.classList.remove('animated');
                $span.removeChild($s_image);
                $span.remove();
            }, 500);
        }
    });
}