const socket = io();
//console.log(socket);

socket.on('connect', () => console.log("Connected to socket.io server"));


// listen for custom event 'message', passed the message received
socket.on('message', (message) => {
    console.log(`New message received: ${message.text}`);

    let timestampMoment = moment.utc(message.timestamp);

    // display message received from server on screen
    // attach timestamp received from server as local time
    $(".messages").append(`<p><strong>${timestampMoment.local().format('h:mm a')}</strong>: ${message.text}</p>`);
});

// handle form submission
const $form = $("#message-form");
const $formInp = $form.find('input[name=message]');

$form.on('submit', (e) => {
   e.preventDefault();


   socket.emit('message', {
       text: $formInp.val()
   });

   // reset input
    $formInp.val('');

});