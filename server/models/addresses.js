import Sequelize from 'sequelize';

export default (sequelize, DataTypes) => {
  const Addresses = sequelize.define('Addresses', {
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
  }, {
    underscored: true,
    classMethods: {
      associate(models) {
        Addresses.belongsTo(models.Users, {
          foreignKey: 'user_id',
        });
      },
    },
  });

  return Addresses;
};
