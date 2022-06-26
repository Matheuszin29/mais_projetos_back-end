const Sequelize = require('sequelize');

const db  = require('./db');

const User = db.define('user', {
    // Model attributes are defined here
    ID: {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    }



  /*  firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }*/
  }, {
    // Other model options go here
  });

  User.sync()

  module.exports = User;