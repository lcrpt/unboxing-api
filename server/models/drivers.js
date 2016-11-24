export default (sequelize, DataTypes) => {
  const Drivers = sequelize.define('drivers', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT
  }, {
    classMethods: {
      associate(models) {
        Drivers.hasMany(models.Orders, {
          onDelete: 'cascade'
        });
      }
    }
  });

  return Drivers;
};
