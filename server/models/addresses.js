export default (sequelize, DataTypes) => {
  const Addresses = sequelize.define('addresses', {
    address: DataTypes.TEXT
  }, {
    classMethods: {
      associate(models) {
        Addresses.belongsTo(models.Users);
      }
    }
  });

  return addresses;
};
