//Enviar peticion GET a http://localhost:3000/traer
//pasar parametro "collection"  con valor "personas"  
//La respuesta sera un array con las personas

var xhr;
function traerPersona()
{
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarPersona;
    var cadena = "http://localhost:3000/traer?collection=personas";
    xhr.open('GET', cadena, true);
    xhr.send();
}

function procesarPersona()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            arrayPersonas = JSON.parse(xhr.responseText);
            refrescarLista(arrayPersonas);
        }
        else
        {
            alert('Error: ' + xhr.status + '-' + xhr.statusText);
        }
    }
    else
    {
        MostrarSpinner();
    }
}