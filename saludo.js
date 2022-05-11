var Persona = /** @class */ (function () {
    function Persona(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    ;
    Persona.prototype.CualEsTuNombre = function () {
        return "Mi nombre es " + this.nombre.split(" ");
    };
    ;
    Persona.prototype.CualEsTuEdad = function () {
        return "Mi edad es" + this.nacimiento;
    };
    ;
    Persona.prototype.CualEsTuGeneracion = function () {
        if (this.nacimiento < 1975) {
            return "Soy un Baby Boomer.";
        }
        if (this.nacimiento >= 1975 && this.nacimiento < 1999) {
            return "Soy un Milenial.";
        }
        if (this.nacimiento >= 1999 && this.nacimiento < 2010) {
            return "Soy un Centenial.";
        }
        if (this.nacimiento >= 2010) {
            return "Soy de la Generacion Z.";
        }
    };
    ;
    Persona.prototype.CualEsTuAño = function () {
        var edad = 2022 - (this.nacimiento);
        return "tu edad es " + edad + " años.";
    };
    return Persona;
}());
;
// termina la def de la clase persona
var fede = new Persona(2005, "federico fernandez");
console.log(fede.CualEsTuNombre());
console.log(fede.CualEsTuAño());
console.log(fede.CualEsTuGeneracion());
//variables de mis datos
var nombre = "Johnny Arvelo";
var nacimiento = 1999;
console.log("hola " + nombre + " te damos la bienvenida desde Typescript");
console.log("naciste en " + nacimiento);
