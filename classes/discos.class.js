class Discos {    
    
    #pistas = []
    static id = 0;
    constructor(nomDisco,autor){
        Discos.id++; 
        this.nomDisco = nomDisco;
        this.autor = autor;
        
    }

    establecerPistas(){
        let seguir = false;
        let nombre = '';
        let duracion = 0;
        do{
            let song = {
                nombre: '',
                duracion: 0    
            }            
            nombre = prompt('Ingrese nombre de canción');
            duracion = parseInt(prompt('Ingrese Duración'));

            song.nombre = nombre
            song.duracion = duracion

            if(!isNaN(nombre) || isNaN(duracion)){
                alert('uno de los valores ingresados es incorrecto')
            }else{
                this.#pistas.push(song)
                seguir = confirm('Desea seguir ingresando canciones?')
            }
            console.log(this.#pistas)
       }while(!isNaN(nombre) || isNaN(duracion) || seguir == true)
    };

    GetPistas(){
        return  Discos.id, this.nomDisco, this.autor

    }

    
}