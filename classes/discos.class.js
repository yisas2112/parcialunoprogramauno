class Discos {
    //Variable privada de la clase
    #pistas = []
    //Constructor para inicializar la clase
    constructor(id, nomDisco,autor){
        this.id = id
        this.nomDisco = nomDisco;
        this.autor = autor;
    }

    //Función que establece las pistas del albúm
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

    return this.#pistas

    };

    //Función que establece las pistas de prueba
    //-----------------------------------------------------------------------
    establecerPistasTest(pistas){
        this.#pistas = pistas
    }
    //-----------------------------------------------------------------------

    //Getter de las pistas
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

            html += this.GetPromedio()            
            return html;       
    }
    // Get Promedio de las pistas por albúm
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
        html += `<h3>Promedio de duración del albúm: ${tiempoPromedio.min} minutos ${tiempoPromedio.seg} segundos</h3>`
        return html
    }
    //Función para pasar de segundos a minutos y segundo
    SegundoToMinutos(segundo){
        let minutos = Math.floor(segundo/60)
        let second = Math.round(segundo - minutos * 60)

        return {
            min : minutos,
            seg: second
        }
    }
    //Getter de Promedio de Duración por albúm
    PistaConMayorDura(){                        
        let html = ''

        let pistaMax = Math.max.apply(Math, this.#pistas.map(e => e.duracion))  
        let toMinut = this.SegundoToMinutos(pistaMax)
        for(let pista of this.#pistas){
        html = `<div id= 'pista__mayor'>
                <h3>La pista de mayor duración del album <b>${this.nomDisco}</b> del autor <b>${this.autor}</b> es <b>${pista.nombre}</b> con una duración de ${toMinut.min} minutos ${toMinut.seg} segundos</h3>
                </div>` 
        }
        
        return html
    }
    SetPistasToLocal(disco){        
        let prueba = []
        let pruebaObj = {
            id : this.id,
            nomDisco: this.nomDisco,
            autor : this.autor,
            pistas: [this.#pistas]

        }
        
        prueba.push(pruebaObj)  
        
        localStorage.setItem('discos', JSON.stringify(disco));
        
    }
}
