import Sequelize from 'sequelize';
import bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 30],
          msg: 'Should have a length of 5 to 30 characters',
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: {
          args: [5, 50],
          msg: 'Should have a length of 5 to 50 characters',
        },
      },
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [1, 500],
          msg: 'Should have a length of 10 to 250 characters',
        },
      },
    },
    roles: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isIn: [['customer', 'picker']],
        len: {
          args: [5, 9],
          msg: 'Should have a length of 5 to 9 characters',
        },
      },
    },
    address_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        isInt: true,
      },
    },
  }, {
    underscored: true,
    hooks: {
      afterValidate(user) {
        user.password = bcrypt.hashSync(user.password, 8);
      },
    },
    classMethods: {
      associate(models) {
        Users.hasMany(models.Orders, {
          onDelete: 'cascade',
          onUpdate: 'cascade',
          foreignKey: 'customer_id',
        });

        Users.hasMany(models.Orders, {
          onDelete: 'cascade',
          onUpdate: 'cascade',
          foreignKey: 'picker_id',
        });

        Users.hasOne(models.Addresses, {
          onDelete: 'cascade',
          onUpdate: 'cascade',
          foreignKey: 'address_id',
        });
      },
    },
  });

  return Users;
};
