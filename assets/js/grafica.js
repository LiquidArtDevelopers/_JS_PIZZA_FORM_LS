
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

    const config = {
        type: 'bar',
        data,
        options: {
          indexAxis: 'y',
        }
      };

      const labels = Utils.months({count: 7});
      const data = {
        labels: labels,
        datasets: [{
          axis: 'y',
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      };

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