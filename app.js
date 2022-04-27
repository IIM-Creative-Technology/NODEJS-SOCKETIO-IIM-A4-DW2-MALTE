const express = require('express');
const { createServer } = require('http');
const sequelize = require('./data/postgresql/data/db');
const router = require('./routes/router');
const { readFileSync } = require('fs');
const {Server} = require('socket.io');

// SSL Options for the HTTPS
const optionsSSl = {
    key: readFileSync('./ssl/key.pem'),
    cert: readFileSync('./ssl/cert.pem'),
}

// Create server
const app = express();
const httpsServer = createServer(app);
const io = new Server(httpsServer);


if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
} else if ( process.env.NODE_ENV !== 'develop') {
    require('dotenv').config();
}

app.use(express.json());
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
main();

httpsServer.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port 3000`)
});

// Socket IO
io.on("connection", (socket) => {
    socket.on("to-server", () => {
        console.log("Socket received from client !");
        socket.emit("to-client");
    });
});