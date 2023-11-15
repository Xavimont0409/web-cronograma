const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('TypeClass', {
    type_class_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    type_class_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  })
}
