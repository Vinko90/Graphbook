'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Chats', [{
       createdAt: new Date(),
       updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Chats', null, {});
  }
};
