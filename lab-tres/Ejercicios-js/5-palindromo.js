/**
 * 
 *      Eddy Tucubal - 2024505 - IN5CV
 *      
 *      |Verificacion de textos palindromos|
 */

const texto = prompt("Ingrese un texto, para verificar si es palindromo")

function verificacion(texto){
    const textoLimpio = texto.toLowerCase().replace(/\s+/g, '');
    let esPalindromo = true;

    for (let i = 0; i < textoLimpio.length / 2; i++) {
        if (textoLimpio[i] !== textoLimpio[textoLimpio.length - 1 - i]) {
            esPalindromo = false;
            break;
        }
    }

    if (esPalindromo) {
        console.log(`El texto: "${texto}" es un palíndromo`);
    } else {
        console.log(`El texto: "${texto}" NO es un palíndromo`);
    }
}

verificacion(texto);