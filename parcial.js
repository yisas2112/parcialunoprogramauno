'use strict';

/*
 * RODRIGUEZ, JESÚS | RODRIGUEZ, JESÚS
 */
// Discos:
let discos = [];


//-----------------------------------------------------------------------
//PARA PROBAR
//Ejemplo de la estructura de un disco:
// let nomDisco=  'El lado oscuro de la Programación';
// let autor = 'Los Programadores Anónimos';
// let id=  1;
// let pistas =[
//         {
//             nombre: 'Esa cajita loca llamada variablecita',
//             duracion: 200,
//         },
//         {
//             nombre: 'Nunca quise ser un NaN',
//             duracion: 180,
//         },
//         {
//             nombre: 'No quiero programar',
//             duracion: 90,
//         },
//         {
//             nombre: 'Bajo presión',
//             duracion: 240,
//         },
//         {
//             nombre: 'La odisea de las variables privadas',
//             duracion: 120,
//         },
//         {
//             nombre: 'Sr. Programador',
//             duracion: 720,
//         },
//     ];

// let disco = new Discos(id, nomDisco, autor)

// disco.establecerPistas(pistas)

// discos.push(disco)
//-----------------------------------------------------------------------


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
    }    
      
    
    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:

const ObtenerPistaMaxima = ()=>{
    let html = ''    
    for(let disco of discos){            
        html += disco.PistaConMayorDura()
    }
    document.getElementById('stats').innerHTML = html; // <--- ahí es acá
}

const BuscarAlbum = ()=>{
    let html = ''
    let flag = false
    let id;
    let mensaje = ''
    do{
        flag = false        
        id = parseInt(prompt('Ingrese código del album'))
        if(isNaN(id)){
            mensaje = 'El código tiene que ser un número'            
            flag = true            
        }
        flag ? alert(mensaje) : ''
    }while(flag == true)

    let resultado =  discos.filter(e =>{
        if(e.id == id){
            return e
        }
     })

    resultado.length == 0 ?  alert('No existe existe el código') : ''
    
    console.log(resultado)
    resultado.map(e=>{
        console.log(e)
        html = `
                <h2>Autor: ${e.autor}</h2>
                <h2>Nombre del Disco: ${e.nomDisco}</h2>`
            html += e.GetPistas()
                
    })
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
}
