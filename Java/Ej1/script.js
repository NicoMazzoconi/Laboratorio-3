

function Saludar() {
    //document.write("Hola mundo");
    console.log("Hola mundo");
    alert("Hola mundo");
    document.getElementById("p1").innerHTML = "Hola mundo";
}

//objetos

var x =  {nombre: "juan", apellido: "perez", edad: 30};
console.log(x["nombre"]); // == console.log(x.nombre);

function persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

var per1 = new persona("ana", "gonzales", 35);
var per2 = new persona("pedro", "tritto", 42);
console.log(per1.nombre + " " + per2.nombre);

per1["nacionalidad"] = "argentina";
console.log(per1["nacionalidad"]);
persona.prototype.nacionalidad = "peruanos";
console.log(per1.nacionalidad + " " + per2.nacionalidad);
