import Cookie from "./cookie.js";
import idiomas from "./idiomas.js";

const cookie= Cookie.getInstance();
const cookies={
    aceptCookies:'aceptCookies',
    idioma:'idiomas'
}
let aceptCookies=false;
export default function dataCookies(){
    cookie.setCookieName('aceptCookies');
    if(cookie.getCookie()=='true') aceptCookies=true;
    Object.entries(cookies).forEach(([key,nameCookie])=> {
        cookie.setCookieName(nameCookie);
        if(!cookie.getCookie()){
             //Llamar a la ventana de cookies.
             llamarVentanaCookies();
            console.log(`Cookie no creada:${nameCookie}`);
        }
    });
    if(aceptCookies){
        //Cambio de idiomas..
        idiomas();
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
                <div  class='cookies-elements'>
                <a href="" class="btn"><span>></span>Configuración de las cookies</a>
                    <a class='btn-cookies'>Aceptar</a>
                    <span class='close'>X</span>
                </div>
            </div>
         </div>
    `;
    //Pintamos en pantalla la ventana modal de cookies.
    document.body.insertAdjacentHTML('afterbegin',contentWindowCookies);
    let $window_cookies=document.querySelector('.window');
    /* $window_cookies.classList.toggle('is-active'); */
    //Escuchamos el clck en el documento html.
    document.addEventListener('click',(e)=>{
        //Objetivos del evento click que coincidan con la clase '.btn'.
        if(e.target.matches('.btn-cookies') || e.target.matches('.close')){
            if(e.target.className == 'btn-cookies') cookie.setCookie('aceptCookies','true',90);
        //Eliminamos el elemento div ('.window').
            $window_cookies.remove();
        //Detenemos el evento burbuja.
            e.target.removeEventListener('click',e.preventDefault(),true);
        }
    });
}