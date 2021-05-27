const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init({

  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  movie_title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: true
  },
  actors: {
    type: DataTypes.STRING,
    allowNull: true
  },
  avg_rating: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  movie_plot: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  movie_poster: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true
  },
  writers: {
    type: DataTypes.TEXT,
    allowNull: true
  },
},
{
  sequelize,
  timestamps: true,
  freezeTablename: false,
  underscored: true,
  modelName: 'movie'
});

module.exports = Movie;