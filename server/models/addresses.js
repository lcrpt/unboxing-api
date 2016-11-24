import Sequelize from 'sequelize';

export default (sequelize, DataTypes) => {
  const Addresses = sequelize.define('addresses', {
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
  });

  return Addresses;
};
