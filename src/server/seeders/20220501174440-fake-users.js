'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     return await queryInterface.bulkInsert('Users', 
     [
       {
         avatar: '/uploads/avatar1.png',
         username: 'TestUser1',
         password: '$2a$10$bE3ovf9/Tiy/d68bwNUQ0.zCjwtNFq9ukg9h4rhKiHCb6x5ncKife', /*123456789*/
         email: 'test1@example.com',
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         avatar: '/uploads/avatar2.png',
         username: 'TestUser2',
         password: '$2a$10$bE3ovf9/Tiy/d68bwNUQ0.zCjwtNFq9ukg9h4rhKiHCb6x5ncKife',
         email: 'test2@example.com',
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
