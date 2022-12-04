const { db, Tables } = require('../utils/db')
const Sequelize = require('sequelize')

const Track = db.define(Tables.tracks, {
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  slug: {
    type: Sequelize.STRING
  },
  link: {
    type: Sequelize.STRING,
    validate: {
      isURL: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  registrations: {
    type: Sequelize.INTEGER
  }
})

module.exports = Track
