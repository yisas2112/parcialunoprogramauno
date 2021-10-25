class Pistas{
    #nombre = '';
    #duracion = 0;


    constructor(){

    }

    establecerPita(){
        do{    
                
            this.nombre = prompt('Ingrese nombre de canción');
            this.#duracion = parseInt(prompt('Ingrese Duración'));

            if(!isNaN(nom) || isNaN(tiempo)){
                alert('uno de los valores ingresados es incorrecto')
            }
            
        }while(!isNaN(nom) || isNaN(tiempo))
    };


}