const express = require('express')
const app = express()
const sequelize = require('./data/postgresql/data/db')
const router = require('./routes/router')

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
} else if ( process.env.NODE_ENV !== 'develop') {
    require('dotenv').config()
}

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(router);

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
  }
main()

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port 3000`)
})
