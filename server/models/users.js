export default (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    roles: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        Users.hasMany(models.orders, {
          onDelete: 'cascade'
        });

        Users.hasMany(models.addresses, {
          onDelete: 'cascade'
        });
      }
    }
  });

  return Users;
};
