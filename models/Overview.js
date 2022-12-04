const { db, Tables } = require('../utils/db')
const Sequelize = require('sequelize')

const Schema = {
  name: { type: Sequelize.STRING, unique: true },
  value: {
    type: Sequelize.INTEGER
  }
}

const Overview = db.define(Tables.overviews, Schema)

exports.Schema = Schema
exports.Overview = Overview
module.exports = Overview
