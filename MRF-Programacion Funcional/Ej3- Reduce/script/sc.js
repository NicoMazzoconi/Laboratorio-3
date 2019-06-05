var vec = [3,4,2,6,7,5];

//Suma de todos los elementos con for
console.log("Suma con For");
var suma = 0;
for(var i = 0; i < vec.length; i++)
{
    suma+=vec[i];
}
console.log(suma);

//Suma de todos los elementos con foreach
console.log("Suma con Foreach");
var suma = 0;
vec.forEach(e=>suma+=e);
console.log(suma);

//Suma de todos los elementos con reduce
console.log("Suma con Reduce");
console.log(vec.reduce(function(anterior,actual){
    return anterior + actual;
}));
