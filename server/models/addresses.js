'use strict';
module.exports = function(sequelize, DataTypes) {
  var Addresses = sequelize.define('Addresses', {
    address: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Addresses;
};