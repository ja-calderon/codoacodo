const data = {
    "busqueda": "NuevaPelicula"
  };
  
  // Obtén el valor de búsqueda del archivo JSON
  const busqueda = data.busqueda;
  
  // Crea la URL con la palabra clave reemplazada
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(busqueda)}&include_adult=false&language=es-ES&page=1`;
  
  // Define las opciones de la solicitud
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTUxYzUwOWRlZTBmMjhiYmNkZWI2NjU0NWQ3YWNlMCIsInN1YiI6IjY0Njk3MDhhMzNhMzc2MDE3NWQyZmFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5KqAXH6kuCBfmbL9AxEpALqvp3GdQgILF0JBXtM5evk'
    }
  };
  
  // Realiza la solicitud a la API con la URL y opciones definidas
  fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));