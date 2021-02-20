
// VARIABLES
const listaCursos = document.querySelector('.list-courses');
const elemento = document.createElement('div');
const carrito = document.getElementById('carrito');
// console.log(listaCursos);

// LISTENERS
listaCursos.addEventListener('click', obtenerCurso)
 
// FUNCIONES
function obtenerCurso(e){
    e.preventDefault();
    // console.log(e.target)
    if(e.target.classList.contains('agregarcarrito')){
        const curso = e.target.parentElement; 
        extraerDatos(curso);
    }
}
 
function extraerDatos(curso){
    // console.log(curso)
 
    const cursoElegido = {
        nombre : curso.querySelector('h3').textContent,
        precio : curso.querySelector('strong').textContent,
    }
 
    // console.log(cursoElegido)
    pintarCurso(cursoElegido);
}
 
function pintarCurso(curso) {
    let container = document.createElement('div');
    let nombre = document.createElement('p');
    let precio = document.createElement('p');
    
 
    nombre = curso.nombre;
    precio = curso.precio;
    
 
    container.innerHTML = `
        <div>
            Curso ${nombre}<br>  Cantidad: 1 <br>  Precio ${precio}
        </div>
    `
 
    carrito.appendChild(container)    
}