/*let frutas = ["manzana", "platano", "pera"]
//console.log(frutas)

//lenght longitud del arreglo
alert(frutas.length)

prompt(frutas[0])
prompt(frutas[1])
prompt(frutas[2])


for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
alert("Mensaje personalizado", "Título personalizado");
*/
/*const numero = parseInt(prompt("Ingresa un número:"));

if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}*/

/* Progama para ver peliculas mayores de 12 años
const edad = parseInt(prompt("Ingresa tu edad:"));

if (edad > 18) {
    console.log("El usuario es mayor de edad");
} else if (edad === 18) {
    console.log("El usuario tiene 18 años");
} else if (edad > 18) {
    console.log("El usuario es menor de edad");
} else {
    console.log("La edad debe ser un valor válido.");
}

*/
/*
const numero = parseInt(prompt("Ingresa un número para generar su tabla de multiplicar:"));

console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

const numero = parseInt(prompt("Ingresa un número para generar su tabla de multiplicar:"));

console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
*/


//ejemplos de var, let y const

// var
/*var x = 10;
console.log(x)
x = 20; // Reasignación válida
console.log(x)
var x = 30; // Re-declaración válida
console.log(x)*/
 
/*let y = 5;
y = 15; // Reasignación válida
let y = 25; // Error: ya se declaró 'y'

//const
const pi = 3.14159;
console.log(pi); // Imprime: 3.14159

// Intentar reasignar una constante generará un error
pi = 3.14; // Error: no se puede reasignar una constante

*/


/*
const numero = parseInt(prompt("Ingresa un número para generar su tabla de multiplicar:"));

console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}*/
const numero = parseInt(prompt("Ingresa un número:"));

if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}