/**
 * 
 *          Tipos de dato Numer 'number'
 */
// 1. entero y decimal
const enter = 33
const decimal = 3.34
// 2. Notacion cientifica
const cientifica = 5e4
// 3. Infinito y Nan(no es un numero)
const infinito = Infinity
const noEsNumero = NaN

//OPERACIONES ARITMETICAS
// 1. suma, resta, ,ultiplicacion y divicion
const suma = 5+6
const resta = 10-10
const multiplicacion = 3*4
const divicion = 16/4

// 2. modulo y exponenciacion
const modulo = 16 % 8 //0
const exponenciacion = 2**4 //^(talvez)

// LA PRECICIN EN JAVASCRIPT
const resultado = 0.1 + 0.2 //0.3
//console.log(resultado)
//console.log(resultado.toFixed(1))
// console.log(resultado.toFixed(1) == 0.3) //true

//OPERACIONES AVANZADAS
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
// floor para aproximar los decimales, truncate para cortar
const aleatorio = Math.trunc(Math.random() *20 +10)
//console.log(raizCuadrada)
//console.log(valorAbsoluto)
console.log(aleatorio) 

//Lenguajes de programacion
                                    // Rutine Excepcion
//COMPILADOS: java (JM -> java _-_> .class! --> .jar). C, 
//INTERPRETADOS: javascript --> lee>ejecuta

const numero = 2
const boolean = true
//conversion implicita
console.log(numero+boolean)