var vec = [3,4,2,6,7,5];

vec.sort();

//pares con for
console.log("Pares con for");
for(var i = 0; i < vec.length; i++)
{
    if(vec[i] % 2 == 0)
        console.log(vec[i]);
};

//pares con foreach
console.log("Pares con foreach");
vec.forEach(e=>{
    if(e % 2 == 0)
        console.log(e);
});

//pares con filter
console.log("Pares con filter");
console.log(vec.filter(e=>e % 2 == 0));

//empleados masculinos
console.log("Empleado Masculinos");
var hombres = empleados.filter(e=>e.genero=="Male");
console.log(hombres);

