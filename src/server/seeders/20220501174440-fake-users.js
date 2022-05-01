'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     return await queryInterface.bulkInsert('Users', 
     [
       {
         avatar: '/uploads/avatar1.png',
         username: 'Test User',
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         avatar: '/uploads/avatar2.png',
         username: 'Test User 2',
         createdAt: new Date(),
         updatedAt: new Date(),
       }
     ],
     {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
