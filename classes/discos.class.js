class Discos {
    #pistas = []
    
    
    //------------------------------------
    //PARA PROBAR
    //#pistas;
    //------------------------------------

    
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
            
            flag ? alert(mensaje): ''
    }while(flag == true || seguir == true)
    
    };

    //PRUEBA
    //-----------------------------------------------------------------------
    // establecerPistas(pistas){
    //     this.#pistas = pistas
    // }
    //-----------------------------------------------------------------------


    GetPistas(){      
            let html = '';
            let duracionAlbum = 0;
            let contador = 0
            
            for (let pista of this.#pistas) {                
                duracionAlbum += pista.duracion
                contador++                
                html += `
                        <ul>
                        <li>${contador} - Nombre: ${pista.nombre}, Duración: <span style="color: ${pista.duracion >= 180 ? 'red':'green'};">${pista.duracion}</span> segundos</li>                        
                        </ul>`
            }
            let tiempo =  this.SegundoToMinutos(duracionAlbum)
            
            html += `<br>
                <h3>Duración Total del Album: ${tiempo.min} minutos, ${tiempo.seg} segundos</h3>
                <br>`;
            return html;       
    }

    GetPromedio(){
        let html = ''
        let suma = 0
        let promedio = 0
        let contador = 0
        for (let pista of this.#pistas) {            
            suma += pista.duracion
            contador++            
            promedio = suma / contador                
        }

        let tiempoPromedio = this.SegundoToMinutos(promedio)
        html += `<h3>Promedio de duración de los temas del albúm ${this.nomDisco}: ${tiempoPromedio.min} minutos ${tiempoPromedio.seg} segundos</h3>`
        return html
    }

    SegundoToMinutos(segundo){
        let minutos = Math.floor(segundo/60)
        let second = Math.round(segundo - minutos * 60)

        return {
            min : minutos,
            seg: second
        }
    }

    PistaConMayorDura(){                        
        let html = ''

        let pistaMax = Math.max.apply(Math, this.#pistas.map(e => e.duracion))        
        for(let pista of this.#pistas){
        html = `<h3>La Pista de Mayor duración del album <b>${this.nomDisco}</b> del autor <b>${this.autor}</b> es: nombre: ${pista.nombre} duración: ${pistaMax}</h3>` 
        }
        
        return html
    }
}
