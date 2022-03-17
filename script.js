/* const SALUDO = "Hola Navegadores!"
alert(SALUDO)
let nombreNavegador = prompt("¿Cuál es tu nombre?")
alert("Bienvenido/a" + nombreNavegador)
let cantidadCompras = Number(prompt("Cuantas compras online haces por año?"))
let cantidadCompras2032 = cantidadCompras * 10
alert("En 2032 vas a haber hecho aproximadamente" + cantidadCompras2032 + "compras")
 */
//en lugar de alert se puede usar Console.log
//parseInt usa el numero entero ParseFloat usa el numero en su totalidad


/* for (let i = 0; i < 6; i++) {
    console.log(i)
}

let acumulador = 0;
for (let i = 0; i < 10; i++) { // 0 1 2 3 4 5 6 7 8 9
    let nota = parseInt(prompt("Ingrese una nota"))
    acumulador += nota // acumulador = acumulador + nota

}

console.log(`El promedio de las notas es ${acumulador / 10}`)
 */
/* let cantidadVelas =parseInt (prompt("Cuantas velas desea comprar?"))
console.log (cantidadVelas)

let precioVela = 50 
console.log (cantidadVelas * precioVela) */

/* let cantidadVelas
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
 */
/* const persona1 = {
    dni: "11.111.111",
    nombre: "Julian",
    apellido: "Graells",
    edad: 23,
    esEstudiante: true,
} */

/* console.log(persona1)
console.log(persona1.nombre)

persona1.nombre = "Pepe" /*cambia el nombre*/

/* const persona2 = {
    dni: "10.000.000",
    nombre: "Teo",
    apellido: "Canna",
    edad: 17,
    esEstudiante: true,
    domicilio: "calle falsa 123"
} */

/* function Persona(dni, nombre, apellido, edad, esEstudiante) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.esEstudiante = esEstudiante;
}

const persona1 = new Persona(12345678, "Juanfer", "Quintero", 27, false)
const persona2 = new Persona(32165498, "Fulano", "Detal", 27, false)


persona1 = persona2
 */
/*esto lo permite porque es let o var (si son const no)*/
/* console.log(persona1)
 */


// ESTA CLASE ES DE ARRAYS


// EL PRIMER ELEMENTO SUELE SER EL INDICE 0
// un array suele ser un elemento no fijo
/* let array = [] */
//0       1   2      3   
/* let array2 = ["Hola", 5, true, "Chau", false]
console.log(array2)
console.log(array2[2])

for(let i = 0; i < array2.length; i++){
    console.log(array2[i]) //array[0] toma tambien hasta el 3
}

array2.push({nombre: "Leonel", apellido: "Messi"})
array2.unshift({nombre: "Leonel", apellido: "Messi"}) //el unshift agrega elementos al principio del array

console.log(array2)

/* array2.shift() */ //eliminta el primer elemento del array

/* console.log(array2) */

/* array2.pop() */ //elimina el utimo elemento del array
//lo recomendable es eliminar elementos mediante pop

/* array2.splice(2, 3) */ //se eliminan elementos mediante indices, elimina 1 o varios elementos. el primer numero es el indice del que parte y el otro es la cantidad de elementos

/* console.log(array2.join(",")) */ //te pasa los elementos a string y pide un separador

/* let array1 = ["Pez", "Perro"]
let array2 = ["Gato", "Conejo"]

let array3 = array1.concat(array2)

console.log(array3)

let array4 = array3.slice(1, 3) //MI INICIO SE INCLUYE, NO EL FIN, POR ESO NO INCLUYE CONEJO
console.log(array4) */

/* let array1 = ["Pedro", "Agustina", "Maria", "Walter", "Raul"]

let indice = array1.indexOf("Agustina")

let nombreABuscar = prompt("Ingrese un nombre")
console.log(indice)

if (indice !== -1) {
    array1.splice(indice, 1)
} else {
    alert("Usuario no encontrado")
}

console.log(array1)

console.log(array1.includes("Pedro")) //Includes me dice si un elemento esta o no en el array

console.log(array1.reverse()) */ //Reverse da vuelta un array

//Reverse es un metodo destructivo, modifica el array original

/* class Persona{
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona ("Francisco", "Pugh", 13)
const persona2 = new Persona ("Gonzalo", "Isa", 20)
const persona3 = new Persona ("Mario", "Massonant", 21)

let arrayPersonas = [persona1, persona2, persona3]

for(let i= 0; i < arrayPersonas.length; i++){
    
} */


/* let array1 = ["velas", "fragancias", "sahumerios", "recipientes"]
let nombreABuscar = prompt("Ingrese un producto")
let indice = array1.indexOf(nombreABuscar)
 */
/* console.log(indice) */

/* if (indice !== -1) {
    alert("Tenemos ese producto para ofrecerte")
} else {
    alert("No contamos con ese producto")
}
 */
/* do {
    nombreABuscar = prompt("Ingrese un producto")
} while (nombreABuscar == ""); */

/* console.log(array1)
 */
//FUNCIONES DE ORDEN SUPERIOR CLASE 7

/* const persona1 = {
    nombre: "Julian",
    apellido: "Graells",
    sueldo: 4000
}

const persona2 = {
    nombre: "German",
    apellido: "Garmendia",
    sueldo: 5000
}

const persona3 = {
    nombre: "Aylen",
    apellido: "Fernandez",
    sueldo: 6000
}

const array2 = [persona1, persona2, persona3] */

/* for(let persona of array2) {
    /* for(let propiedad in persona) {
    console.log(persona[propiedad])
    } */
//}

/* array2.forEach(persona => console.log(persona)) // RECORRER UN ARRAY

console.log(array2.find((persona) => persona.nombre == "German" && persona.sueldo >= 6000)) //find lo que hace es decirme si encuentra un objeto o no
console.log(array2.filter((persona) => persona.nombre == "Julian" && persona.sueldo >= 6000)) //filter me retorna todos los objetos que cumplen la condicion y si no existe me devuelve un array vacio

console.log(array2.map((persona) => persona.sueldo >= 6000)) 
 const array3 = array2
console.log(array3.sort((persona1, persona2) => {
    if (persona1.nombre < persona2.nombre) {
        return -1
    }
    if(nombre1 > nombre2) {
        return 1
    }

    return 0
})) //el metodo sort es una forma de ordenar un array segun un criterio

console.log(array3.sort((persona1,persona2) => persona1.sueldo - persona2.sueldo))

console.log(Math.cbrt(2)) */


const producto1 = {
    nombre: "velas",
    precio: 1500
}

const producto2 = {
    nombre: "fragancias",
    precio: 2000
}

const producto3 = {
    nombre: "sahumerios",
    precio: 500
}

const producto4 = {
    nombre: "recipientes",
    precio: 2500
}

const array2 = [producto1, producto2, producto3, producto4]

array2.forEach(producto => console.log(producto)) // RECORRER UN ARRAY

console.log(array2.find((producto) => producto.nombre == "fragancias" && producto.precio >= 2500)) //find lo que hace es decirme si encuentra un objeto o no
console.log(array2.filter((producto) => producto.nombre == "velas" && producto.precio >= 2500)) //filter me retorna todos los objetos que cumplen la condicion y si no existe me devuelve un array vacio

console.log(array2.map((producto) => producto.precio >= 2500))
const array3 = [...array2]
console.log(array2.sort(function (a, b) {
    return a.nombre.localeCompare(b.nombre);
})) //el metodo sort es una forma de ordenar un array segun un criterio

console.log(array3.sort(function (a, b) {
    return a.precio - b.precio;
}))

//CLASE 8 (DOM)

let div = document.getElementById("clientes");
console.log(div.innerHTML);

console.log(document.getElementsByClassName("about-services"));


let localizacion = document.getElementById("dondeEstamos")
console.log(localizacion.innerHTML)

localizacion.innerHTML = "Donde nos econtramos?"
console.log(localizacion.innerHTML)

let etiquetaH2 = document.getElementsByTagName("h2")

for (let h2 of etiquetaH2) {
    console.log(h2)
}




//CLASE 9 EVENTOS

/* let boton1 = document.getElementById("boton1")

boton1.addEventListener(`click`, () => {
    alert("Me diste click")
})

boton1.onclick = () => console.log("Me diste click por onclick")
 */

/* let boton1 = document.getElementById("boton1")
let inputColor = document.getElementById("inputColor")
let boxHeader = document.getElementById("boxHeader")
boton1.addEventListener(`click`, () => {
    let input1 = document.getElementById("input1")
    console.log(input1.value)
})

input1.addEventListener(`input`, () => {
    console.log("Hola desde input")
}) */

/* inputColor.addEventListener(`input`, (e) => {
    console.log(e.target.value)
}) */

boxHeader.addEventListener('mouseenter', () => {
    boxHeader.classList.add('celesteRosa')
})

boxHeader.addEventListener('mouseleave', () => {
    boxHeader.classList.remove('celesteRosa')
    boxHeader.classList.add('rosa')
})

/*  boxHeader.addEventListener('mouseleave', () => {
   boxHeader.classList.replace('celesteRosa', 'rosa')
 }) */


// Json localstorage

/* const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

load();

bdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
});

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode) {
        store('false');
    } else if (darkmode == 'true') {
        body.classList.add('darkmode');
    }
};

function store(value) {
    localStorage.setItem('darkmode', value)
};
 */

//WORKSHOP 1

//FORMULARIO
var inputs = document.getElementsByClassName('formulario_input');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

//


class User {
    constructor(user, email, mensaje) {
        this.user = user;
        this.email = email;
        this.mensaje = mensaje;
    }

    loguearse() {
        console.log('${this.user} esta logueado correctamente')
    }
}

let arrayUsuarios = []

if (localStorage.getItem('usuarios')) {
    arrayUsuarios = JSON.parse(localStorage.getItem('usuarios'))
} else {
    localStorage.setItem('usuarios', JSON.stringify(arrayUsuarios))
}

let formulario = document.getElementById('idForm')
let botonMostratUsuarios = document.getElementById('botonMostrarUsers')
let divUsers = document.getElementById('divUsuarios')

function funcion() {

}
formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    let user = document.getElementById('idUser').value
    let email = document.getElementById('idEmail').value
    let mensaje = document.getElementById('idMensaje').value

    console.log(user)
    console.log(email)
    console.log(mensaje)

    /* let datForm = new FormData(e.target)

    console.log(datForm.get('user'))
    console.log(datForm.get('email'))
    console.log(datForm.get('mensaje')) */
    if(!arrayUsuarios.some(usuarioEnArray => usuarioEnArray.email == email)) {
        const usuario = new User(user, email, mensaje)
        arrayUsuarios.push(usuario)
        localStorage.setItem('usuarios', JSON.stringify(arrayUsuarios))
        formulario.reset()
    }
    
})

/* botonMostratUsuarios.addEventListener('click', () => {
    arrayUsuarios.forEach(usuarioEnArray, indice) => {
        divUsers.innerHTML += '
        
        '
    }
}) */


//CLASE 12 OPERACIONES AVANZADAS

let edad = 18 

/* if(edad >= 18) {
    alert("Puede entrar")
} else {
    alert("No puede entrar")
}
 */

edad >= 18 ? alert("Puede entrar") : alert("No puede entrar")

if(null || undefined) {
    console.log("V")
} else {
    console.log("F")
} 

/* const persona1 = undefined

console.log(persona1?.name || "Propiedad no encontrada")*/

class Persona {
    constructor(nombre, apellido, edad, licencia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.licencia = licencia;
    }
}

const persona1 = new Persona ("Julian", "Graells", 23, {tipo: "B2", fechaVencimiento: 20/4/2025})

let { licencia : licenciaDeConducir} = persona1
console.log(licenciaDeConducir)

/* const persona = {nombre: "Julian", apellido: "Graells", edad: 23}
let {nombre, apellido, edad} = persona

console.log(nombre)
console.log(apellido)
console.log(edad)
 */


let divDolar = document.getElementById('divDolar')


fetch("https://criptoya.com/api/dolar")
.then(objPromesas => objPromesas.json ())
.then(data => {
    let {blue, oficial, ccl, mep, ccb, solidario} = data
    divDolar.innerHTML = `
    <p> Oficial: $${oficial} </p>
    <p> Solidario: $${solidario} </p>
    <p> MEP: $${mep} </p>
    <p> CCL: $${ccl} </p>
    <p> CCB: $${ccb} </p>
    <p> Blue: $${blue} </p>
    `
    console.log(data)
});








