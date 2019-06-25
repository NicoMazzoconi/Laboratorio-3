namespace Clases{

    enum tipoLegislador{
        DIPUTADO,
        SENADOR
    }

    export class Legislador extends Persona{
        private email:string;
        private tipo:tipoLegislador;
        private provincia:string;

        constructor(nombre:string, apellido:string, sexo:string, edad:string, email:string, tipo:tipoLegislador,provincia:string)
        {
            super(nombre,apellido,sexo,edad);
            this.email = email;
            this.tipo = tipo;
            this.provincia = provincia;
        }

        public set Email(v :string)
        {
            this.email = v;
        }

        public get Email():string
        {
            return this.email;
        }

    }
}