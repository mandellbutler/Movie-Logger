const { Movie } = require('../models');

const movieData = [
  {
    movie_title: 'Training Day',
    release_date: '2001',
    director: 'Antione Fuqua',
    actors: 'Denzel Washington',
    avg_rating: 5
  },
  {
    movie_title: 'Meet the Fockers',
    release_date: '2004',
    director: 'Ray Roach',
    actors: 'Robert DeNiro',
    avg_rating: 3.3
  },
  {
    movie_title: 'Savages',
    release_date: '2012',
    director: 'Oliver Stone',
    actors: 'Salma Hayek',
    avg_rating: 4
  }
];

const seedMovie = () => Movie.bulkCreate(movieData);

module.exports = seedMovie;