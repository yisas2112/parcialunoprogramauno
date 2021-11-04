'use strict';

/*
 * RODRIGUEZ, JESÚS | RODRIGUEZ, JESÚS
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

//PARA PROBAR FUNCIÓN MOSTRAR
//let discos = [disco];



// Función Cargar:
const Cargar = () => {
    // Cositas:
    let nombreDisco;    
    let autor;
    let flag = false
    let id;  
    let mensaje;    
    
    do{
        flag = false
        id = parseInt(prompt('Ingrese Código del Disco'))
        
        for(let disco of discos){                                    
            if(disco.id == id){                                
                mensaje = 'El código único ingresado ya existe'
                flag = true                
            }
        }
        if(id < 1 || id > 999){                                
            mensaje = 'El código debe estar entre 1 y 999'
            flag = true
        }else if(isNaN(id)){
            mensaje = 'El código no puede estar vacío'
            flag = true            
        }        
        flag ? alert(mensaje) : ''
    }while(flag == true)
    
    do{
        flag = false        
        autor = prompt('Ingrese nombre del Autor/Banda');    
        nombreDisco = prompt('Ingrese Nombre de Disco');
        
        if(autor == '' || nombreDisco == ''){                        
            mensaje = 'Los campos no pueden estar vacíos'            
            flag = true
        }else if(!isNaN(autor)|| !isNaN(nombreDisco)){            
            mensaje = 'Valor/es incorrecto/s'
            flag = true            
        }

        flag ? alert(mensaje) : ''
        
    }while(flag == true)
    
    let disco = new Discos(id, nombreDisco, autor)
    disco.establecerPistas();

    discos.push(disco)    
};

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';
    // Cositas:
    for(let disco of discos){        
        html += `
                <h2>Autor: ${disco.autor}</h2>
                <h2>Nombre del Disco: ${disco.nomDisco}</h2>`
        html += disco.GetPistas()
        
        //PARA PROBAR
        // html += `
        // <h2>Autor: ${disco.Autor}</h2>
        // <h2>Nombre del Disco: ${disco.Nombre}</h2>`
       
    }    
    
    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:

const Estadisticas = ()=>{
    let html = ''
    for(let disco of discos){
        html += disco.GetPromedio()        
    }    

    document.getElementById('stats').innerHTML = html; // <--- ahí es acá
}

const ObtenerPistaMaxima = ()=>{
    let html = ''
    for(let disco of discos){
        let pistaMax = disco.PistaConMayorDura()
        console.log(pistaMax)
        html += `La Pista de Mayor duración del Album: ${pistaMax.nomDisco} del Autor/Album: ${pistaMax.autor} es:`
    }
    
    
    document.getElementById('stats').innerHTML = html; // <--- ahí es acá


}
