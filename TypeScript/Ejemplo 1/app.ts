let nombre1:string = "juan";
let nombre2:string = "pedro";
let nombre3:string = "fabian";

console.log(nombre1 + ", " + nombre2 + ", " + nombre3);

console.log(`${nombre1}, ${nombre2}, ${nombre3}`);




let vec:number[] = [1,2,3];

vec.push("juan");//error por tipo de variable 

console.log(vec);


enum talle{
    xs,
    s,
    m,
    l,
    xl,
    xxl
}
console.log(talle);


function f1(a:number, b:number, c:number):number
{
    return a;
}



let s:(b:number, c:number)=>number;

s = f1; //s recibe 2 y f1 recibe 3


type persona = {edad:number, nombre:string, apellido:string}; 

let p1:persona = {
    nombre: "juan",
    apellido: "perez",
    edad: 21
};

let p2:persona = p1;



//Clases


class Persona{
    private _nombre:string;
    private _apellido:string;
    private _edad:number;

    constructor(nombre:string, apellido:string, edad:number)
    {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    
    public set Nombre(v : string) {
        this._nombre = v;
    }

    
    public get Nombre() : string {
        return this._nombre;
    }
    
    
    public set Apellido(v : string) {
        this._apellido = v;
    }

    public get Apellido() : string {
        return this._apellido;
    }

    public set Edad(v : number) {
        this._edad = v;
    }

    public get Edad() : number {
        return this._edad;
    }

    protected presentarse() : string
    {
        return `Hola soy ${this._nombre} ${this._apellido} y tengo ${this._edad} años`;
    }
    
}

let per = new Persona("Nico", "Mazzo", 24);

console.log(per.presentarse());


//herencia

class Empleado extends Persona{
    public sueldo:number;
    constructor(nombre:string, apellido:string, edad:number, sueldo:number)
    {
        super(nombre,apellido,edad);
        this.sueldo = sueldo;
    }

    public presentarse() : string
    {
        return super.presentarse();
    }
}

let emp1 = new Empleado("Jorgito", "Martinez", 36, 35000);
