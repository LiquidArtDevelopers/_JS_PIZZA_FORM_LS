
//SCRIPT SCROLL NAV-----------------
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0.432)";
    } else {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}

//SCRIPT COOKIES------------------
//Escucha el evento antes de cargar el contenido del documento html.
addEventListener('DOMContentLoaded',()=>{
    cambioIdioma();
    llamarVentanaCookies();
    //Escuchamos la selección de idioma
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("idioma")){
            /* //creamos la cookie del idioma
            console.log("cookie creada: "+ event.target.id); */
            setCookie("idiomas", event.target.id, 90);
            idioma = event.target.id
            resetearIdioma()
            cambioIdioma()
        }
    });
window.onscroll = function() {scrollFunction()};  
});


//creamos cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//recogemos cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Arrow Function - Llama a la ventana modal de cookies.
/**
 * @string contentWindowCookies- template para la ventana de coockies.
 * @element $window_cookies- Elemento 'div'.
 * @event eventListener-click.
*/
const llamarVentanaCookies=()=>{
    let contentWindowCookies=`
            <div class="window">
                    <div id="cookies">
                    <h2>Política de cookies</h2>
                    <h3>¿Para qué sirven las cookies?</h3>
                    <p>Utilizamos cookies para permitirle visitar nuestro sitio web y utilizar sus funciones. 
                    Algunas cookies son estrictamente necesarias para el funcionamiento de nuestro sitio web y no se pueden desactivar. Otras cookies (incluidas las cookies de terceros) nos ayudan a mejorar nuestro sitio web al proporcionarnos estadísticas o permitirnos mostrar anuncios que se correspondan con sus intereses. Estas cookies solo se almacenarán si hace clic en «Aceptar todas las cookies» o si permite su uso en la configuración de cookies. Puede cambiar sus preferencias en cualquier momento en el menú de configuración de las cookies.
                        Asimismo, puede encontrar más información sobre nuestro uso de las cookies, así como el uso de las cookies de terceros por parte de nuestros socios, haciendo clic aquí: Política de privacidad</p>
                        <a href="" class="btn btn-cookies">Aceptar todas las cookies</a>
                        <a href="" class="btn btn-cookies">Rechazar las cookies no esenciales</a>
                        <a href="" class="btn">Configuración de las cookies</a>
                    </div>
            </div>
    `;
    //Pintamos en pantalla la ventana modal de cookies.
    document.body.insertAdjacentHTML('afterbegin',contentWindowCookies);
    //Escuchamos el clck en el documento html.
    document.addEventListener('click',(e)=>{
        //Detenemos el evento burbuja.
        e.preventDefault();
        //Objetivos del evento click que coincidan con la clase '.btn'.
        if(e.target.matches('.btn')){
            let $window_cookies=document.querySelector('.window');
        //Eliminamos el elemento div ('.window').
            $window_cookies.remove();
        }
    });
}