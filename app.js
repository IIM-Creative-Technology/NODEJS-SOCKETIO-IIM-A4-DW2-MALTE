const express = require('express')
const userAPI = require('./api/user/routes');
const app = express();
const sequelize = require('./data/postgresql/data/db')

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
});

userAPI.createRoutes(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port 3000`);
});
