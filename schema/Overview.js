const Sequelize = require('sequelize')

const Schema = {
  name: { type: Sequelize.STRING, primaryKey: true },
  value: {
    type: Sequelize.INTEGER
  }
}

module.exports = Schema
