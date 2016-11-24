'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [5, 30],
            msg: 'Should have a length of 5 to 30 characters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          len: {
            args: [5, 50],
            msg: 'Should have a length of 5 to 50 characters',
          },
        },
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [1, 500],
            msg: 'Should have a length of 10 to 250 characters',
          },
        },
      },
      roles: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['customer', 'driver']],
          len: {
            args: [5, 9],
            msg: 'Should have a length of 5 to 9 characters',
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
    return queryInterface.dropTable('users');
  }
};
