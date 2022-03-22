// Los botones
let botonIniciar = document.querySelector("#button-iniciar");
let agregarPalabra = document.querySelector("#agregar-palabra");
let guardar = document.querySelector("#guardar");
let cancelar = document.querySelector("#cancelar");
let nuevoJuego = document.querySelector("#nuevo-juego");
let desistir = document.querySelector("#desistir");

// Las vbles
let inicio = document.querySelector("#inicio");
let aPalabra = document.querySelector("#a-palabra");
let juego = document.querySelector("#juego");
let footer = document.querySelector("footer");
// Listado nombres de la familia
let listaDePalabras = [
  "CAMILA",
  "LINA",
  "TINA",
  "SANDRA",
  "OLGA",
  "MONICA",
  "MAURICIO",
  "OMAR",
  "ARTURO",
  "RAUL",
];
let palabra = document.querySelector("#palabra");
let tablero = document.querySelector("canvas");
let pincel = ahorcado.getContext("2d");
let contador = 0;
let flag = false;
let palabraJuego;
let contadorLetraError = 0;
let listadoLetras = [];
let palabraEnJuego = [];
let esGanador = false;

botonIniciar.addEventListener("click", () => {
  inicio.classList.add("invisible");
  juego.classList.remove("invisible");
  footer.classList.add("footer");
  iniciarJuego();
  flag = true;
});

agregarPalabra.addEventListener("click", () => {
  inicio.classList.add("invisible");
  aPalabra.classList.remove("invisible");
  flag = false;
});

guardar.addEventListener("click", () => {
  
  if(!(palabra.value.length > 10)) {
    if(PalabraEntrada(palabra.value.toUpperCase())) {
      listaDePalabras.push(palabra.value.toUpperCase());
      aPalabra.classList.add("invisible");
      juego.classList.remove("invisible");
      footer.classList.add("footer");
      iniciarJuego();
      flag = true;
    }
  } else {
    swal("¡Palabra extensa!", `La palabra debe tener maximo 10 letras y tiene ${palabra.value.length} letras.`, "warning");
  }
});

cancelar.addEventListener("click", () => {
  aPalabra.classList.add("invisible");
  inicio.classList.remove("invisible");
  footer.classList.remove("footer");
  flag = false;
});

desistir.addEventListener("click", () => {
  juego.classList.add("invisible");
  inicio.classList.remove("invisible");
  footer.classList.remove("footer");
  esGanador = false;
  flag = false;
});

nuevoJuego.addEventListener("click", () => {
  iniciarJuego();
  flag = true;
});

window.addEventListener("keydown", (element) => {
  if (flag && letraEntrada(element.key) && contador < 9) {
    if (!listadoLetras.includes(element.key.toUpperCase())) {
      listadoLetras.push(element.key.toUpperCase());
      if(!dibujoLetra(element.key.toUpperCase())){
          dibujarMuneco(contador);
          contador++;
      }
    } 
  } else if (contador >= 9) {
    dibujoPierde();    
  } else if (esGanador) {
  }
});
