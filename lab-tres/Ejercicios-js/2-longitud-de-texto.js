/**
 * 
 *      Eddy Tucubal - 2024505 - IN5CV
 *      
 *      |Longitud mayor a 5 de una cadena de texto|
 */

const texto = prompt("Ingrese un texto")

function verificacion(texto){
    if (texto.length > 5) {
        console.log(`El texto: ${texto}. Posee mas de 5 caracteres`)
    } else if (texto.length < 5 ){
        console.log(`El texto: ${texto}. Posee menos de 5 caracteres`)
    } else{
        console.log(`El texto: ${texto}. Posee 5 caracteres`)
    }
}

verificacion(texto)