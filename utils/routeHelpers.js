const { Movie } = require('../models');
const axios = require('axios');

const getAndCreateMovieData = async (url) => {
  const newMovieData = await axios.get(url);
  const data = await newMovieData.data;

  // put it into our own database
  const { Title, Released, Director, Actors, imdbID/* , Ratings, Plot, Poster */ } = await data;
  const newMovie = await Movie.create({
    id: imdbID,
    movie_title: Title,
    release_date: Released,
    director: Director,
    actors: Actors,
    avg_rating: 5
  });
  return newMovie;
};

module.exports = { getAndCreateMovieData };
