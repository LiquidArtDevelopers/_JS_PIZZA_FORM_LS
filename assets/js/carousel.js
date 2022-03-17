const frame= document.querySelector('.frame');
const punto= document.querySelectorAll('.puntos li');
let ps=0, timeMiliseg=5000;
export default function carrousel(){
    window.addEventListener('load',()=>{
        setInterval(autoCarousel,timeMiliseg);
    });
    punto.forEach((el,position)=>{
        // Asignamos un CLICK a cadaPunto
        punto[position].addEventListener('click',()=>{
            ps=position;
            moverCarrosel(position);
        });
    });
}
const autoCarousel=()=>{
    (ps<3) ? ps++ : ps=0;
    moverCarrosel(ps);
}
const moverCarrosel =(position)=>{
    // Calculando el espacio que debe DESPLAZARSE el FRAME
    let operation = position * -25;
    // MOVEMOS el frame
    frame.style.transform = `translateX(${ operation }%)`
    // Recorremos TODOS los punto
    punto.forEach( ( cadaPunto , i )=>{
        // Quitamos la clase ACTIVO a TODOS los punto
        punto[i].classList.remove('activo')
    })
    // Añadir la clase activo en el punto que hemos hecho CLICK
    punto[position].classList.add('activo');
}