const Sequelize = require('sequelize')

const Schema = {
  email: {
    type: Sequelize.STRING,
    primaryKey: true,
    validate: { isEmail: true }
  }
}

module.exports = Schema
