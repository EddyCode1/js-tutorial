/*
        Se solicite un numero a usuario para adivinar un numero secreto 
        que sera generado aleatoriamente entre el rango 1 a 10
 */

const numeroSecreto = Math.floor(Math.random()*11 - 1)
const numeroJugador = parseInt(prompt("Adivina el numero entre el 1 y 10"))

console.log(`El numero que ingresaste es fue: ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("!Felicidades ganaste, adivinaste el numero secreto")
} else if (numeroJugador < numeroSecreto){
    console.log("El numero secreto es mayor")
} else {
    console.log("El numero secreto es menor al ingresado")
}

console.log(`El numero secreto era: ${numeroSecreto}`)