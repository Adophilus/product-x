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
  updatedAt: { type: Sequelize.DATE },
  createdAt: { type: Sequelize.DATE }
}

module.exports = Schema
