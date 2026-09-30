const botonTema = document.querySelector ("#boton-tema");
const botonCargar = document.querySelector ("#boton-cargar");
const seccionJuegos = document.querySelector ("#juegos");

function cargarJuegos () {
    fetch ("datos.json")
    .then(res => res.json ())
    .then(juegos => {
         for(juego of juegos) {

            document.querySelector("#juegos").innerHTML +=
            `
            <div>
                <h3>${juego.titulo}</h3>
                <p>${juego.genero}</p>
                <p>${juego.descripcion}</p>
            </div>
            `

        }

    })

}

function cambiarTema () {
    document.body.classList.toggle("modo-oscuro");
}

botonCargar.addEventListener("click", cargarJuegos);
botonTema.addEventListener("click", cambiarTema);