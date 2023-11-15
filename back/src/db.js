require('dotenv').config()
const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')
const { URL_DATABASE, USER_DB, PASS_DB, PORT_DB, NAME_DB } = process.env

/* const sequelize = new Sequelize(`postgres://${USER_DB}:${PASS_DB}@${PORT_DB}/${NAME_DB}`, {
  logging: false,
  native: false,
}); */

const sequelize = new Sequelize(URL_DATABASE, {
  logging: false,
  native: false
})

const basename = path.basename(__filename)

const modelDefiners = []

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })

modelDefiners.forEach(model => model(sequelize))
const entries = Object.entries(sequelize.models)
const capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]])
sequelize.models = Object.fromEntries(capsEntries)

const { Level, Schedule, Student, TypeClass, User } = sequelize.models

Student.belongsToMany(Schedule, { through: 'StudentSchedule' })
Schedule.belongsToMany(Student, { through: 'StudentSchedule' })

Student.belongsToMany(Level, { through: 'StudentLevel' })
Level.belongsToMany(Student, { through: 'StudentLevel' })

Student.belongsToMany(TypeClass, { through: 'StudentTypeClass' })
TypeClass.belongsToMany(Student, { through: 'StudentTypeClass' })

module.exports = {
  ...sequelize.models,
  conn: sequelize
}
