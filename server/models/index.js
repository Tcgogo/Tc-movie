const config = require('../config')
const Sequelize = require('sequelize')
const { db } = require('../config')

const sequlize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db.options
)

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db
