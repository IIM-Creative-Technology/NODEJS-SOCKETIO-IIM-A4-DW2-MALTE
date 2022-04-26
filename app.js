const express = require('express')
const userAPI = require('./api/user/routes')
const path = require('path')
const app = express()

app.locals.title = 'myApp'

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

userAPI.createRoutes(app)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port 3000`)
})
