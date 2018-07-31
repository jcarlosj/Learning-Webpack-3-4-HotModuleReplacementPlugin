import './master.css';
import message from './message.js';

const elP = document .createElement( 'p' ),
      $container = document .getElementById( 'container' );

const printMessage = () => {
    elP .textContent = `Este es un ejemplo básico de WebPack usando ${ message() }`;
}
printMessage();

$container .appendChild( elP );

console .log( 'Hola Mundo!' );

/* Validamos si el módulo HotModuleReplacementPlugin esta activo 'caliente' */
if( module .hot ) {
    /* Aquí colocamos el archivo que queremos escuchar por cambios */
    module .hot .accept(
        './message.js',       /* Path: del archivo a escuchar */
        () => { /* Acción que vamos a realizar */
            console .log( 'Ha cambiado -> message.js' );
            printMessage();
        }
    );
}
