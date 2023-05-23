///api
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTUxYzUwOWRlZTBmMjhiYmNkZWI2NjU0NWQ3YWNlMCIsInN1YiI6IjY0Njk3MDhhMzNhMzc2MDE3NWQyZmFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5KqAXH6kuCBfmbL9AxEpALqvp3GdQgILF0JBXtM5evk'
  }
};

fetch('https://api.themoviedb.org/3/search/movie?query=MATRIX&include_adult=false&language=es-ES&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


