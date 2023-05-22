
fetch('datos.json')
  .then(response => response.json())
  .then(json => {
    // Obtener el ID del parámetro de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const clave = urlParams.get('clave');

    // Crear la tarjeta usando el JSON y el ID
    crearTarjetaDesdeJSON(json, clave);
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

  function crearTarjetaDesdeJSON(json, clave) {
    // Buscar el objeto correspondiente al ID en el JSON
    const objeto = json.find(item => item.clave === clave);
  
    // Verificar si se encontró el objeto
    if (!objeto) {
      console.error('No se encontró el objeto con el ID especificado');
      return;
    }
  
    // Crear los elementos de la tarjeta
    const pelicula = document.createElement('div');
    pelicula.classList.add('pelicula');
    
    const infoPelicula = document.createElement('div');
    infoPelicula.classList.add('infoPelicula');

    const datosPelicula = document.createElement('div');
    datosPelicula.classList.add('datosPelicula');

    const titulo = document.createElement('h2');
    titulo.classList.add('tituloPelicula');
    titulo.textContent = objeto.titulo;
    
    const imagen = document.createElement('img');
    imagen.src = objeto.imagen;
    
    // const contenido = document.createElement('p');
    // contenido.textContent = objeto.contenido;
  
    const opinion = document.createElement('p');
    opinion.textContent = objeto.opinion

    const iframe = document.createElement('iframe');
    iframe.classList.add('video')
    iframe.src = objeto.link;
  
    // Agregar los elementos a la tarjeta
    pelicula.appendChild(titulo);
    pelicula.appendChild(infoPelicula);
    infoPelicula.appendChild(imagen);
    infoPelicula.appendChild(datosPelicula);
    
    // tarjeta.appendChild(contenido);
    datosPelicula.appendChild(opinion);
    datosPelicula.appendChild(iframe)
  
    // Agregar la tarjeta al documento HTML
    const contenedor = document.getElementById('contenedorMedia');
    contenedor.appendChild(pelicula);
  }
  
