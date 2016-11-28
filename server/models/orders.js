import Sequelize from 'sequelize';

export default (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
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
    item_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
  }, {
    underscored: true,
    classMethods: {
      associate(models) {
        Orders.belongsTo(models.Items, {
          foreignKey: 'item_id',
        });

        Orders.belongsTo(models.Users, {
          foreignKey: 'customer_id',
        });

        Orders.belongsTo(models.Users, {
          foreignKey: 'picker_id',
        });
      },
    },
  });

  return Orders;
};
