const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const List = sequelize.define('List', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
  },
  timestamps: true,
});

// `sequelize.define` also returns the model
console.log(List === sequelize.models.List); // true
