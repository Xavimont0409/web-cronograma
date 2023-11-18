const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Payment', {
    payment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    payment_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    timestamps: false
  })
}
