const { Sequelize } = require('sequelize');
const { readFileSync } = require('fs');
require('dotenv').config();

const sequelize = process.env.NODE_ENV == 'development' 
  ? new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: process.env.DB_HOST,
      dialect: 'postgres'
  })
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: { require: true, rejectUnauthorized: false }
    }
  });

module.exports = sequelize;
