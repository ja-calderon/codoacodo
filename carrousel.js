const carouselElement = document.getElementById('carrouselImagenes');

// Recorrer el array de actores en el JSON
json.cast.forEach(actor => {
  // Crear un elemento de imagen para cada actor
  const imageElement = document.createElement('img');
  imageElement.src = `https://image.tmdb.org/t/p/w200${actor.profile_path}`;
  imageElement.alt = actor.name;

  // Agregar la imagen al carrusel
  carouselElement.appendChild(imageElement);
});