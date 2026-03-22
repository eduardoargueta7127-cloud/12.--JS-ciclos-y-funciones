// funciones.js

function adivinaNum() {
    const secreto = Math.floor(Math.random() * 100) + 1;
    const maxIntentos = 10;
    let acertado = false;
    
    for (let intento = 1; intento <= maxIntentos; intento++) {
        let intentosRestantes = maxIntentos - intento;
        
        let entrada = prompt(`Intento ${intento} de ${maxIntentos}. Te quedan ${intentosRestantes} intentos. Adivina el número (1-100):`);
        
        if (entrada === null) {
            return;
        }
        
        let numero = parseInt(entrada, 10);
        
        if (isNaN(numero)) {
            alert("Por favor ingresa un número válido.");
            intento--;
            continue;
        }
        
        if (numero === secreto) {
            acertado = true;
            alert(`¡Felicidades! Adivinaste el número ${secreto} en ${intento} intentos.`);
            break;
        } else if (numero < secreto) {
            alert(`El número a adivinar es mayor. Te quedan ${intentosRestantes} intentos.`);
        } else {
            alert(`El número a adivinar es menor. Te quedan ${intentosRestantes} intentos.`);
        }
    }
    
    if (!acertado) {
        alert(`Se acabaron los intentos. El número era ${secreto}.`);
    }
}