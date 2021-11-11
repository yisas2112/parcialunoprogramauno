'use strict';
/*
 * RODRIGUEZ, JESÚS | RODRIGUEZ, JESÚS
 */
// Discos:
let discos = [];


//-----------------------------------------------------------------------
//Datos Precargados para probar
let nomDisco=  'A Contraluz';
let autor = 'La Vela Puerca';
let id=  1;
let pistas =[
        {
            nombre: 'Llenos de Magia',
            duracion: 232,
        },
        {
            nombre: 'Sin Palabras',
            duracion: 202,
        },
        {
            nombre: 'Dice',
            duracion: 306,
        },
        {
            nombre: 'De Atar',
            duracion: 40,
        },
        {
            nombre: 'Va Escampar',
            duracion: 120,
        },
        {
            nombre: 'Escobas',
            duracion: 239,
        },
    ];

let nomDisco1=  'Glamour & Violencia';
let autor1 = 'Once Tiros';
let id1=  2;
let pistas1 =[
        {
            nombre: 'Glamour & Violencia',
            duracion: 55,
        },
        {
            nombre: 'Que no Decaiga',
            duracion: 118,
        },
        {
            nombre: 'Calaverita y Culón',
            duracion: 280,
        },
        {
            nombre: 'Mal de Karma',
            duracion: 235,
        },
        {
            nombre: 'Dormilón',
            duracion: 232,
        },
        {
            nombre: 'Televicio',
            duracion: 317,
        },
];

let disco = new Disco(id, nomDisco, autor)
let disco1 = new Disco(id1, nomDisco1, autor1)

disco.establecerPistasTest(pistas)
disco1.establecerPistasTest(pistas1)

discos.push(disco)
discos.push(disco1)

//-----------------------------------------------------------------------

let flag = false
// Función Cargar: Establece los datos del Autor, Album y pistas
const Cargar = () => {    
    let nombreDisco;    
    let autor;
    //let flag = false
    let id;  
    //Depende del error que surga mensaje irá cambiando
    let mensaje;    
    
    /*Mientras el código no sea un número, esté vacío, no se encuentré entre el rango 1 y 99, 
    y se encuentre en el array Discos volverá a pedir que el usuario ingrese el código
    */
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
    
    //Nombre del Autor y Disco, ambos con validaciones
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
    
    //Se crea el objeto disco
    let disco = new Disco(id, nombreDisco, autor)
    //A objeto se le asignarán las pistas correspondientes
    disco.establecerPistas();
    //Por último se pushea al array de discos
    discos.push(disco)     
};

// Función Mostrar:
const Mostrar = () => {    
    // Variable para ir armando la cadena:  
    let html = '';            
    //Recorro el array discos para obtener los datos    
    for(let disco of discos){                 
        html += `<br>
                <h2>Autor: ${disco.autor}</h2>
                <h2>Nombre del Disco: ${disco.nomDisco}</h2>`
        //Método de la clase para obterner las pistas del albúm
        html += disco.getPistas()
    }
    // Se le indica dónde se deberá mostrar la info
    document.getElementById('info').innerHTML = html; 
    document.getElementById('stats').innerHTML = ''; 
};

//Función para obtener la pista máxima de cada albúm
const ObtenerPistaMaxima = ()=>{
    let html = ''    
    for(let disco of discos){            
        //Método de la clase para obterner la duración máxima
        html += disco.pistaConMayorDura()
    }
    // Se le indica dónde se deberá mostrar la info
    document.getElementById('stats').innerHTML = html;
    document.getElementById('info').innerHTML = ''; 
}

//Función para buscar un disco por su código
const BuscarAlbum = ()=>{
    let html = ''
    let flag = false
    let id;
    let mensaje = ''
    /*Mientras el código no sea un número volverá a pedirle al usuario que ingrese el código.    
    */
    do{
        flag = false        
        id = parseInt(prompt('Ingrese código del album'))
        if(isNaN(id)){
            mensaje = 'El código tiene que ser un número'            
            flag = true            
        }
        flag ? alert(mensaje) : ''
    }while(flag == true)
    
    //Luego de pasar la validación númerica del código pasamos a buscar si existe el disco buscado
    let resultado =  discos.filter(e =>{
        if(e.id == id){
            return e
        }
})
     //Si el código no existe mostrará un html diciendo que no existe
    resultado.length == 0 ?  html = '<h2>No existe el código</h2>' : '';
    
    //Si el albúm buscado existe lo mostramos
    resultado.map(e=>{        
        html = `
                <h2>Autor: ${e.autor}</h2>
                <h2>Nombre del Disco: ${e.nomDisco}</h2>`
            //Método de la clase para mostrar las pistas
            html += e.getPistas()
                
    })
    //Mostramos la info en el html
    document.getElementById('info').innerHTML = html; 
    document.getElementById('stats').innerHTML = ''; // <--- ahí es acá
}


