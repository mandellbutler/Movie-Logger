const { Movie } = require('../models');

const movieData = [
  {
    title: 'Training Day',
    release_year: '2001',
    director_name: 'Antione Fuqua',
    actor_name: 'Denzel Washington',
    avg_rating: 5
  },
  {
    title: 'Meet the Fockers',
    release_year: '2004',
    director_name: 'Ray Roach',
    actor_name: 'Robert DeNiro',
    avg_rating: 3.3
  },
  {
    title: 'Savages',
    release_year: '2012',
    director_name: 'Oliver Stone',
    actor_name: 'Salma Hayek',
    avg_rating: 4
  },
];

const seedMovie = () => User.bulkCreate(movieData);

module.exports = seedMovie;