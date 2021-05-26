const { User } = require('../models')

const userData = [
  {
    username: 'Jason Douglas',
    email: 'mrjmitchell@movieman.com',
    password: 'jason1982'
  },
  {
    username: 'Summer Rain',
    email: 'mrssummerrain@movieman.com',
    password: 'summer1983'
  },
  {
    username: 'Porter Scotts',
    email: 'burgerman22@movieman.com',
    password: 'beammeup1884'
  },
  {
    username: 'Winter Stevens',
    email: 'winterstevens@movieman.com',
    password: 'winter1993'
  },
  {
    username: 'Toby Waynes',
    email: 'tp83@movieman.com',
    password: 'tobywaynes1'
  },
  {
    username: 'Jamie Ashton',
    email: 'ja2345@movieman.com',
    password: 'jamie678'
  }
]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser
