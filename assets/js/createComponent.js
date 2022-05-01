const d=document;
export default class createComponent{
    //Creamos el Constructor del Componente
    constructor(options){
      this.el = options.el;
      this.data = options.data;
      this.template = options.template;
    };
  
    //Agregamos los métodos al constructor del componente
  
    //Render UI
    render () {
      const $el = d.querySelector(this.el);
      if (!$el) return;
      $el.innerHTML = this.template(this.data);
  
      console.log(this.data);
    };
  
    //Actualizar el State de forma reactiva
    setState(obj) {
      for (let key in obj) {
        if (this.data.hasOwnProperty(key)) {
          this.data[key] = obj[key];
        }
      }
  
      this.render();
    };
  
    //Obtenemos una copia inmutable del State
    getState() {
      return JSON.parse(JSON.stringify(this.data));
    };
};