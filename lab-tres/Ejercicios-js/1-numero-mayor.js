/**
 * 
 *      Eddy Tucubal - 2024505 - IN5CV
 *      
 *      |Comprvacion de numero Mayor|
 */

const numero1 = parseInt(prompt("Ingresa un numero entero"))
const numero2 = parseInt(prompt("Ingresa un numero entero"))

function verificacion(numero1, numero2){
   if (numero1  >  numero2) {
    console.log(`Es mayor el numero: ${numero1}`)
   }else if (numero1 < numero2){
    console.log(`Es mayor el numeor: ${numero2}`)
   } else {
    console.log("Son iguales")
   }
    
}
verificacion(numero1, numero2)

