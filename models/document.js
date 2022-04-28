const Sequelize = require('sequelize');
const db = require('../config/db');

const Documents = db.define('Documents', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
});

module.exports = Documents;