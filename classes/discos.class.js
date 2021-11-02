class Discos {
    #pistas = []
    
    constructor(id, nomDisco,autor){
        this.id = id
        this.nomDisco = nomDisco;
        this.autor = autor;
        
        
    }

    establecerPistas(){        
        let nombre = '';
        let duracion = 0;
        let flag = false;
        let mensaje = ''
        let seguir = false
        do{
            flag = false
            let song = {
                nombre: '',
                duracion: 0    
            }            
            nombre = prompt('Ingrese nombre de canción');
            duracion = parseInt(prompt('Ingrese Duración (Segundos)'));
            
            song.nombre = nombre
            song.duracion = duracion
            if(nombre == '' || duracion == ''){
                mensaje = 'Los campos no pueden estar vacíos'
                flag = true
                
            }else if(!isNaN(nombre) || isNaN(duracion)){
                mensaje = 'Un valor o los valores son incorrectos'                
                flag = true
            }else if(duracion < 0 || duracion > 7200){                
                mensaje = 'La duración del tema debe estar entre 0 y 7200 segundos'                
                flag = true
            }else{
                this.#pistas.push(song)
                seguir = confirm('Desea seguir ingresando canciones?')                
            }
            console.log(this.#pistas)
            
            flag ? alert(mensaje): ''

       }while(flag == true || seguir == true)
    
    };

    GetPistas(){      
            let html = '';
            let duracionAlbum = 0;
            let contador = 0
            for (let pista of this.#pistas) {
                duracionAlbum += pista.duracion
                contador++                
                html += `
                        <ul>
                        <li>${contador}- Título: ${pista.nombre}, Duración: <span style="color: ${pista.duracion >= 180 ? 'red':'green'};">${pista.duracion}</span> segundos</li>                        
                        </ul>`
            }
            html += `<h3>Duración Total del Album: ${duracionAlbum} segundos</h3>`;
            return html;
       
    }

    
}
