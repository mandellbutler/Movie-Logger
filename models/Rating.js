const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {}

Rating.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
		foreignKey: 'movie_id',
		foreignKey: 'user_id'
	  },
	user_rating: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	sequelize,
    timestamps: true,
    freezeTablename: false,
    underscored: true,
    modelName: 'Rating'	  
})

module.exports = Rating