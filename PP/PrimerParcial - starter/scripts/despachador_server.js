var xhr;

/*function traerPersonas()
{
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = procesarPersonas;
  var cadena = 'http://localhost:3000/traer?collection=personas';
  xhr.open('GET',cadena,true);
  xhr.send();
    
}*/

function traerPersonas()
{
    $.ajax({
        url: "http://localhost:3000/traer?collection=personas",
        beforeSend: function(){
            setSpinner(true);
        },
        success: function(respuesta){
            actualizarTabla(respuesta);
            setSpinner(false);
        },
        error: function(xhr,status){
            alert("Error: " + status + " " + xhr.statusText);
        }
    });
}

/*function insertarPersona(persona)
{
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = procesarPersonas;
  var cadena = 'http://localhost:3000/agregar';
  var body = {'collection':'personas','objeto':persona};
  xhr.open('POST', cadena, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(body));     
}*/

function insertarPersona(persona)
{
  var body = {'collection':'personas','objeto':persona};
  $.ajax({
    url: "http://localhost:3000/agregar",
    data: JSON.stringify(body),
    type:"post",
    contentType: 'application/json',
    beforeSend: function(){
        setSpinner(true);
    },
    success: function(respuesta){
        traerPersonas();
        setSpinner(false);
    },
    error: function(xhr,status){
        alert("Error: " + status + " " + xhr.statusText);
    }
});
}

/*function eliminarPersona(id)
{
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = procesarPersonas;
  var cadena = 'http://localhost:3000/eliminar ';
  var body = {'collection':'personas','id':id}
  xhr.open('POST', cadena, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(body));
}*/

function eliminarPersona(id)
{
  var body = {'collection':'personas','id':id};
  $.ajax({
    url: "http://localhost:3000/eliminar",
    data: JSON.stringify(body),
    type:"post",
    contentType: 'application/json',
    beforeSend: function(){
        setSpinner(true);
    },
    success: function(respuesta){
        traerPersonas();
        setSpinner(false);
    },
    error: function(xhr,status){
        alert("Error: " + status + " " + xhr.statusText);
    }
});
}

/*function modificarPersona(persona)
{
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = procesarPersonas;
  var cadena = 'http://localhost:3000/modificar';
  var body = {'collection':'personas','objeto':persona}
  xhr.open('POST', cadena, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(body));
}*/

function modificarPersona(persona)
{
  var body = {'collection':'personas','objeto':persona};
  $.ajax({
    url: "http://localhost:3000/modificar",
    data: JSON.stringify(body),
    type:"post",
    contentType: 'application/json',
    beforeSend: function(){
        setSpinner(true);
    },
    success: function(respuesta){
        traerPersonas();
        setSpinner(false);
    },
    error: function(xhr,status){
        alert("Error: " + status + " " + xhr.statusText);
    }
});
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

