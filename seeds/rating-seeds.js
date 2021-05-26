const { Rating } = require('../models');

const ratingdata = [
  {
    user_rating: 4,
    movie_id: 3,
    user_id: 1,
  },
  {
    user_rating: 5,
    movie_id: 2,
    user_id: 2,
  },
  {
    user_rating: 3,
    movie_id: 3,
    user_id: 3,
  },
  {
    user_rating: 2,
    movie_id: 2,
    user_id: 4,
  },
  {
    user_rating: 1,
    movie_id: 3,
    user_id: 3,
  },
];

const seedRating = () => Rating.bulkCreate(ratingdata);

module.exports = seedRating;