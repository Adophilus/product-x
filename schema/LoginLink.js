const Sequelize = require('sequelize')
const { Tables } = require('../utils/db')

const Schema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  user: {
    type: Sequelize.STRING,
    references: {
      model: Tables.users,
      key: 'email'
    }
  },
  expires: {
    type: Sequelize.DATE,
    defaultValue: () => Date.now() + 1800 * 1000
  }
}

module.exports = Schema
