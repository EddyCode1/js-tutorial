/**
 * 
 *          CONVERSIONES -> EXPLICITAS e IMPLICITAS
 */

//Conversion Explicit Type Casting
const string = '54'
const integer = parseInt(string)

//console.log(typeof string)
//console.log(typeof integer)

const float = parseFloat("3.14")
//console.log(typeof float) //number
                //8020
const binario = '1010' //10
const decimal = parseInt(binario, 2)
//console.log(decimal)

const hexa = 'CAFE' //51966
const decimalhex = parseInt(hexa, 16)
//console.log(decimalhex)

//Conversion Implicit Type Casting
const resultado = '5' +3 //8
//console.log(resultado)

const sumaConBoolean = '3'+true
//console.log(sumaConBoolean)

const sunmaConNumero = 2+ true
//console.log(sunmaConNumero) //3

const valorString = '20'
const valorNumber = 10
const varlorBoolean = true

console.log("------------------------------------------------")
console.log(valorString+valorString)
console.log(valorString+valorNumber)
console.log(valorString+varlorBoolean)

console.log("------------------------------------------------")
console.log(valorNumber+valorNumber)
console.log(valorNumber+valorString)
console.log(valorNumber+varlorBoolean)

console.log("------------------------------------------------")
console.log(varlorBoolean+varlorBoolean)
console.log(varlorBoolean+valorString)
console.log(varlorBoolean+valorNumber)
console.log("------------------------------------------------")