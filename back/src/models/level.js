const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Level', {
		level_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		level_name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		timestamps: false
	})
}