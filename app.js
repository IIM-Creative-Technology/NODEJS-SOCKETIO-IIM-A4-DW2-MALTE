const express = require('express')
const userAPI = require('./api/user/routes');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

userAPI.createRoutes(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port 3000`)

})
