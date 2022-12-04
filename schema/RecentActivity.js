const Sequelize = require('sequelize')

const Schema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  operation: {
    type: Sequelize.STRING
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
