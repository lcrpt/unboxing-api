export default (sequelize, DataTypes) => {
  const Orders = sequelize.define('orders', {
    delivery_date: DataTypes.DATE
  }, {
    classMethods: {
      associate(models) {
        Orders.belongsTo(models.Users);
        Orders.belongsTo(models.Drivers);
        Orders.hasOne(models.Items);
      }
    }
  });

  return Orders;
};
