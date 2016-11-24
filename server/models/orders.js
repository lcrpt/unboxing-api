export default (sequelize, DataTypes) => {
  const Orders = sequelize.define('orders', {
    delivery_date: DataTypes.DATE
  }, {
    classMethods: {
      associate(models) {
        Orders.hasOne(models.items);
      }
    }
  });

  return Orders;
};
