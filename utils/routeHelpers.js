const { Movie } = require('../models');
const axios = require('axios');

const getAndCreateMovieData = async (url) => {
  const newMovieData = await axios.get(url);
  const data = await newMovieData.data;

  // put it into our own database
  const { Title, Released, Director, Actors, imdbID, Plot, Poster, Genre, Writer } = await data;
  const newMovie = await Movie.create({
    id: imdbID,
    movie_title: Title,
    release_date: Released,
    director: Director,
    actors: Actors,
    movie_plot: Plot,
    movie_poster: Poster,
    genre: Genre,
    writers: Writer
  });
  return newMovie;
};

module.exports = { getAndCreateMovieData };
