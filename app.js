const express = require('express')
const userAPI = require('./api/user/routes')
const path = require('path')
const app = express()
const sequelize = require('./data/postgresql/data/db')

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
} else if ( process.env.NODE_ENV !== 'develop') {
    require('dotenv').config()
}

app.use(express.json())
app.use(express.urlencoded({extended:false}));

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
  }
main()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

userAPI.createRoutes(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port 3000`)
})
