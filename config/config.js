const fs = require('fs');

module.exports = {
    development: {
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        host: 'localhost',
        port: 5432,
        dialect: 'postgresql'
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgresql',
        dialectOptions: {
            "ssl": {
                "require": true,
                "rejectUnauthorized": false
            }
        }
    }
};