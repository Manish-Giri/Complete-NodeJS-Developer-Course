const socket = io();
//console.log(socket);

socket.on('connect', () => console.log("Connected to socket.io server"));

socket.on('message', (message) => {
    console.log(`New message received: ${message.text}`);
});