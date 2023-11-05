const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Schedule', {
		schedule_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		start: {
			type: DataTypes.DATE,
			allowNull: false
		},
		end: {
			type: DataTypes.DATE,
			allowNull: false
		}
	},
	{
		timestamps: false
	})
}