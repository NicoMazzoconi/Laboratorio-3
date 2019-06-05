$(function(){
    inicializarEventos();
});

function inicializarEventos()
{
    $("#btnEnviarAjax").click(enviarAjax);
    $("#btnEnviarGet").click(enviarGet);
    $("#btnEnviarGetMensajes").click(enviarGetMensajes);
    $("#btnEnviarPost").click(enviarPost);
    $("#btnGetJSON").click(getJSON);
    $("#btnLoad").click(userLoad);
}

function enviarAjax(e)
{
    e.preventDefault();

    //Obtenemos los valores de los text
    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    var parametros = {
        "legajo":legajo,
        "nombre":nombre
    };

    $.ajax({
        url: "http://localhost:3000/concatenar/",
        data: parametros,
        /*
        type:pots,
        dataType: "json",
        */
        beforeSend: function(){
            $("#info").html("<img src='./images/spin.gif' alt='preLoader'>");
        },
        success: function(respuesta){
            $("#info").html(respuesta);
        },
        error: function(xhr,status){
            alert("Error: " + status + " " + xhr.statusText);
        },
        complete: function(xhr, status)
        {
            alert("Peticion terminada");
        }
    });
}

function enviarGet(e)
{
    e.preventDefault();
    
    //Obtenemos los valores de los text
    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    var parametros = {
        "legajo":legajo,
        "nombre":nombre
    };

    $.get("http://localhost:3000/concatenar", parametros, function(respuesta){
        $("#info").text(respuesta);
    });
}

function enviarGetMensajes(e)
{
    e.preventDefault();

    //Obtenemos los valores de los text
    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    var parametros = {
        "legajo":legajo,
        "nombre":nombre
    };

    $.get("http://localhost:3000/concatenar", parametros, function(respuesta){
        $("#info").text(respuesta);
    }).done(function(){
        alert("Done");
    }).fail(function(){
        alert("Fail");
    }).always(function(){
        alert("Always");
    });
}

function enviarPost(e)
{
    e.preventDefault();

    //Obtenemos los valores de los text
    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    var parametros = {
        "legajo":legajo,
        "nombre":nombre
    };

    $.post("http://localhost:3000/loadpost", function(respuesta){
        console.log(respuesta);
    });

    $.post("http://localhost:3000/saludo", parametros, function(respuesta){
        console.log(respuesta);
    });
}

function getJSON(e)
{
    
}

function userLoad(e)
{
    e.preventDefault();

    $("#info").load("http://localhost:3000/loadhtml div p");
}