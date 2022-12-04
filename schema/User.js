const Sequelize = require('sequelize')

const Schema = {
  name: {
    type: Sequelize.STRING,
    primaryKey: true,
    validate: { isEmail: true }
  }
}

module.exports = Schema
