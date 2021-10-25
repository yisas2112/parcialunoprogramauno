class Pistas{
    #pistas =[]
    #nombre = '';
    #duracion = 0;


    constructor(){

    }

    establecerPistas(){
        do{    
                
            this.nombre = prompt('Ingrese nombre de canción');
            this.#duracion = parseInt(prompt('Ingrese Duración'));

            if(!isNaN(nom) || isNaN(tiempo)){
                alert('uno de los valores ingresados es incorrecto')
            }else{
                this.#pistas.push(this.#nombre,this.#duracion)
            }
            
        }while(!isNaN(nom) || isNaN(tiempo))
    };

    getPistas(){
        return 
    }


}