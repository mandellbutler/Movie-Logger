const sequelize = require('../config/connection')
const seedMovie = require('./movie-seeds')
const seedUser = require('./user-seeds')

const seedAll = async () => {
  await sequelize.sync({ force: true })

  await seedMovie()

  await seedUser()

  process.exit(0)
}

seedAll()