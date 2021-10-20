'use strict';

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

class Discos {
    constructor(id,disco,autor,duracion){
        this.id = id;
        this.disco = disco;
        this.autor = autor;
        this.duracion = duracion;
    }

    
}

// Discos:
let discos = [];

// Función Cargar:
const Cargar = () => {
    // Cositas:
    let nombre;    
    let autor;
    let song = []
    let canciones=[{
        nombre: '',
        duracion:''
    }]
    let seguir
    do{        
        nombre = prompt('Ingrese Nombre de Disco')        
        autor = prompt('Ingrese nombre del Autor')               
        console.log(nombre)
    }while((!isNaN(nombre) ||    !isNaN(autor)))
    console.log(autor,nombre)

    do{
        canciones.nombre = prompt('Ingrese nombre de canción');
        canciones.duracion = prompt('Ingrese Duración');
        song.push(canciones)
        seguir = confirm('Desea seguir ingresando canciones al disco?')
        console.log(song)
        
    }while(!isNaN(canciones.nombre) && isNaN(canciones.duracion) && seguir == true)


    
};

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';

    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:
