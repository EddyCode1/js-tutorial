/**
 * 
 *      Eddy Tucubal - 2024505 - IN5CV
 *      
 *      |Factorial de un numero|
 */

const numero = parseInt(prompt("Ingrese un numero entero, del cual decea saber su factorial"))

    function factorialNumerico(numero){
        if (numero < 0) {
            console.log("No se puede calcular el factorial de un numero negativo")
        } else {
            let factorial = 1;
            for (let i = 1; i <= numero; i++){
                    factorial *=i; 
            }
            console.log(`El factorial de: ${numero} es: ${factorial}` )
        }
    }

    factorialNumerico(numero)