import Sequelize from 'sequelize';

export default (sequelize, DataTypes) => {
  const Items = sequelize.define('Items', {
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
    order_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
  }, {
    underscored: true,
    // classMethods: {
    //   associate(models) {
    //     Items.belongsTo(models.Orders, {
    //       foreignKey: 'item_id',
    //     });
    //   },
    // },
  });

  return Items;
};
