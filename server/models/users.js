export default (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT
  }, {
    classMethods: {
      associate(models) {
        Users.hasMany(models.Orders, {
          onDelete: 'cascade'
        });

        Users.hasMany(models.Addresses, {
          onDelete: 'cascade'
        });
      }
    }
  });

  return Users;
};
