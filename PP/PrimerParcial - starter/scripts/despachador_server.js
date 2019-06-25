var xhr;


function traerPersonas(filtro)
{
    setSpinner(true);
    var data = localStorage.getItem('data');
    var lista = JSON.parse(data);

    var activos=lista.filter(function(elemento){
        return elemento.active;
    });
    
    actualizarTabla(activos, filtro);
    setTimeout(function(){
        setSpinner(false)
    }, 2000);
}


function insertarPersona(persona)
{
  var ultimo = localStorage.getItem('data');
  ultimo = JSON.parse(ultimo);
  var tam = ultimo.length;
  ultimo = ultimo[tam-1];
  var id = ultimo.id + 1;
  persona.id = id;
  var todos = localStorage.getItem('data');
  todos = JSON.parse(todos);
  todos.push(persona);
  localStorage.setItem('data', JSON.stringify(todos));
  traerPersonas(0);
}

function eliminarPersona(id)
{
  var todos = localStorage.getItem('data');
  todos = JSON.parse(todos);
  for(var i = 0; i < todos.length; i++)
  {
      if(id == todos[i].id)
    {
        todos[i].active = false;
        localStorage.setItem('data', JSON.stringify(todos));
        break;
    }
  }
  traerPersonas(0);
}

function modificarPersona(persona)
{
    var todos = localStorage.getItem('data');
    todos = JSON.parse(todos);
    for(var i = 0; i < todos.length; i++)
    {
        if(persona.id == todos[i].id)
        {
            todos[i].first_name = persona.first_name;
            todos[i].last_name = persona.last_name;
            todos[i].email = persona.email;
            todos[i].gender = persona.gender;
            todos[i].provincia = persona.provincia;
            todos[i].edad = persona.edad;
            todos[i].tipo = persona.tipo;
            localStorage.setItem('data', JSON.stringify(todos));
            break;
        }
    }
    traerPersonas(0);
}
