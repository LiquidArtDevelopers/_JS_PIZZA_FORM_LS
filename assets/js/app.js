import loadAnimation from "./preload.js";
import idiomas from "./idiomas.js";
import formulario from "./form.js";
import componentes from "./components.js";
import pedido from "./orders.js";
import dataCookies from "./dataCookies.js";
import carousel from "./carousel.js";

const d=document;
const punto=document.querySelectorAll('.puntos li');
d.addEventListener('DOMContentLoaded',()=>{
    //Llamar a la animación de carga.
    //loadAnimation();
    //Script que gestiona las cookies.
    dataCookies();
    //Llamar a componentes.
    componentes();
    //carrousel
    //carousel();
    //Validación de formulario.
    formulario();
    //pedido
    pedido();
});