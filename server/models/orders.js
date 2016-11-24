import Sequelize from 'sequelize';

export default (sequelize, DataTypes) => {
  const Orders = sequelize.define('orders', {
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
  }, {
    classMethods: {
      associate(models) {
        Orders.hasOne(models.items);
      }
    }
  });

  return Orders;
};
