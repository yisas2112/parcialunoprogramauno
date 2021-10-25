class Discos {    
    
    #pistas = []
    static id = 0;
    constructor(nomDisco,autor){
        Discos.id++; 
        this.nomDisco = nomDisco;
        this.autor = autor;
        
    }

    establecerPistas(){
        let seguir = false
            
        do{ 
            let song = [{
                nombre: '',
                duracion: 0
        
            }]
            song.nombre = prompt('Ingrese nombre de canción');
            song.duracion = parseInt(prompt('Ingrese Duración'));

            if(!isNaN(song.nombre) || isNaN(song.duracion)){
                alert('uno de los valores ingresados es incorrecto')
            }else{
                this.#pistas.push(song)
                seguir = confirm('Desea seguir ingresando canciones?')
                
                
            }

            console.log(this.#pistas,seguir)

            
       }while(!isNaN(song.nombre) || isNaN(song.duracion) || seguir == true)
    };

    
}