namespace Clases{    
    class Persona
    {
        protected nombre:string;
        protected apellido:string;
        protected sexo:string;
        protected edad:string;

        constructor(nombre:string, apellido:string, sexo:string, edad:string)
        {
            this.nombre = nombre;
            this.apellido = apellido;
            this.sexo = sexo;
            this.edad = edad;
        }

        
    }
}