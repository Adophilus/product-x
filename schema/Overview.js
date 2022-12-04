const Sequelize = require('sequelize')

const Schema = {
  name: { type: Sequelize.STRING, unique: true },
  value: {
    type: Sequelize.INTEGER
  }
}

module.exports = Schema
