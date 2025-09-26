/**
 * 
 *      Eddy Tucubal - 2024505 - IN5CV
 *      
 *      |Retorno de la cadena de texto mas larga|
 */

const texto1 = prompt("Ingrese el primer texto");
const texto2 = prompt("Ingrese el segundo texto");
const texto3 = prompt("Ingrese el tercer texto");
const texto4 = prompt("Ingrese el cuarto texto");
function verificacion(texto1, texto2, texto3, texto4) {
    if (texto1.length > texto2.length && texto1.length > texto3.length && texto1.length > texto4.length) {
        console.log(`El texto más largo es: "${texto1}"`);
    } else if (texto2.length > texto1.length && texto2.length > texto3.length && texto2.length > texto4.length) {
        console.log(`El texto más largo es: "${texto2}"`);
    } else if (texto3.length > texto1.length && texto3.length > texto2.length && texto3.length > texto4.length) {
        console.log(`El texto más largo es: "${texto3}"`);
    } else if (texto4.length > texto1.length && texto4.length > texto2.length && texto4.length > texto3.length) {
        console.log(`El texto más largo es: "${texto4}"`);
    } else {
        console.log("Hay más de un texto con la misma longitud");
    }
}

verificacion(texto1, texto2, texto3, texto4);