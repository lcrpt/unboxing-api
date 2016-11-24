'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      delivery_date: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
        },
      },
      driver_id: {
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
    return queryInterface.dropTable('orders');
  }
};
