// notas.js

function calculaSigno() {
    const signos = ["Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra"];
    
    let anioInput = prompt("Ingresa tu año de nacimiento:");
    
    if (anioInput === null) {
        return;
    }
    
    let anio = parseInt(anioInput, 10);
    
    if (isNaN(anio)) {
        alert("Debes ingresar un año válido.");
        return;
    }
    
    let indice = anio % 12;
    indice = (indice + 12) % 12;
    
    const signo = signos[indice];
    
    alert(`Tu signo del horóscopo chino es: ${signo}`);
    console.log(`Tu signo del horóscopo chino es: ${signo}`);
} 
