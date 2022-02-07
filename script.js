/* const SALUDO = "Hola Navegadores!"
alert (SALUDO)
let nombreNavegador = prompt ("¿Cuál es tu nombre?")
alert ("Bienvenido/a" + nombreNavegador)
let cantidadCompras = Number (prompt("Cuantas compras online haces por año?"))
let cantidadCompras2032 = cantidadCompras * 10
alert ("En 2032 vas a haber hecho aproximadamente" + cantidadCompras2032 + "compras")

//en lugar de alert se puede usar Console.log
//parseInt usa el numero entero ParseFloat usa el numero en su totalidad
*/

for (let i = 0; i < 6; i++) {
    console.log(i)
}

let acumulador = 0;
for (let i = 0; i < 10; i++) { // 0 1 2 3 4 5 6 7 8 9
    let nota = parseInt(prompt("Ingrese una nota"))
    acumulador += nota // acumulador = acumulador + nota

}

console.log(`El promedio de las notas es ${acumulador / 10}`)



/* let cantidadVelas =parseInt (prompt("Cuantas velas desea comprar?"))
console.log (cantidadVelas)

let precioVela = 50 
console.log (cantidadVelas * precioVela) */

let cantidadVelas
let valor = 300
do {
    cantidadVelas = prompt("Cuantas velas desea comprar?");
    console.log(cantidadVelas);
    if (cantidadVelas == "") {
        prompt("Ingrese un valor")
    }
    if (cantidadVelas < 0) {
        prompt("Ingrese un valor positivo")
    }
} while (cantidadVelas == "" || cantidadVelas < 0)

alert(`El valor total es  ${valor * cantidadVelas}`)

let num2
let num1
num1 = parseInt(prompt("Ingrese valor total"))
num2 = parseInt(prompt("En cuantas cuotas quiere abonar?"))
const division = (num1, num2) => num1 / num2
console.log(division(num1, num2))

alert(`El valor de cada cuota es de ${num1 / num2}`)