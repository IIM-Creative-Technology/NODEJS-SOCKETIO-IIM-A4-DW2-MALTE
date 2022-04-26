const express = require('express')
const userAPI = require('./api/user/routes');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
} else if ( process.env.NODE_ENV !== 'develop') {
    require('dotenv').config()
}

userAPI.createRoutes(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port 3000`)
})
