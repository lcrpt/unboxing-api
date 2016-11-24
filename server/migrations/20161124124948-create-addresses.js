'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [10, 250],
            msg: 'Should have a length of 10 to 250 characters',
          },
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('addresses');
  }
};
