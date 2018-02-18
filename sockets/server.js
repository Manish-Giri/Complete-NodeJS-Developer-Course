// imports
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const moment = require('moment');
// TODO: read docs on these statements
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log("User connected via Socket.io!");
    console.log("------");

    // emit a custom message on connection from a socket (browser)
    // FIRST system message

    socket.emit('message', {
        name: "The Matrix",
        text: 'Welcome to the chat application!',
        at: moment().valueOf()
    });

    // listen for custom message from one socket and broadcast to all other sockets
    socket.on('message', message => {
        console.log(`Message received: ${message.text}`);

        // attach timestamp to received message
        message.at = moment().valueOf();

        // SECOND user message
        // broadcast to everyone but sender
        // NOTE: use io.emit() for sending to sender too
        io.emit('message', message);

    });

});








http.listen(PORT, () => console.log("Server started"));