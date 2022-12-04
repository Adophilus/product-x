const { db, Tables } = require('../utils/db')
const Sequelize = require('sequelize')

const User = db.define(Tables.users, {
  name: {
    type: Sequelize.STRING,
    unique: true,
    validate: { isEmail: true }
  }
})

module.exports = User
