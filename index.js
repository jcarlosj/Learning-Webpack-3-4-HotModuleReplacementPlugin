import './master.css';

const elP = document .createElement( 'p' ),
      $container = document .getElementById( 'container' );

elP .textContent = 'Este es un ejemplo básico de WebPack';
$container .appendChild( elP );

console .log( 'Hola Mundo!' );
