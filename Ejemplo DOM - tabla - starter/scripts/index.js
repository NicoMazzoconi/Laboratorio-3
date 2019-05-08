window.addEventListener('load', inicializarEventos);
function inicializarEventos()
{
    var btn = document.getElementById('miBtn');
    btn.addEventListener('click', tablaDeJSon);
}

function tablaDeJSon()
{
    if(data != null)
    {            
        var div = document.getElementById('info');
        if(div.hasChildNodes())
        {   
            div.removeChild(div.childNodes[0]);
            var tabla = document.createElement('table'); 
        }
        else
        {
            var tabla = document.createElement('table');
        }

        var cabecera = document.createElement('tr');
        var max = 0;
        var maximo = 0;
        var contador = 0;
        for(var i in data)
        {
            for(var j in data[i])
            {
                contador++;
            }
            if(contador > maximo)
            { 
                max = i;
                maximo = contador;
            }
            contador = 0;
        }
        for(var clave in data[max])
        {
            var th = document.createElement('th');
            var texto = document.createTextNode(clave);
            th.appendChild(texto);
            cabecera.appendChild(th);
        }
        tabla.appendChild(cabecera);

        for(var i in data)
        {
            var fila = document.createElement('tr');
            for(var j in data[i])
            {
                var celda = document.createElement('td');
                var dato = document.createTextNode(data[i][j]);
                celda.appendChild(dato);
                fila.appendChild(celda);
            }
            fila.addEventListener('click', function(e){
                var tr = e.target.parentNode;
                tr = tr.childNodes;
                for(var x = 0; x < tr.length; x++)
                {
                    console.log(tr[x].innerHTML);
                }
            });
            tabla.appendChild(fila);
        }
        document.getElementById('info').appendChild(tabla);
    }
}