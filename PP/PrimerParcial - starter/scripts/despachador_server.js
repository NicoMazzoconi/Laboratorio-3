var xhr;

function traerPersonas()
{
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = procesarPersonas;
  var cadena = 'http://localhost:3000/traer?collection=personas';
  xhr.open('GET',cadena,true);
  xhr.send();
    
}

function insertarPersona(persona)
{
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = procesarPersonas;
  var cadena = 'http://localhost:3000/agregar';
  var body = {'collection':'personas','objeto':persona}
  xhr.open('POST', cadena, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(body));     
}

function eliminarPersona(id)
{
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = procesarPersonas;
  var cadena = 'http://localhost:3000/eliminar ';
  var body = {'collection':'personas','id':id}
  xhr.open('POST', cadena, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(body));
}

function modificarPersona(persona)
{
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = procesarPersonas;
  var cadena = 'http://localhost:3000/modificar';
  var body = {'collection':'personas','objeto':persona}
  xhr.open('POST', cadena, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(body));
}

function procesarPersonas()
{
  if(xhr.readyState == 4)
  {
    if(xhr.status == 200)
    {
      var lista = JSON.parse(xhr.responseText);
      if(lista.data != null)
      {
          actualizarTabla(lista);
          setSpinner(false);
      }
      else
      {
          traerPersonas();
      }
    }
  }
  else
  {
      setSpinner(true);
  }
}
