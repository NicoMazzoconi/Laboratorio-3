
var btn = document.getElementById('miBtn');
btn.addEventListener('click', function(){tablaDeJSon(data);});


function tablaDeJSon(dato)
{
    if(dato != null)
    {
        var tabla = document.getElementById('miTabla');
        var keys = Object.keys(dato[0]);
        var trTitulo = document.createElement("tr");

        for(var i = 0; i < keys.length; i++)
        {
            var th = document.createElement("th");
            var texto = document.createTextNode(keys[i]);
            th.appendChild(texto);
            trTitulo.appendChild(th);
        }

        tabla.appendChild(trTitulo);
        
        for(var i = 0; i < dato.length; i++)
        {
            var tr = document.createElement("tr");
            var value = Object.values(dato[i]);

            for(var j = 0; j < keys.length; j++)
            {
                var td = document.createElement("td");
                var texto = document.createTextNode(String(value[j]));
                td.appendChild(texto);
                tr.appendChild(td);
            }
            
            tabla.appendChild(tr);
        }

        llamarDatos(tabla);
    }
}

function llamarDatos(tabla)
{
    var children = tabla.children;
    for(var i = 1; i < children.length; i++)
    {
        children[i].addEventListener('click', function(){
            var t = document.createTextNode(children[i].children.textContext);
            var elemento = docuemnt.getElementById('miP');
            elemento.appendChild(t);
        });
    }
}