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
  const contenedorSeries = document.getElementById("contenedorSeries");

if (contenedorSeries) {
  fetch("datosSeries.json")
    .then((response) => response.json())
    .then((data) => {
      contenedorSeries.innerHTML = "";
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
        const url = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent( busqueda )}&include_adult=false&language=es-ES&page=1`;

        fetch(url, options)
          .then((response) => response.json())
          .then((response) => {
            const results = response.results;
            const serieResultado = results[0];
            const idSerie = serieResultado ? serieResultado.id : null;

            // Crea una nueva etiqueta de tarjeta (card)
            const serie = document.createElement("div");
            serie.classList.add("card");

            // Crea el contenido interno de la tarjeta
            const enlace = document.createElement("a");
            enlace.classList.add("tarjeta");
            const titulo = document.createElement("h3");
            const id_coleccion = "clave=" + encodeURIComponent(elemento.clave);
            const id_serieApi = "id=" + encodeURIComponent(idSerie);
            enlace.href =
              elemento.enlace + "?" + id_coleccion + "&" + id_serieApi;
            titulo.textContent = elemento.titulo;

            const imagen = document.createElement("img");
            imagen.src = elemento.imagen;
            imagen.alt = "Imagen de la tarjeta";

            // Agrega el contenido interno a la tarjeta
            enlace.appendChild(serie);
            serie.appendChild(imagen);
            serie.appendChild(titulo);

            // Agrega la tarjeta al contenedor principal
            contenedorSeries.appendChild(enlace);
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
  console.error("El elemento contenedorSeries no fue encontrado en el DOM.");
}
}
