'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Get all existing users
    return queryInterface.sequelize.query(
      'SELECT id from Users;',
    ).then((users) => {
      const usersRows = users[0];
      
      return queryInterface.bulkInsert('Posts', [{
        text: 'Lorem ipsum 1',
        userId: usersRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Lorem ipsum 2',
        userId: usersRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
   });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Posts', null, {});
  }
};
