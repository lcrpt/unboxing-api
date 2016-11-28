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
    picker_id: {
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

        Orders.belongsTo(models.users, {
          foreignKey: 'customer_id',
          as: 'customer',
        });

        Orders.belongsTo(models.users, {
          foreignKey: 'picker_id',
          as: 'picker',
        });
      }
    }
  });

  return Orders;
};
