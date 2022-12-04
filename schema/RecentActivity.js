const Sequelize = require('sequelize')

const Schema = {
  operation: {
    type: Sequelize.STRING,
    unique: true
  },
  status: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}

module.exports = Schema
