

// API URL y opciones de solicitud
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const apiUrl = `https://api.themoviedb.org/3/tv/${id}/credits?language=es-ES`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTUxYzUwOWRlZTBmMjhiYmNkZWI2NjU0NWQ3YWNlMCIsInN1YiI6IjY0Njk3MDhhMzNhMzc2MDE3NWQyZmFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5KqAXH6kuCBfmbL9AxEpALqvp3GdQgILF0JBXtM5evk'
  }
};

// Obtener el elemento del carrusel
const carouselElement = document.getElementById('carrouselImagenes');

// Hacer la solicitud a la API
fetch(apiUrl, options)
  .then(response => response.json())
  .then(data => {
    // Obtener los primeros 5 actores
    const actors = data.cast.slice(0, 5);

    // Recorrer los actores y crear las imágenes con las claves correspondientes
    actors.forEach(actor => {
      // Crear un elemento de contenedor para cada actor
      const contenedorActor = document.createElement('div');
      contenedorActor.classList.add('contenedorActor');

      // Crear un elemento de imagen para cada actor
      const imageElement = document.createElement('img');
      imageElement.src = `https://image.tmdb.org/t/p/w200${actor.profile_path}`;
      imageElement.alt = actor.name;
      contenedorActor.appendChild(imageElement);

      // Crear un elemento de nombre para cada actor
      const nameElement = document.createElement('p');
      nameElement.textContent = actor.name;
      contenedorActor.appendChild(nameElement);

      // Crear un elemento de personaje para cada actor
      const characterElement = document.createElement('p');
      characterElement.textContent = actor.character;
      contenedorActor.appendChild(characterElement);

      // Agregar el contenedor del actor al carrusel
      carouselElement.appendChild(contenedorActor);
    });
  })
  .catch(err => console.error(err));