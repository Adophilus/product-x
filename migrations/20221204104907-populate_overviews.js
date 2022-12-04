'use strict'

const { Tables } = require('../utils/db')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.bulkInsert(Tables.overviews, [
      {
        name: 'registeredUsers',
        value: 0
      },
      {
        name: 'registeredTracks',
        value: 0
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
