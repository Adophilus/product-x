'use strict'
const { Tables } = require('../utils/db')
const Schema = require('../schema')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable(Tables.overviews, Schema.Overview)
    queryInterface.createTable(Tables.recentActivities, Schema.RecentActivity)
    queryInterface.createTable(Tables.tracks, Schema.Track)
    queryInterface.createTable(Tables.users, Schema.User)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable(Tables.overviews, Schema.Overview)
    queryInterface.dropTable(Tables.recentActivities, Schema.RecentActivity)
    queryInterface.dropTable(Tables.tracks, Schema.Track)
    queryInterface.dropTable(Tables.users, Schema.User)
  }
}
