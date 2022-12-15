const { db, Tables } = require('../utils/db')
const Schema = require('../schema/LoginLink')
const User = require('./User')

const LoginLink = db.define(Tables.loginLinks, Schema)
// LoginLink.belongsTo(User, { foreignKey: 'email' })

module.exports = LoginLink
