/* document.getElementById("p1").onclick = function(){
    this.innerHTML = "parrafo";
}; */

/* document.getElementById("p1").addEventListener('click', function(){
    this.innerHTML = "parrafo";
}); */
var p1;
window.addEventListener('load', function inicializarEventos(){
    p1 = document.getElementById("p1");
    p1.addEventListener('click', function(){
        this.innerHTML = "porque me la re banco";
    })
});
