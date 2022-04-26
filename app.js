const express = require('express')
const userAPI = require('./api/user/routes');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

userAPI.createRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
