import { barcelona, roma, paris, londres } from './ciudades.js'

// obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// Agregar un elemento click a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //Remover la clase "active" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        })
        //Agregar la clase "active" al enlace actual
        this.classList.add('active')
        
    //Obtener el contenido correspondiente segun el enlace
    let contenido = obtenerContenido(this.textContent)

    //Mostrar el contenido en el DOM 
    tituloElemento.innerHTML = contenido.titulo
    subtituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    precioElemento.innerHTML = contenido.precio
    });
});

//Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}