'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('messages', [
      {
        user: 'Mr. T',
        message: 'I pity da foo who come up on my message board.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: 'Eric',
        message: "You don't need a parachute to go skydiving. You need a parachute to go skydiving twice.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('messages', null, {});
  }
};
