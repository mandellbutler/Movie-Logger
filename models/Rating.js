const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {}

Rating.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	  },
	rating_score: {
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