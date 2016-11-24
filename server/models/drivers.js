export default (sequelize, DataTypes) => {
  var Drivers = sequelize.define('drivers', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT
  }, {
    classMethods: {
      associate(models) {

      }
    }
  });
  
  return Drivers;
};
