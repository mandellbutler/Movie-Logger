const User = require('./User')
const Movie = require('./Movie')
const Rating = require('./Rating')

User.belongsToMany(Movie, {
  foreignKey: 'user_id',
  through: {
    model: Rating,
    unique: false
  },
  as: 'completed_ratings'
})

Movie.belongsToMany(User, {
  through: {
    model: Rating,
    unique: false
  },
  as: 'movie_rating'
})

module.exports = { User, Rating, Movie }
