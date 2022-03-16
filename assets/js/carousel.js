const grande    = document.querySelector('.frame');
const punto     = document.querySelectorAll('.puntos li');
export default function carrousel(position){
    setInterval(moverCarrosel(position),3000);
    // Asignamos un CLICK a cadaPunto
    punto[position].addEventListener('click',(e)=>{
        moverCarrosel(position);
    });
}

const moverCarrosel = (position)=>{
     // Guardar la posición de ese PUNTO
    // Calculando el espacio que debe DESPLAZARSE el FRAME
    let operacion = position * -25;

    // MOVEMOS el frame
    grande.style.transform = `translateX(${ operacion }%)`

    // Recorremos TODOS los punto
    punto.forEach( ( cadaPunto , i )=>{
        // Quitamos la clase ACTIVO a TODOS los punto
        punto[i].classList.remove('activo')
    })
    // Añadir la clase activo en el punto que hemos hecho CLICK
    punto[position].classList.add('activo');      
}