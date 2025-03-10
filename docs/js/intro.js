console.log("Hola Mundo");

let nombre = "Jon";
let edad = 40;
//Interpolación: Es inyectar el valor de variables a una cadena de texto
console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);

let cadena = "Hola, mundo";
let numero = 42.195;
let booleano = true;
let lista = [1, 2, 3, 4, "hola", "adios", ["Negro", "Blanco", "Azul"]];
let objeto = {
  nombre: "Ana",
  edad: 25,
  esEstudiante: true,
  esDocente: false,
};

console.log(cadena);
console.log(numero);
console.log(booleano);
console.log(lista);
console.log(lista.length);
console.log(lista[5]);
console.log(lista[6][2]);
console.log(objeto);
console.log(objeto.nombre);
console.log(objeto["edad"]);
