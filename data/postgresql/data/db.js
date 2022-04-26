const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('de2vkv5jf3daak', 'tnbkybhllcapcd', 'c67650029bc90c3baf52d617f74284f4b5b18842092140fa437ab4cc1635c913', {
    host: 'ec2-52-86-56-90.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: { require: true, rejectUnauthorized: false }
    }
  });

module.exports = sequelize;
