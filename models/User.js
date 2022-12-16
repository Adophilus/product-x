const { db, Tables } = require('../utils/db')
const Schema = require('../schema/User')
const Overview = require('./Overview')

const User = db.define(Tables.users, Schema)
User.addHook('afterCreate', 'register-user', async () => {
  const registeredUsersOverview = await Overview.findOne({
    where: { name: 'registeredUsers' }
  })
  registeredUsersOverview.value += 1
  await registeredUsersOverview.save()
})
User.addHook('afterDestroy', 'unregister-user', async () => {
  const registeredUsersOverview = await Overview.findOne({
    where: { name: 'registeredUsers' }
  })
  registeredUsersOverview.value -= 1
  await registeredUsersOverview.save()
})

module.exports = User
