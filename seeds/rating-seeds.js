const { Rating } = require('../models')

const ratingdata = [
  {
    user_rating: '4'
  }
]

const seedRating = () => Rating.bulkCreate(ratingdata)

module.exports = seedRating