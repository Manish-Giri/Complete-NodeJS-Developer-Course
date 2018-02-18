const socket = io();
const name = getQueryVariable('name') || 'Anonymous';
const room = getQueryVariable('room');
//console.log(socket);

console.log(`${name} wants to join ${room}`);
socket.on('connect', () => {

    // setup chat room name
    $(".room-title").html(room);

    console.log("Connected to socket.io server");

    console.log("--- Joining room ---");
    socket.emit('joinRoom', {name, room});
});



// listen for custom event 'message', passed the message received
socket.on('message', (message) => {
    console.log(`New message received: ${message.text}`);

    // convert timestamp received from server to moment object
    let timestampMoment = moment.utc(message.timestamp);
    // create a header - name + date
    let messageInfo = `${message.name} ${timestampMoment.local().format('h:mm a')}`;

    // display message received from server on screen
    // attach timestamp received from server as local time
    $(".messages").append(`<p><strong>${messageInfo}</strong>: ${message.text}</p>`);
});

// handle form submission
const $form = $("#message-form");
const $formInp = $form.find('input[name=message]');

$form.on('submit', (e) => {
   e.preventDefault();


   socket.emit('message', {
       name: name,
       text: $formInp.val()
   });

   // reset input
    $formInp.val('');

});