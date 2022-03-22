function dibujarMuneco(counter) {    
    // vertical
    if (counter == 0) {
        pincel.moveTo(200, 285);
        pincel.lineTo(200, 50);
        pincel.stroke();
        counter++;
        return counter;
    // Horizontal
    } else if(counter == 1) {
        pincel.moveTo(200, 50);
        pincel.lineTo(300, 50);
        pincel.stroke();
        counter++;
        return counter;
    // Cuerda
    } else if(counter == 2) {
        pincel.moveTo(300, 50);
        pincel.lineTo(300, 70);
        pincel.stroke();
        counter++;
        return counter;
    // Cabeza
    } else if(counter == 3) {
        pincel.beginPath();
        pincel.fillStyle = "red";
        pincel.arc(300, 90, 20, 0, 2*Math.PI);
        pincel.stroke();
        counter++;
        return counter;
    // Tronco
    } else if(counter == 4) {
        pincel.beginPath();
        pincel.moveTo(300, 110); 
        pincel.lineTo(300, 190); 
        pincel.stroke();
        counter++;
        return counter;
    // Pie Izdo
    } else if(counter == 5) {
        pincel.moveTo(300, 190);
        pincel.lineTo(270, 220); 
        pincel.stroke();
        counter++;
        return counter;
    // Pie Dcho
    } else if(counter == 6) {
        pincel.moveTo(300, 190); 
        pincel.lineTo(330, 220); 
        pincel.stroke();
        counter++;
        return counter;
    // mano Izda
    } else if(counter == 7) {
        pincel.beginPath();
        pincel.moveTo(300, 140); 
        pincel.lineTo(270, 140); 
        pincel.moveTo(271, 140); 
        pincel.lineTo(271, 120); 
        pincel.stroke();
        pincel.beginPath();
        pincel.arc(285, 135, 5, 0, Math.PI*2);
        pincel.stroke();
        counter++;
        return counter;
    // mano dcha
    } else if(counter == 8) {
        pincel.beginPath();
        pincel.moveTo(300, 140);
        pincel.lineTo(330, 140);
        pincel.moveTo(329, 140);
        pincel.lineTo(329, 120);
        pincel.stroke();
        pincel.beginPath();
        pincel.arc(315, 135, 5, 0, Math.PI*2);
        pincel.stroke();
        counter++;
        dibujoPierde();        
        return counter;
    } else {
        return;
    }
}

function iniciarJuego() {
    // Dibujar triangulo de entrada
    pincel.clearRect(0, 0, tablero.width, tablero.height);
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.beginPath();
    pincel.moveTo(150, 300);
    pincel.lineTo(250, 300);
    pincel.lineTo(200, 285);
    pincel.lineTo(150, 300);
    pincel.stroke(); 
    // Iniciar vbles
    contador = 0;
    contadorLetraError = 0;
    listadoLetras = [];
    esGanador = false;
    palabraEnJuego = [];
    let numero = Math.floor(Math.random()*listaDePalabras.length);
    palabraJuego = listaDePalabras[numero].toUpperCase().split("");
    // dibujar las lineas base
    for(let i=0; i < palabraJuego.length; i++) {
        pincel.moveTo((300 + (60 * i)), 300);
        pincel.lineTo((350 + (60 * i)), 300);
        pincel.stroke();
    }
}

function dibujarGanador() {
    pincel.beginPath();
    pincel.fillStyle = "greenblue";
    pincel.font = "bold 40px 'Inter'";
    pincel.fillText("Felicitaciones", 405, 100);
    pincel.fillText("Has ganado", 405, 150);
}

function dibujoPierde() {
    pincel.beginPath();
    pincel.fillStyle = "blue";
    pincel.font = "bold 40px 'Inter'";
    pincel.fillText("Fin del juego.", 405, 100);
    pincel.fillText("Has perdido.", 405, 150);
}
