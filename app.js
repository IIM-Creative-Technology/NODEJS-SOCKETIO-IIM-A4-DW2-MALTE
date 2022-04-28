const express = require('express');
const { createServer } = require('http');
const sequelize = require('./config/db');
const router = require('./routes/router');
const {Server} = require('socket.io');

// Create server
const app = express();
const httpsServer = createServer(app);
const io = new Server(httpsServer);


if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
} else if ( process.env.NODE_ENV !== 'develop') {
    require('dotenv').config();
}

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));
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
    socket.on('sendMessage', (message) => {
        socket.broadcast.emit('newMessage', message);
    });
});