const { db, Tables } = require('../utils/db')
const Sequelize = require('sequelize')

const Overview = db.define(Tables.overviews, {
  name: { type: Sequelize.STRING, unique: true },
  value: {
    type: Sequelize.INTEGER
  }
})

module.exports = Overview
