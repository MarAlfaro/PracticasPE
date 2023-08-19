//crear un arreglo o array
let paises = ["Panama", "Peru", "Japón", "El Salvador", "Suecia"]

//mostrar datos
console.log(paises)

//Mostrar Japón
console.log(paises[2])

//Mostrar Suecia
//alert(paises[4])

//Crear nuevo arreglo
let numeros = [1, 2, 6, 7]

console.log(numeros)

console.log(numeros[3])

let longitudArreglo = numeros.length;
console.log("El tamaño del arreglo " + numeros + " es: "+ longitudArreglo)

console.log(`El arreglo contiene ${paises.length} paises`)

let nElementos = prompt("Ingrese cuantos elementos desea agregar al arreglo")
let elementos = []

for (let i = 0; i < nElementos; i++){
    let elemento = prompt(`Ingrese el elemento ${i + 1}`)
    elementos.push(elemento);
}

console.log(elementos)