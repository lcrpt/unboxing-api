export default (sequelize, DataTypes) => {
  const Items = sequelize.define('items', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    price: DataTypes.INTEGER
  });

  return Items;
};
