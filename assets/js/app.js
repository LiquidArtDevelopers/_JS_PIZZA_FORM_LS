import loadAnimation from "./preload.js";
import idiomas from "./idiomas.js";
import formulario from "./form.js";
import componentes from "./components.js";
import pedido from "./orders.js";

const d=document;

d.addEventListener('DOMContentLoaded',()=>{
    //Llamar a la animación de carga.
    loadAnimation();
    //Cambio de idiomas y cookies.
    idiomas();
    //Llamar a componentes.
    //componentes();
    //Validación de formulario.
    formulario();
    //pedido
    pedido();
});