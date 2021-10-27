class Discos {
    #pistas = []
    
    constructor(id, nomDisco,autor){
        this.id = id
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
            let html = '';
            html += `<h2>Autor: ${this.autor}<h2/>
            <h2>Nombre del Disco: ${this.nomDisco}<h2/>
            <ul>
            `
            for (let pista of this.#pistas) {
                html += `<li>Tema: ${pista.nombre}</li>
                        <li>Duración: ${pista.duracion}</li>`;
            }
            return html;
       
    }

    
}