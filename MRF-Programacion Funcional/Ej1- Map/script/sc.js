/*var vec = [3,4,2,6,7,5];

//var dobles = [];

/*for(var i = 0; i < vec.length; i++)
{
    dobles.push(vec[i]*2);
}*/

/*vec.forEach((element)=>{
    dobles.push(element * 2);
});*/

/*var dobles = vec.map((valor, indice, array)=>{
    return valor * 2;
})*/

/*var dobles = vec.map(valor=>valor * 2);

console.log(dobles);*/

/*function cargarSelect()
{
    var select = document.getElementsByTagName('select')[0];

    if(select.hasChildNodes())
    {
        return;
    }

    var nombres = empleados.map(empleado=>empleado.nombre);
    
    nombres.forEach(function(nombre){
        var opcion = document.createElement('option');
        opcion.textContent = nombre;
        select.appendChild(opcion);
    });
    
}*/

var x = empleados.map(function(empleado){
    return {"id":empleado.id,"email":empleado.email};
})
console.log(x);