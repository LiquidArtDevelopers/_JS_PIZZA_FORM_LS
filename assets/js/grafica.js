
export default function grafica(){
    recogerDatos();
}

const recogerDatos=()=>{

    fetch("assets/json/concurso.json")
    .then(response =>{
        if(response.ok)
            return response.text()
        else
            throw new Error(response.status);
    })
    .then(data =>{
        //paseamos el json
        let concursoJs=JSON.parse(data);        
        construirGrafico(concursoJs);
    })
    .catch(err =>{
        //por si el json da error, le metemos precios
        console.error("ERROR", err.message)        
    });
}

const construirGrafico=(concursoJs)=>{

    var arrayPro = new Array;
    var arrayVentas = new Array;
    //recorremos las claves del json parseado
    for (const keyr in concursoJs){
        //si es una clave, nos quedamos con el valor
        if (concursoJs.hasOwnProperty(keyr)) {
            arrayPro.unshift(keyr);
            arrayVentas.unshift(concursoJs[keyr]);              
        }
    }

    const labels = arrayPro;
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'Pedidos realizados',
        data: arrayVentas,
        backgroundColor: [
        'rgb(51, 51, 124)',
        '#A0425B',
        '#4B9C40'
        ],
        
        hoverOffset: 4
    }]
    };
  
    const config = {
      type: 'bar',
      data: data,
      options: {}
    };
         
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );


    /* const data = {
      labels: arrayPro,
      datasets: [{
        axis: 'y',
        label: 'Pedidos realizados',
        data: arrayVentas,
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)'          
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)'
        ],
        borderWidth: 1
      }]      
      
    };

    const config = {
      type: 'bar',
      data,
      options: {
        indexAxis: 'y',
      }
    };

    const myChart = new Chart(document.getElementById('myChart'),config); */
    

    /* const data = {

    labels: arrayPro,

    datasets: [{
        label: 'Pedidos realizados',
        data: arrayVentas,
        backgroundColor: [
        'rgb(51, 51, 124)',
        '#A0425B',
        '#4B9C40'
        ],
        
        hoverOffset: 4
    }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {}
    };

    const myChart = new Chart(document.getElementById('myChart'),config); */

}