class Persona{ 
    private nacimiento:number;
    private nombre:string;

    constructor(anioNacimiento: number, nombre:string){
        this.nacimiento=anioNacimiento;
        this.nombre=nombre;
    };
    
 public CualEsTuNombre():string{
     return"Mi nombre es "+this.nombre.split(" ")
 };

 public CualEsTuEdad():string{
     return"Mi edad es"+ this.nacimiento;
 };
 
 public CualEsTuGeneracion(){
     if(this.nacimiento < 1975) {
         return "Soy un Baby Boomer.";
     }
     if(this.nacimiento >= 1975 && this.nacimiento < 1999){
         return "Soy un Milenial.";
     }
     if(this.nacimiento>=1999 && this.nacimiento<2010){
         return "Soy un Centenial.";
     }
     if (this.nacimiento>= 2010){
         return "Soy de la Generacion Z.";
     }
 };

 public CualEsTuAño(){
     const edad:number= 2022-(this.nacimiento);
     return "tu edad es " + edad +" años.";
 }
};

// termina la def de la clase persona
let fede=new Persona(2005,"federico fernandez");
console.log(fede.CualEsTuNombre());
console.log(fede.CualEsTuAño());
console.log(fede.CualEsTuGeneracion());

 //variables de mis datos
let nombre:string="Johnny Arvelo";
const nacimiento: number=1999;
console.log("hola "+nombre+" te damos la bienvenida desde Typescript" );
console.log("naciste en "+ nacimiento);