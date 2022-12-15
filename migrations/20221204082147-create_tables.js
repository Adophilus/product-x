'use strict'
const { Tables } = require('../utils/db')
const Schema = require('../schema')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    queryInterface.createTable(Tables.overviews, Schema.Overview)
    queryInterface.createTable(Tables.recentActivities, Schema.RecentActivity)
    queryInterface.createTable(Tables.tracks, Schema.Track)
    queryInterface.createTable(Tables.users, Schema.User)
    queryInterface.createTable(Tables.loginLinks, Schema.LoginLink)
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable(Tables.overviews)
    queryInterface.dropTable(Tables.recentActivities)
    queryInterface.dropTable(Tables.tracks)
    queryInterface.dropTable(Tables.users)
    queryInterface.dropTable(Tables.loginLinks)
  }
}
