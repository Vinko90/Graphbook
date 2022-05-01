'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Posts', 
    [
      {
        text: 'Lorem ipsum 1',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Lorem ipsum 2',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Posts', null, {});
  }
};
