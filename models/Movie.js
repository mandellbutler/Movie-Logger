const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Movie extends Model {}

Movie.init({

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  movie_title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  release_date: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false
  },
  actors: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avg_rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sequelize,
  timestamps: true,
  freezeTablename: false,
  underscored: true,
  modelName: 'movie'
})

module.exports = Movie
