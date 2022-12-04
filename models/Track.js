const { db, Tables } = require('../utils/db')
const Sequelize = require('sequelize')

const Schema = {
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
}

const Track = db.define(Tables.tracks, Schema)

exports.Schema = Schema
exports.Track = Track
module.exports = Track
