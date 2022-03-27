
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
        'white',
        'white',
        'white'
        ],        
        hoverOffset: 4
    }]
    };
  
    const config = {
      type: 'bar',
      data: data,
      options: {
        plugins: {
          title: {
              display: false,
              text: 'Custom Chart Title',
              color:'white',
          },
          tooltip:{
            color:'white',
          }
      }
      }
    };
         
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );    
}