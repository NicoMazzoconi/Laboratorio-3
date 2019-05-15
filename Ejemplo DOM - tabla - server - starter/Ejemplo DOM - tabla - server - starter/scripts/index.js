window.onload = function(){
    var boton = document.getElementById('miBoton').addEventListener('click', traerPersona);
}



function MostrarSpinner()
{
    var spinner = document.getElementById('spinner');
    spinner.style = "display: block";
}

function refrescarLista(array)
{
    spinner.style = "dispay: none";


    if(array != null)
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
        for(var i in array)
        {
            for(var j in array[i])
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
        for(var clave in array[max])
        {
            var th = document.createElement('th');
            var texto = document.createTextNode(clave);
            th.appendChild(texto);
            cabecera.appendChild(th);
        }
        tabla.appendChild(cabecera);

        for(var i in array)
        {
            var fila = document.createElement('tr');
            for(var j in array[i])
            {
                var celda = document.createElement('td');
                var dato = document.createTextNode(array[i][j]);
                celda.appendChild(dato);
                fila.appendChild(celda);
            }
            fila.addEventListener('click', function(e){
                var tr = e.target.parentNode;
                tr = tr.childNodes;
                modificar(tr[0].innerHTML, array);
            });
            tabla.appendChild(fila);
        }
        document.getElementById('info').appendChild(tabla);
    }
}

function modificar(str, array)
{
    var divForm = document.createElement('div');
    var form = document.createElement('form');
    divForm.appendChild(form);
    divForm.setAttribute('id', "divForm");
    var body = document.getElementsByTagName('body')[0];
    var dato;
    for(var i in array)
    {
        if(array[i].id == str)
        {
            dato = array[i];
        }
    }
  
    var p2 = document.createElement('p');
    var txtNode = document.createTextNode(dato.first_name);
    p2.appendChild(txtNode);
    form.appendChild(p2);
    var p3 = document.createElement('p');
    var txtNode = document.createTextNode(dato.last_name);
    p3.appendChild(txtNode);
    form.appendChild(p3);
    var p4 = document.createElement('p');
    var txtNode = document.createTextNode(dato.email);
    p4.appendChild(txtNode);
    form.appendChild(p4);
    body.appendChild(divForm);

    
}