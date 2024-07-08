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