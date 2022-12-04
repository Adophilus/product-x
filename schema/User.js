const Sequelize = require('sequelize')

const Schema = {
  name: {
    type: Sequelize.STRING,
    unique: true,
    validate: { isEmail: true }
  }
}

module.exports = Schema
