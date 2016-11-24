export default (sequelize, DataTypes) => {
  const addresses = sequelize.define('addresses', {
    address: DataTypes.TEXT
  }, {
    classMethods: {
      associate(models) {

      }
    }
  });
  
  return addresses;
};
