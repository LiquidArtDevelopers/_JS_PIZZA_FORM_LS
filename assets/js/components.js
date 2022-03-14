export default function componentes(){
    //Llamar a la ventana de cookies.
    llamarVentanaCookies();

    window.onscroll = function() {scrollFunction()};
}

//SCRIPT SCROLL NAV-----------------
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0.432)";
    } else {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}


//Llama a la ventana modal de cookies.
/**
 * @string contentWindowCookies- template para la ventana de coockies.
 * @element $window_cookies- Elemento 'div'.
 * @event eventListener-click.
*/
const llamarVentanaCookies=()=>{
    let contentWindowCookies=`
        <div class="window">
            <div id="cookies">
                <div class='cookies-text'>
                    <p>Utilizamos cookies propias y de terceros para mejorar nuestros servicios, elaborar información estadística, analizar sus hábitos de navegación e inferir grupos de interés. Esto nos permite personalizar el contenido que ofrecemos y mostrarle publicidad relacionada con sus preferencias. Adicionalmente,compartimos los análisis de navegación y los grupos de interés inferidos con terceros.</p>
                </div>
                <div  class='cookies-botton'>
                    <span><a href="" class="btn">Configuración de las cookies</a>
                </div>    
            </div>
         </div>
    `;
    //Pintamos en pantalla la ventana modal de cookies.
    document.body.insertAdjacentHTML('afterbegin',contentWindowCookies);
    //Escuchamos el clck en el documento html.
    document.addEventListener('click',(e)=>{
        //Objetivos del evento click que coincidan con la clase '.btn'.
        if(e.target.matches('.btn')){
            let $window_cookies=document.querySelector('.window');
        //Eliminamos el elemento div ('.window').
            $window_cookies.remove();
        //Detenemos el evento burbuja.
            e.target.removeEventListener('click',e.preventDefault(),true);
        }
    });
}