var modal;
var btnModal;
var btnCerrar;

window.addEventListener('load', ()=>{
    btnModal = document.getElementById('btnModal');
    btnCerrar = document.getElementById('btnCerrar');
    modal = document.getElementById('modal');
})

var btnModal = document.getElementById('btnModal');
        btnModal.addEventListener('click', ()=>{
            var modal = document.getElementById('modal');
            modal.open = !modal.open;
        });