'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Addresses', {
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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
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
