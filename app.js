/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

function intentoDeUsuario() {
    alert('click desde el boton');
}*/

    let parrafo = document.querySelector('p');
    parrafo.innerHTML = 'Indica un numero del 1 al 10';

    function asignarTextoElemnto(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        titulo.innerHTML = texto;
    }

    function intentoDeUsuario() {
        alert('click desde el boton');
    }