const frame= document.querySelector('.frame');
const punto= document.querySelectorAll('.puntos li');
const img01HTML = `<img src="assets/img/logos/pointer01.png" alt="">`;
const img0203HTML = `<img src="assets/img/logos/pointer02.png" alt=""></img> <img class="humo" src="assets/img/logos/pointer03.png" alt="">`;

let ps=0, timeMiliseg=7000;
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
        //añadimos en cada Li una caja cerrada (quitando de paso las otras imágenes)
        punto[i].innerHTML=img01HTML;
    })
    // Añadimos en el LI seleccionado las dos imágenes (caja abierta y humo)    
    punto[position].innerHTML=img0203HTML;
}

