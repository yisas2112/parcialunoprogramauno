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



// Discos:
let discos = [];

// Función Cargar:
const Cargar = () => {
    // Cositas:
    let nombreDisco;    
    let autor;
    let song = []   
    let seguir = true;    
    let nom;
    let tiempo = 0    
    do{ 
        nombreDisco = prompt('Ingrese Nombre de Disco');
        autor = prompt('Ingrese nombre del Autor');    
        
        if(!isNaN(nombreDisco) || !isNaN(autor)){
            alert('uno de los valores ingresados es incorrecto')
        }
    }while((!isNaN(nombreDisco) || !isNaN(autor)))

    let disco = new Discos(nombreDisco, autor)
    disco.establecerPistas();

    console.log(disco)
        
    
    

    // do{    
    
    //     console.log(song)        
    //     song.push(pistas)
    //     console.log(song)
        
    //     if(!isNaN(nom) || isNaN(tiempo)){
    //         alert('uno de los valores ingresados es incorrecto')
    //     }else{
    //         seguir = confirm('Desea seguir ingresando canciones al disco?')
    //     }
        
    // }while(!isNaN(nom) || isNaN(tiempo) || seguir !== false)
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
