


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

/* array2.forEach(producto => console.log(producto)) // RECORRER UN ARRAY

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
 */
//CLASE 8 (DOM)

boxHeader.addEventListener('mouseenter', () => {
    boxHeader.classList.add('celesteRosa')
})

boxHeader.addEventListener('mouseleave', () => {
    boxHeader.classList.remove('celesteRosa')
    boxHeader.classList.add('rosa')
})



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








