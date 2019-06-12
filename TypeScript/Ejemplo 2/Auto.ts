/// <reference path="./Vehiculo.js" />

namespace Clases{

    export class Auto extends Vehiculo
    {
        constructor(marca:string, cantRuedas:number)
        {
            super(marca, cantRuedas);
        }
    }
}