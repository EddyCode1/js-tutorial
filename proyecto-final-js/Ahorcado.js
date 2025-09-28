/**
 * 
 * 
 *          Juego de Ahorcado
 * 
 */

const canvas = document.getElementById('ahorcadoCanvas');
const contexto = canvas.getContext('2d');
const palabraContainer = document.getElementById('palabra-container');
const tecladoContainer = document.getElementById('teclado-container');

const palabras = [
    "PERRO","COMPUTADORA", "JAVA","PROGRAMACION","AHORCADO","GATO","TECLADO",
    "MOUSE","PANTALLA","CALCULADORA","ALVARO","FUNCION","OBJETO","CLASE",
    "EJEMPLO","PROYECTO","JUEGO","TECNOLOGIA","ANIMAL","INTERNET"
];
let palabra = palabras[Math.floor(Math.random() * palabras.length)];
let errores = 0;
let aciertos = [];

const MAX_ERRORES = 6;

function dibujarPoste() {
    contexto.lineWidth = 4;
    contexto.strokeStyle = "#000";
    contexto.beginPath();
    contexto.moveTo(50, 350);
    contexto.lineTo(50, 50);
    contexto.lineTo(200, 50);
    contexto.lineTo(200, 80);
    contexto.stroke();
}

function dibujarAhorcado() {
    switch(errores) {
        case 1: 
            contexto.beginPath();
            contexto.arc(200, 110, 30, 0, Math.PI * 2);
            contexto.stroke();
            break;
        case 2: 
            contexto.beginPath();
            contexto.moveTo(200, 140);
            contexto.lineTo(200, 230);
            contexto.stroke();
            break;
        case 3: 
            contexto.beginPath();
            contexto.moveTo(200, 160);
            contexto.lineTo(160, 200);
            contexto.stroke();
            break;
        case 4: 
            contexto.beginPath();
            contexto.moveTo(200, 160);
            contexto.lineTo(240, 200);
            contexto.stroke();
            break;
        case 5: 
            contexto.beginPath();
            contexto.moveTo(200, 230);
            contexto.lineTo(170, 290);
            contexto.stroke();
            break;
        case 6:
            contexto.beginPath();
            contexto.moveTo(200, 230);
            contexto.lineTo(230, 290);
            contexto.stroke();
            break;
    }
}

function mostrarPalabra() {
    palabraContainer.innerHTML = palabra.split("").map(l => aciertos.includes(l) ? l : "_").join(" ");
}

function crearTeclado() {
    const filas = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
    filas.forEach(fila => {
        const div = document.createElement("div");
        for (let letra of fila) {
            const button = document.createElement("button");
            button.textContent = letra;
            button.classList.add("tecla");
            button.onclick = () => verificarLetra(letra);
            div.appendChild(button);
        }
        tecladoContainer.appendChild(div);
    });
}

function verificarLetra(letra) {
    const botones = document.querySelectorAll(".tecla");
    botones.forEach(b => {
        if (b.textContent === letra) b.disabled = true;
    });

    if (palabra.includes(letra)) {
        aciertos.push(letra);
        mostrarPalabra();
        if (!palabra.split("").some(l => !aciertos.includes(l))) {
            setTimeout(() => alert("¡Ganaste! 🎉"), 100);
        }
    } else {
        errores++;
        dibujarAhorcado();
        if (errores === MAX_ERRORES) {
            setTimeout(() => alert(`¡Perdiste! La palabra era: ${palabra}`), 100);
        }
    }
}

function reiniciarJuego() {
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    errores = 0;
    aciertos = [];

    contexto.clearRect(0, 0, canvas.width, canvas.height);
    dibujarPoste();
    mostrarPalabra();
    const botones = document.querySelectorAll(".tecla");
    botones.forEach(b => b.disabled = false);
}
document.getElementById("reiniciar").addEventListener("click", reiniciarJuego);
document.getElementById("regreso-menu").addEventListener("click", () => {
    window.location.href ="index.html"
});

dibujarPoste();
mostrarPalabra();
crearTeclado();