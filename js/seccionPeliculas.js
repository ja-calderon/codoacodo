cargarTodasLasTarjetas();
const inputText = document.getElementById("inputText");

if (inputText) {
    
    inputText.addEventListener("input", function (event) {
        const valor = event.target.value;
        filtrarTarjetas(valor);

        if (valor === "") {
        cargarTodasLasTarjetas();
        }
    });
} else {
  console.error("El elemento inputText no fue encontrado en el DOM.");
}

function filtrarTarjetas(valor) {
  const tarjetas = document.getElementsByClassName("tarjeta");
  Array.from(tarjetas).forEach((tarjeta) => {
    const titulo = tarjeta.getElementsByTagName("h3")[0].textContent;
    if (!titulo.toLowerCase().includes(valor.toLowerCase())) {
      tarjeta.style.display = "none";
    } else {
      tarjeta.style.removeProperty("display")
    }
  });
}

function cargarTodasLasTarjetas() {
  const contenedorPeliculas = document.getElementById("contenedorPeliculas");

  if (contenedorPeliculas) {
    fetch("datosPelicula.json")
      .then((response) => response.json())
      .then((data) => {
        contenedorPeliculas.innerHTML = "";
        data.forEach((elemento) => {
          const busqueda = elemento.busqueda;
          const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTUxYzUwOWRlZTBmMjhiYmNkZWI2NjU0NWQ3YWNlMCIsInN1YiI6IjY0Njk3MDhhMzNhMzc2MDE3NWQyZmFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5KqAXH6kuCBfmbL9AxEpALqvp3GdQgILF0JBXtM5evk",
            },
          };
          const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            busqueda
          )}&include_adult=false&language=es-ES&page=1`;
          fetch(url, options)
            .then((response) => response.json())
            .then((response) => {
              const results = response.results;
              const movie = results[0];
              const idPeli = movie ? movie.id : null;

              // Crea una nueva etiqueta de tarjeta (card)
              const pelicula = document.createElement("div");
              pelicula.classList.add("card");

              // Crea el contenido interno de la tarjeta
              const enlace = document.createElement("a");
              enlace.classList.add("tarjeta");
              const titulo = document.createElement("h3");
              const id_coleccion =
                "clave=" + encodeURIComponent(elemento.clave);
              const id_peliculaApi = "id=" + encodeURIComponent(idPeli);
              enlace.href =
                elemento.enlace + "?" + id_coleccion + "&" + id_peliculaApi;
              titulo.textContent = elemento.titulo;

              const imagen = document.createElement("img");
              imagen.src = elemento.imagen;
              imagen.alt = "Imagen de la tarjeta";

              // Agrega el contenido interno a la tarjeta
              enlace.appendChild(pelicula);
              pelicula.appendChild(imagen);
              pelicula.appendChild(titulo);

              // Agrega la tarjeta al contenedor principal
              contenedorPeliculas.appendChild(enlace);
            })
            .catch((error) => {
              console.error("Error al procesar la respuesta de la API:", error);
            });
        });
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  } else {
    console.error(
      "El elemento contenedorPeliculas no fue encontrado en el DOM."
    );
  }
}
