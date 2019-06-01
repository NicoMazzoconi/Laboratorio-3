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
    tabla = document.getElementById('tablaLista');
    spin = document.getElementById('divSpin');
    
    btnAlta.addEventListener('click', function(){
        mostrarFormulario();
    });
    traerPersonas();
};

function actualizarTabla(data)
{
    lista = data.data;
    for(var i=0;i<lista.length;i++){
        var tr = document.createElement("tr");
        for(var j=0;j<Object.keys(lista[i]).length;j++){
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

    //PARRAFOS
    var pName = document.createElement('p');
    var pLast = document.createElement('p');
    var pEmail = document.createElement('p');
    var pSexo = document.createElement('p');
    var pActivo = document.createElement('p');

    //LABEL
    var lblName = document.createElement('label');
    var lblLast = document.createElement('label');
    var lblEmail = document.createElement('label');
    var lblSexo = document.createElement('label');
    var lblHombre = document.createElement('label');
    var lblMujer = document.createElement('label');
    var lblActivo = document.createElement('label');
    var lblInactivo = document.createElement('label');

    //NODE TEXT
    var nodeTextName = document.createTextNode("NOMBRE");
    var nodeTextLast = document.createTextNode("APELLIDO");
    var nodeTextEmail = document.createTextNode("EMAIL");
    var nodeTextSexo = document.createTextNode("SEXO");
    var nodeTextHombre = document.createTextNode("HOMBRE");
    var nodeTextMujer = document.createTextNode('MUJER');
    var nodeTextActivo = document.createTextNode("ACTIVO");
    var nodeTextInactivo = document.createTextNode("INACTIVO");

    //AGREGO LOS NODE TEXT A LOS LABEL
    lblName.appendChild(nodeTextName);
    lblLast.appendChild(nodeTextLast);
    lblEmail.appendChild(nodeTextEmail);
    lblSexo.appendChild(nodeTextSexo);
    lblHombre.appendChild(nodeTextHombre);
    lblMujer.appendChild(nodeTextMujer);
    lblActivo.appendChild(nodeTextActivo);
    lblInactivo.appendChild(nodeTextInactivo);

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

    //INPUTS RADIO
    var inputHombre = document.createElement('input');
    inputHombre.setAttribute('type', 'radio');
    inputHombre.setAttribute('name', 'sexo');
    inputHombre.setAttribute('checked', true);

    var inputMujer = document.createElement('input');
    inputMujer.setAttribute('type', 'radio');
    inputMujer.setAttribute('name', 'sexo');

    var inputTrue = document.createElement('input');
    inputTrue.setAttribute('type', 'radio');
    inputTrue.setAttribute('name', 'activo');
    inputTrue.setAttribute('checked', true);

    var inputFalse = document.createElement('input');
    inputFalse.setAttribute('type', 'radio');
    inputFalse.setAttribute('name', 'activo');

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

    pActivo.appendChild(inputTrue);
    pActivo.appendChild(lblActivo);

    pActivo.appendChild(inputFalse);
    pActivo.appendChild(lblInactivo);

    //AGREGO AL FORM
    formulario.appendChild(pName);
    formulario.appendChild(pLast);
    formulario.appendChild(pEmail);
    formulario.appendChild(pSexo);
    formulario.appendChild(pActivo);


    if(persona)
    {
        //Cargo los inputs
        inputName.setAttribute('value', persona.first_name);
        inputLast.setAttribute('value', persona.last_name);
        inputEmail.setAttribute('value', persona.email);

        if(persona.gender == "Female")
            inputMujer.checked = true;
        else
            inputHombre.checked = true;

        if(persona.active)
            inputTrue.checked = true;
        else
            inputFalse.checked = true;

        //Creo boton guardar
        var btnGuardar = document.createElement('button')
        var txtNodeGuardar = document.createTextNode("Guardar");
        btnGuardar.appendChild(txtNodeGuardar);
        formulario.appendChild(btnGuardar);

        //Creo el boton cancelar
        var btnCancelar = document.createElement('button')
        btnCancelar.innerText = "Cancelar";
        formulario.appendChild(btnCancelar);

        //Creo el boton borrar
        var btnBorrar = document.createElement('button')
        var txtNodeBorrar = document.createTextNode("Borrar");
        btnBorrar.appendChild(txtNodeBorrar);
        formulario.appendChild(btnBorrar);

        //Agrego eventos a los botones
        btnCancelar.addEventListener('click', function(){
            inputName.removeAttribute('required');
            inputEmail.removeAttribute('required');
            inputLast.removeAttribute('required');
            formMod.style = 'display: none';
            formMod.remove;
        });

        btnGuardar.addEventListener('click', function(){
            if(inputEmail.validity.valid)
            {
                var sex;
                var act;
                if(inputHombre.checked)
                    sex = "Male";
                else
                    sex = "Female";
                
                if(inputTrue.checked)
                    act = true;
                else
                    act = false;

                var usuario = {
                    "id":persona.id,
                    "first_name":inputName.value,
                    "last_name":inputLast.value,
                    "email":inputEmail.value,
                    "gender":sex,
                    "active":act
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
        btnGuardar.appendChild(txtNodeGuardar);
        formulario.appendChild(btnGuardar);

        //Creo el boton cancelar
        var btnCancelar = document.createElement('button')
        btnCancelar.innerText = "Cancelar";
        formulario.appendChild(btnCancelar);

        //Agrego eventos a los botones
        btnCancelar.addEventListener('click', function(){
            inputName.removeAttribute('required');
            inputEmail.removeAttribute('required');
            inputLast.removeAttribute('required');
            formAlta.style = 'display: none';
            formAlta.remove;
        });

        btnGuardar.addEventListener('click', function(){
            if(inputEmail.validity.valid)
            {
                var sex;
                var act;
                if(inputHombre.checked)
                    sex = "Male";
                else
                    sex = "Female";
                
                if(inputTrue.checked)
                    act = true;
                else
                    act = false;

                var usuario = {
                    "id":"-1",
                    "first_name":inputName.value,
                    "last_name":inputLast.value,
                    "email":inputEmail.value,
                    "gender":sex,
                    "active":act
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
