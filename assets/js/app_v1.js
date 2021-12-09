window.onload = inicio;
let a, b, sumaCorrecta;

function inicio() {
  preguntar();
  document.querySelector(".boton").onclick = comprobar;
  document.querySelector(".tres").onkeydown = teclado;
}

function preguntar() {
  // Se escogen dos números aleatorios, entre 0 y 9, y se le eliminan los decimales y su valor se almacena en dos variables de ambito global
  a = Math.floor(Math.random() * 10);
  b = Math.floor(Math.random() * 10);

  // Se suman los números aleatorios para después validar con el resultado ingresado en el input3
  sumaCorrecta = a + b;

  // Se almacenan los números aleatorios en los input1 e input2 respectivamente, para mostrarlos por pantalla
  document.querySelector(".uno").value = a;
  document.querySelector(".dos").value = b;

  // Se limpia el área del input3 y se coloca el cursor dentro para facilitar la escritura
  document.querySelector(".tres").value = "";
  document.querySelector(".tres").focus();
}

function teclado(e) {
  let tecla = e.key;
  if (tecla == "enter") {
    comprobar();
  }
}

function comprobar() {
  let c = Number(document.querySelector(".tres").value);
  if (c == sumaCorrecta) {
    document.querySelector(".resultados").innerHTML = "¡Es correcto!";
  } else {
    document.querySelector(
      ".resultados"
    ).innerHTML = `¡Es incorrecto! El resultado de sumar ${a} + ${b} = ${sumaCorrecta}`;
  }
  preguntar();
}
