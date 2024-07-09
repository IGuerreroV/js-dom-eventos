// querySelector
const heading = document.querySelector('.header__texto h2') // 0 o 1 Elementos
heading.textContent = 'Nuevo Heading'
console.log(heading);

// querySelectroAll
const enlaces = document.querySelectorAll('.navegacion a')
enlaces[0].textContent = 'Nuevo texto para enlace'
enlaces[0].classList.add('nueva-clase')
// enlaces[0].classList.remove('navegacion__enlace')


// getElementById
const heading2 = document.getElementById('heading')
console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// Agreagr el href
nuevoEnlace.href = 'nuevo-enlace.html'

// Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo enlace'

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')

// Agregar al documento
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace);


// Eventos

// console.log(1);
// // CallBack
// window.addEventListener('load', function() { // load espera a que JS y los archivos que dependen del HTML esten listos
//     console.log(2);
// })

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera por el css o imagenes
//     console.log(4);
// })


// console.log(5);


// window.onscroll = function() {
//     console.log('scrolling...');
// }


// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario')
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault()

//     // Validar un formulario
//     console.log('enviando formulario');
// })


// Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)

// El evento de submit
formulario.addEventListener('submit', function(event) {
    event.preventDefault()

    // Validar el formulario

    const { nombre, email, mensaje } = datos

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true)
        return // corta la ejecuccion del codigo
    }



    // Crear la alerta de Enviar correctamente

    mostrarAlerta('Mensaje enviado correctamente')
})

function leerTexto(event) {
    // console.log(event.target.value);

    datos[event.target.id] = event.target.value

    // console.log(event.target);

    console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje

    if(error){
        alerta.classList.add('error')
    } else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta)

    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove()
    }, 5000)
}