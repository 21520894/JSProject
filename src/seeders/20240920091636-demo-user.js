'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('users', [{
        email: 'example@gmail.com', 
        password: '123456',
        firstName: 'John',
        lastName: 'Doe',
        address: '768 walls street',
        gender: 1,
        typeRole: 'role',
        keyRole: 'R1',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
