const User = require('./User');
const Movie = require('./Movie');
const Rating = require('./Rating');

User.belongsToMany(Movie, {
  foreignKey: 'user_id',
  through: {
    model: Rating,
    unique: false
  }
});

Movie.belongsToMany(User, {
  foreignKey: 'movie_id',
  through: {
    model: Rating,
    unique: false
  }
});

module.exports = { User, Rating, Movie };
