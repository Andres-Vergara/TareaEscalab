
/*
4. Hacer un closure con contexto de "una persona tira un dado". Es decir, yo le entrego un nombre, por ejemplo:

var dadoJulio = nuevoDado('julio')

Y que la respuesta de dadoJulio() sea:

dadoJulio() -> "Julio tiró un dado y salió 6"
dadoJulio() -> "Julio tiró un dado y salió 3"
dadoJulio() -> "Julio tiró un dado y salió 5"

Por lo tanto, la respuesta del closure debe ser aleatoria y el dado debe ser de 6 caras (osea del 1 al 6).
*/

 function nuevoDado(nombre){
    return function(){
        const a=1;
        const b =6;
        return nombre+" tiró un dado y salió "+Math.round(Math.random()*(b-a)+parseInt(a));
    }
       
    }