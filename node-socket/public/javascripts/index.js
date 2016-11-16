var socket = io();
$('#send').on('click', function() {
    socket.emit('chat message', $('#entry').val());
    $('#entry').val('');
});

socket.on('chat message', function(msg) {
    $('#msg').append($('<li>').text(msg));
});

socket.on('from', function(msg) {
    $('#num').html(msg);
});