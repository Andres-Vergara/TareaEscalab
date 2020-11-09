/*Según este string "abcdefghijklmnñopqrstuvwxyz", 
hacer una función que recibe un parámetro (un caracter), 
y la función me debe devolver en qué posición en la cadena 
del string se encuentra el caracter entregado como argumento:

Ejemplo:

posición('e') // -> 4*/
var string = "abcdefghijklmnñopqrstuvwxyz";
function recibirCaracter(caracter){
let posicionCaracter = string.indexOf(caracter);
return "La posición del carácter es: "+posicionCaracter;
};