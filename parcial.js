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
    let flag = false
    let id;  
    let mensaje;
    let existe = false;
    do{ 
        if(flag){
            mensaje ='uno de los valores ingresados es incorrecto'
            alert(mensaje)
        }
        do{
            id = parseInt(prompt('Ingrese Código del Disco'))
            for(let disco of discos){
                console.log(disco)
                if(disco.id == id){                
                    mensaje = 'El código único ingresado ya existe'
                    existe = true
                    alert(mensaje)
                }
                existe = false
            }
            if(id < 1 || id > 999){                    
                mensaje = 'El código debe estar entre 1 y 999'
                flag = true
                alert(mensaje)
            }else{
                
            }   
        }while(existe == true || flag == true)

        nombreDisco = prompt('Ingrese Nombre de Disco');
        autor = prompt('Ingrese nombre del Autor');    
        
        flag = true        
    }while((!isNaN(nombreDisco) || !isNaN(autor)) || isNaN(id))
    

    let disco = new Discos(id, nombreDisco, autor)
    disco.establecerPistas();

    discos.push(disco)
    

    console.log(discos)
};

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html;
    // Cositas:
    for(let disco of discos){
        html += disco.GetPistas()
    }
    

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:
