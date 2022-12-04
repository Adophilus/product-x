const { db, Tables } = require('../utils/db')
const Schema = require('../schema/User')

const User = db.define(Tables.users, Schema)

module.exports = User
