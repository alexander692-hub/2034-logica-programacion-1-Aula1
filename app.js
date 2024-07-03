/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

function intentoDeUsuario() {
    alert('click desde el boton');
}*/

        let numeroSecreto = 0;
        let intentos = 0;

                function asignarTextoElemento(elemento, texto){
                    let elementoHTML = document.querySelector(elemento);
                    elementoHTML.innerHTML = texto;
                    return;
                }

                    function verificarIntento() {
                        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
                        console.log(intentos);
                    
                        if (numeroDeUsuario === numeroSecreto) {
                            asignarTextoElemento('p',`Acertaste el número en ${intentos} 
                                ${(intentos === 1) ? 'vez' : 'veces'}`);
                               document.getElementById('reiniciar').removeAttribute('disabled'); //activa el boton al terminar el primer juego y asi poder volver a jugar
                        }else {
                            // el usuario nbo acerto
                            if (numeroDeUsuario > numeroSecreto) {
                                asignarTextoElemento('p','El número secreto es menor');
                        }else {
                            asignarTextoElemento('p','El número secreto es mayor');
                        }
                        intentos++;
                        limpiarCaja(); //llamamos la variable para limpiar los datos del jugador
                        }
                        return;
                    }

                    function limpiarCaja() {
                       //let valorCaja = document.querySelector('#valorUsuario') //este valor es el de nuestro imput
                      // valorCaja.value = ''; //esto nos indica limpiar la pantalla al jugar '' comillas simploes significa valor vacio 
                       //el simbolo # indica que queremos el id  
                       document.querySelector('#valorUsuario').value = '';
                    }

                function generarNumeroSecreto() {
                    return  Math.floor(Math.random()*10)+1;
                }

                function condicionesDeInicio () {
                    asignarTextoElemento('h1','Juego del numero secreto');
                asignarTextoElemento('p','Indica un numero del 1 al 10');
                numeroSecreto = generarNumeroSecreto();
                intentos = 1;
                }
                
                function reiniciarJuego(){
                    // 1) limpiar la caja
                    limpiarCaja();
                    // 2) indicar mensaje de intervalo de numeros                  
                    // 3) generar el numero aleatorio nuevamente
                    // 4) inicializar el numero de intentos;
                    condicionesDeInicio(); //encapsulamos los tres parametros en un solo para llamarlos

                    // 5) deshabilitar el boton de nuevo juego
                    document.querySelector('#reiniciar').setAttribute('disabled','true'); // 6) habilitar el boton de nuevo juego                                
                }
                condicionesDeInicio();
                