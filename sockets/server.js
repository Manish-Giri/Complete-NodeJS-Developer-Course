// imports
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
// TODO: read docs on these statements
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', () => console.log("User connected via Socket.io!"));








http.listen(PORT, () => console.log("Server started"));