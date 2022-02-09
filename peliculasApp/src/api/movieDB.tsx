import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e40943a16f8160085900b5a956e091a3',
    language: 'es-ES',
  },
});

export default movieDB;
