'use strict';
module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define('Orders', {
    delivery_date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Orders;
};