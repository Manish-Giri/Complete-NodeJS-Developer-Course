// imports
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
// TODO: read docs on these statements
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log("User connected via Socket.io!");
    console.log("------");
    // emit a custom message on connection from a socket (browser)
    socket.emit('message', {
        text: "Welcome to the chat application!"
    });

    // listen for custom message from one socket and broadast to all other sockets
    socket.on('message', message => {
        console.log(`Message received: ${message.text}`);

        // broadcast to everyone but sender
        socket.broadcast.emit('message', message);
        // NOTE: use io.emit() for sending to sender too
    });

});








http.listen(PORT, () => console.log("Server started"));