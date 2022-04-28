require('dotenv').config();

module.exports = {
    jwtPass: process.env.JWT_PASS,
    jwtTime: process.env.JWT_TIME,
};