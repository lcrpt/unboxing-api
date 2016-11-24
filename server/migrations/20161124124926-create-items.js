'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [10, 150],
            msg: 'Should have a length of 10 to 150 characters',
          },
        },
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [10, 250],
            msg: 'Should have a length of 10 to 1000 characters',
          },
        },
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [10, 250],
            msg: 'Should have a length of 10 to 250 characters',
          },
        },
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        }
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
    return queryInterface.dropTable('items');
  }
};
