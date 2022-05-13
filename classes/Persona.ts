export class Persona{ 
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
     return"Naci en"+ this.nacimiento;
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
 };
};

