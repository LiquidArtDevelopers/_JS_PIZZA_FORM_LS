const CheckedAceptPrivacity=()=>{
    const $aceptPrivacity=document.querySelector('#acept');
    let dchecked=false;
    $aceptPrivacity.addEventListener('click',(e)=>{
        e.preventDefault();
        dchecked=true;
        console.log(dchecked)
    $aceptPrivacity.checked='true';
    })
}