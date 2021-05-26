const sequelize = require('../config/connection')
const seedMovie = require('./movie-seeds')
const seedUser = require('./user-seeds')
const seedRating = require('./rating-seeds')

const seedAll = async () => {
  await sequelize.sync({ force: true })

  await seedMovie()

  await seedUser()

  await seedRating()

  process.exit(0)
}

seedAll()