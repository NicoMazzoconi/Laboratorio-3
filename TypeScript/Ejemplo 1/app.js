var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var nombre1 = "juan";
var nombre2 = "pedro";
var nombre3 = "fabian";
console.log(nombre1 + ", " + nombre2 + ", " + nombre3);
console.log(nombre1 + ", " + nombre2 + ", " + nombre3);
var vec = [1, 2, 3];
vec.push("juan"); //error por tipo de variable 
console.log(vec);
var talle;
(function (talle) {
    talle[talle["xs"] = 0] = "xs";
    talle[talle["s"] = 1] = "s";
    talle[talle["m"] = 2] = "m";
    talle[talle["l"] = 3] = "l";
    talle[talle["xl"] = 4] = "xl";
    talle[talle["xxl"] = 5] = "xxl";
})(talle || (talle = {}));
console.log(talle);
function f1(a, b, c) {
    return a;
}
var s;
s = f1; //s recibe 2 y f1 recibe 3
var p1 = {
    nombre: "juan",
    apellido: "perez",
    edad: 21
};
var p2 = p1;
//Clases
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    Object.defineProperty(Persona.prototype, "Nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (v) {
            this._nombre = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (v) {
            this._apellido = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Edad", {
        get: function () {
            return this._edad;
        },
        set: function (v) {
            this._edad = v;
        },
        enumerable: true,
        configurable: true
    });
    Persona.prototype.presentarse = function () {
        return "Hola soy " + this._nombre + " " + this._apellido + " y tengo " + this._edad + " a\u00F1os";
    };
    return Persona;
}());
var per = new Persona("Nico", "Mazzo", 24);
console.log(per.presentarse());
//herencia
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.presentarse = function () {
        return _super.prototype.presentarse.call(this);
    };
    return Empleado;
}(Persona));
var emp1 = new Empleado("Jorgito", "Martinez", 36, 35000);
