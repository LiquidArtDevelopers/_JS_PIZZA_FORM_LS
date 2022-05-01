import createComponent from "./createComponent.js";

export default function createList(){
    const app=new createComponent({
        el:'.list-fact',
        data:{
            listFact:[]
        },
        template: function (props){
            if (props.listFact.length < 1) {
                return `<p><em>No tienes pedidos.</em></p>`;
              }
            let todos=props.listFact.map(item => `<li>${item}</li>`).join("");
            return todos;
        }
    });
    /* //Estableciendo valores por defecto al State
    app.setState({
      lisFact: ["Tarea 1", "Tarea 2", "Tarea 3"]
    }); */

    document.querySelector('.carrito').addEventListener('click',()=>{
        //Actualizar el State de forma reactiva
        const lastState = app.getState();
        lastState.listFact.push("Hamburguesa","Hello");
        console.log(lastState)
        app.setState({ lisFact: ["hambruguesa"]});
        app.render();
    })
}