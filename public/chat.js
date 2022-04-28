const socket = io.connect('<%= url %>');

// Listen
socket.on('newMessage', (message) => {
    createMessage(message, 'left');
});

// Emit functions
function sendMessage(e) {
    e.preventDefault();
    
    const message = document.getElementById('msgInput').value;
    document.getElementById('msgInput').value = '';

    if(message.length > 0) {
        socket.emit('sendMessage', message);
        createMessage(message, 'right');
    }
}

// Global functions
function createMessage(message, side) {
    const div = document.createElement('div');
    div.classList.add('message', side);
    div.innerText = message;
    document.getElementById('msgContainer').appendChild(div);
}