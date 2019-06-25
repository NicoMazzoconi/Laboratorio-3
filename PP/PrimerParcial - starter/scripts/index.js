
var lista;
var tabla;
var btnAlta;
var formMod;
var formAlta;
var spin;

window.onload = function(){
    btnAlta = document.getElementById('btnAlta');
    formMod = document.getElementById('divFrmMod');
    formAlta = document.getElementById('divFrm');
    tabla = document.getElementById('bodyTabla');
    spin = document.getElementById('divSpin');
    
    btnAlta.addEventListener('click', function(){
        mostrarFormulario();
    });

    $('#filtro').change(function(){
        var filtro = $('#filtro').val();
        traerPersonas(filtro);
    });

    $('#checkboxId').change(function(){
        $("#idth").toggle();
        $('td:nth-child(1)').toggle();
    });
    $('#checkboxNombre').change(function(){
        $("#nombreth").toggle();
        $('td:nth-child(2)').toggle();
    });
    $('#checkboxApellido').change(function(){
        $("#apellidoth").toggle();
        $('td:nth-child(3)').toggle();
    });
    $('#checkboxEmail').change(function(){
        $("#emailth").toggle();
        $('td:nth-child(4)').toggle();
    });
    $('#checkboxGender').change(function(){
        $("#genderth").toggle();
        $('td:nth-child(5)').toggle();
    });
    $('#checkboxProvincia').change(function(){
        $("#provinciath").toggle();
        $('td:nth-child(6)').toggle();
    });
    $('#checkboxEdad').change(function(){
        $("#edadth").toggle();
        $('td:nth-child(7)').toggle();
    });
    $('#checkboxTipo').change(function(){
        $("#tipoth").toggle();
        $('td:nth-child(8)').toggle();
    });
    traerPersonas(0);
};

function actualizarTabla(data, filtro)
{
    if(tabla.hasChildNodes())
    {
        $('tbody').remove('#bodyTabla');
        tabla = document.createElement('tbody');
        tabla.setAttribute('id', 'bodyTabla');
        $('#tablaLista').append(tabla);
    }

    lista = data;

    for(var i=0;i<lista.length;i++){
        var tr = document.createElement("tr");
        if(lista[i].tipo == filtro || filtro == 0)
        {
            for(var j=0;j<Object.keys(lista[i]).length -1;j++){
                var td = document.createElement("td");
                var text =document.createTextNode(Object.values(lista[i])[j]);
                td.appendChild(text);
                tr.appendChild(td);
            }
            tr.addEventListener('click', function(e){
                var id = e.target.parentNode.firstChild.textContent;
                var personaMod = encontrarPersona(id);
                if(personaMod != -1)
                {
                    mostrarFormulario(personaMod);
                }
                else
                    alert("ERROR: Persona no encontrada");
            });
            tabla.appendChild(tr);
        }
    }

    var edades=0;
    var cantidad=0;
    var hombres = 0;

    var edadPromedio = lista.reduce(function(previo, actual){
        if(actual.tipo == filtro || filtro == 0)
        {
            cantidad++;
            edades = edades + parseInt(actual.edad);
            if(actual.gender == "Male")
                hombres++;
        }
    },0);


    $('#promGenero').val(hombres * 100 / cantidad + '%');
    $('#promEdad').val(edades / cantidad);
}

function encontrarPersona(id)
{
    for(var i in lista)
    {
        if(id == lista[i].id)
            return lista[i];
    }
    return false;
}

function setSpinner(bool)
{
    if(bool)
    {
        spin.style = 'display: block';
    }
    else
    {
        spin.style = 'display: none';
    }
}

function mostrarFormulario(persona)
{
    //EVITA QUE SE DUPLIQUE EL FORMULARIO
    if(document.getElementById('divFrmMod').hasChildNodes())
    {
        document.getElementById('divFrmMod').removeChild(document.getElementById('formABM'));
    }
    if(document.getElementById('divFrm').hasChildNodes())
    {
        document.getElementById('divFrm').removeChild(document.getElementById('formABM'));
    }

    //CREO EL FORMULARIO
    var formulario = document.createElement('form');
    formulario.setAttribute('id', 'formABM');
    
    //DIV FORM BOOSTRAP
    
    //PARRAFOS
    var pName = document.createElement('p');
    var pLast = document.createElement('p');
    var pEmail = document.createElement('p');
    var pSexo = document.createElement('p');
    var pProvincia = document.createElement('p');
    var pEdad = document.createElement('p');
    var pTipo = document.createElement('p');

    //LABEL
    var lblName = document.createElement('label');
    var lblLast = document.createElement('label');
    var lblEmail = document.createElement('label');
    var lblSexo = document.createElement('label');
    var lblHombre = document.createElement('label');
    var lblMujer = document.createElement('label');
    var lblProvinicia = document.createElement('label');
    var lblEdad = document.createElement('label');
    var lblTipo1 = document.createElement('label');
    var lblTipo2 = document.createElement('label');

    //NODE TEXT
    var nodeTextName = document.createTextNode("NOMBRE");
    var nodeTextLast = document.createTextNode("APELLIDO");
    var nodeTextEmail = document.createTextNode("EMAIL");
    var nodeTextSexo = document.createTextNode("SEXO");
    var nodeTextHombre = document.createTextNode("HOMBRE");
    var nodeTextMujer = document.createTextNode('MUJER');
    var nodeTextProvincia = document.createTextNode('PROVINCIA');
    var nodeTextEdad = document.createTextNode('EDAD');
    var nodeTextTipo1 = document.createTextNode('DIPUTADO');
    var nodeTextTipo2 = document.createTextNode('SENADOR');

    //AGREGO LOS NODE TEXT A LOS LABEL
    lblName.appendChild(nodeTextName);
    lblLast.appendChild(nodeTextLast);
    lblEmail.appendChild(nodeTextEmail);
    lblSexo.appendChild(nodeTextSexo);
    lblHombre.appendChild(nodeTextHombre);
    lblMujer.appendChild(nodeTextMujer);
    lblProvinicia.appendChild(nodeTextProvincia);
    lblEdad.appendChild(nodeTextEdad);
    lblTipo1.appendChild(nodeTextTipo1);
    lblTipo2.appendChild(nodeTextTipo2);

    //INPUTS TEXT
    var inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('required', true);
    var inputLast = document.createElement('input');
    inputLast.setAttribute('type', 'text');
    inputLast.setAttribute('required', true);
    var inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('required', true);
    var inputEdad = document.createElement('input');
    inputEdad.setAttribute('type', 'text');
    inputEdad.setAttribute('required', true);

    //INPUTS RADIO
    var inputHombre = document.createElement('input');
    inputHombre.setAttribute('type', 'radio');
    inputHombre.setAttribute('name', 'sexo');
    inputHombre.setAttribute('checked', true);

    var inputMujer = document.createElement('input');
    inputMujer.setAttribute('type', 'radio');
    inputMujer.setAttribute('name', 'sexo');

    var inputTipo1 = document.createElement('input');
    inputTipo1.setAttribute('type', 'radio');
    inputTipo1.setAttribute('name', 'tipo');
    inputTipo1.setAttribute('checked', true);

    var inputTipo2 = document.createElement('input');
    inputTipo2.setAttribute('type', 'radio');
    inputTipo2.setAttribute('name', 'tipo');

    //SELECT
    var inputProvincia = document.createElement('select');
    
    //Provincias
    var buenosAires = document.createElement('option');
    buenosAires.value = "Buenos Aires";
    buenosAires.innerHTML = "Buenos Aires";
    var cordoba = document.createElement('option');
    cordoba.value = "Cordoba";
    cordoba.innerHTML = "Cordoba";
    var mendoza = document.createElement('option');
    mendoza.value = "Mendoza";
    mendoza.innerHTML = "Mendoza";
    var entreRios = document.createElement('option');
    entreRios.value = "Entre Rios";
    entreRios.innerHTML = "Entre Rios";

    //AGREGO LAS PROVINCIAS
    inputProvincia.appendChild(buenosAires);
    inputProvincia.appendChild(cordoba);
    inputProvincia.appendChild(mendoza);
    inputProvincia.appendChild(entreRios);

    //AGREGO A LOS PARRAFOS 
    pName.appendChild(lblName);
    pName.appendChild(inputName);

    pLast.appendChild(lblLast);
    pLast.appendChild(inputLast);

    pEmail.appendChild(lblEmail);
    pEmail.appendChild(inputEmail);

    pSexo.appendChild(lblSexo);

    pSexo.appendChild(inputHombre);
    pSexo.appendChild(lblHombre);

    pSexo.appendChild(inputMujer);
    pSexo.appendChild(lblMujer);

    pProvincia.appendChild(lblProvinicia);
    pProvincia.appendChild(inputProvincia);

    pEdad.appendChild(lblEdad);
    pEdad.appendChild(inputEdad);

    pTipo.appendChild(inputTipo1);
    pTipo.appendChild(lblTipo1);

    pTipo.appendChild(inputTipo2);
    pTipo.appendChild(lblTipo2);

    //AGREGO AL FORM
    formulario.appendChild(pName);
    formulario.appendChild(pLast);
    formulario.appendChild(pEmail);
    formulario.appendChild(pSexo);
    formulario.appendChild(pProvincia);
    formulario.appendChild(pEdad);
    formulario.appendChild(pTipo);

    if(persona)
    {
        //Cargo los inputs
        inputName.setAttribute('value', persona.first_name);
        inputLast.setAttribute('value', persona.last_name);
        inputEmail.setAttribute('value', persona.email);
        inputEdad.setAttribute('value', persona.edad);
        switch(persona.provincia)
        {
            case 'Buenos Aires':
                inputProvincia.selectedIndex = 0;
                break;
            case 'Cordoba':
                inputProvincia.selectedIndex = 1;
                break;
            case 'Mendoza':
                inputProvincia.selectedIndex = 2;
                break;
            case 'Entre Rios':
                inputProvincia.selectedIndex = 3;
                break;
            default:
                inputProvincia.selectedIndex = 0;
                break;
        }
        
        if(persona.gender == "Female")
            inputMujer.checked = true;
        else
            inputHombre.checked = true;

        if(persona.tipo == "DIPUTADO")
            inputTipo1.checked = true;
        else
            inputTipo2.checked = true;

        //Creo boton guardar
        var btnGuardar = document.createElement('button')
        var txtNodeGuardar = document.createTextNode("Guardar");
        btnGuardar.setAttribute('class', 'btn btn-success');
        btnGuardar.appendChild(txtNodeGuardar);
        formulario.appendChild(btnGuardar);

        //Creo el boton cancelar
        var btnCancelar = document.createElement('button')
        btnCancelar.innerText = "Cancelar";
        btnCancelar.setAttribute('class', 'btn btn-danger');
        formulario.appendChild(btnCancelar);

        //Creo el boton borrar
        var btnBorrar = document.createElement('button')
        var txtNodeBorrar = document.createTextNode("Borrar");
        btnBorrar.setAttribute('class', 'btn btn-warning');
        btnBorrar.appendChild(txtNodeBorrar);
        formulario.appendChild(btnBorrar);

        //Agrego eventos a los botones
        btnCancelar.addEventListener('click', function(){
            inputName.removeAttribute('required');
            inputEmail.removeAttribute('required');
            inputLast.removeAttribute('required');
            inputEdad.removeAttribute('required');
            formMod.style = 'display: none';
            formMod.remove;
        });

        btnGuardar.addEventListener('click', function(){
            if(inputEmail.validity.valid)
            {
                var sex;
                if(inputHombre.checked)
                    sex = "Male";
                else
                    sex = "Female";
    
                var tipo;
                if(inputTipo1.checked)
                    tipo = "DIPUTADO";
                else
                    tipo = "SENADOR";

                var usuario = {
                    "id":persona.id,
                    "first_name":inputName.value,
                    "last_name":inputLast.value,
                    "email":inputEmail.value,
                    "gender":sex,
                    "provincia":inputProvincia.value,
                    "edad":inputEdad.value,
                    "tipo":tipo,
                    "active":true
                };

                modificarPersona(usuario);
                formMod.style = 'display: none';
            }       
        });

        btnBorrar.addEventListener('click', function(){
            eliminarPersona(persona.id);
        });

        //Llamo al form
        formMod.appendChild(formulario);
        formMod.style = 'display: block';
        
    }
    else
    {
        //Creo boton guardar
        var btnGuardar = document.createElement('button')
        var txtNodeGuardar = document.createTextNode("Guardar");
        btnGuardar.setAttribute('class', 'btn btn-success');
        btnGuardar.appendChild(txtNodeGuardar);
        formulario.appendChild(btnGuardar);

        //Creo el boton cancelar
        var btnCancelar = document.createElement('button')
        btnCancelar.innerText = "Cancelar";
        btnCancelar.setAttribute('class', 'btn btn-danger');
        formulario.appendChild(btnCancelar);

        //Agrego eventos a los botones
        btnCancelar.addEventListener('click', function(){
            inputName.removeAttribute('required');
            inputEmail.removeAttribute('required');
            inputLast.removeAttribute('required');
            inputEdad.removeAttribute('required');
            formAlta.style = 'display: none';
            formAlta.remove;
        });

        btnGuardar.addEventListener('click', function(e){
            e.preventDefault();
            if(inputEmail.validity.valid)
            {
                var sex;
                if(inputHombre.checked)
                    sex = "Male";
                else
                    sex = "Female";

                var tipo;
                if(inputTipo1.checked)
                    tipo = "DIPUTADO";
                else
                    tipo = "SENADOR";

                var usuario = {
                    "id":"-1",
                    "first_name":inputName.value,
                    "last_name":inputLast.value,
                    "email":inputEmail.value,
                    "gender":sex,
                    "provincia":inputProvincia.value,
                    "edad":inputEdad.value,
                    "tipo":tipo,
                    "active":true
                };

                insertarPersona(usuario);
                formAlta.style = 'display: none';
            }
        });

        //Llamo al form
        formAlta.appendChild(formulario);
        formAlta.style = 'display: block';
    }
}






//localStorage.setItem("nombre", "nico");//agrega
//var nombre = localStorage.getItem('nombre');//obtiene
//localStorage.removeItem('nombre');//borra uno a partir de clave
//localStorage.clear(); //borra todos
/*
localStorage.setItem("data",JSON.stringify(lista));
    var fabi = localStorage.getItem("aver");
    fabi = JSON.parse(fabi);
    console.log(fabi[1]);
    */