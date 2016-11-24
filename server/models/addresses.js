export default (sequelize, DataTypes) => {
  const Addresses = sequelize.define('addresses', {
    address: DataTypes.TEXT
  });

  return Addresses;
};
