/**
 * 
 * 
 *      Estructuras SWITCH 
 */

let comprar = "Uvas"; 

switch (comprar) {
    case "Naranja":
            console.log("las naranjas estan a Q10 la mano"); 
        break;

        case "Manzanas":
            console.log("las manzanas estan a Q15 la docena"); 
        break;

        case "Platanos":
            console.log("los platanos estan a Q15 la docena"); 
        break;
        case "Mangos": 
        case "Papayas": 
            console.log("los mangos y las papayas estan a Q15")

    default:
        console.log('lo sentimos, no contamos con ${comprar}')//El: Expreciones lenguaje
        break;
}