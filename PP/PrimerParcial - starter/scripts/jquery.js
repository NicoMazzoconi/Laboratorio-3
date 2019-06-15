
function traerPersona()
{
    $.ajax({
        url: "http://localhost:3000/traer?collection=personas/",
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