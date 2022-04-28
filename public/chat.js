// Ask for pseudo
while(!pseudo) {
    var pseudo = prompt('What is your name ?');
}
socket.emit('sendPseudo', pseudo);
document.title = pseudo + ' - ' + document.title;

// Listen
socket.on('newUser', (pseudo) => {
    newUserNotif(pseudo);
});
socket.on('newMessage', (message, pseudo) => {
    createMessage(message, pseudo, 'left');
});

// Emit functions
function sendMessage(e) {
    e.preventDefault();
    
    const message = document.getElementById('msgInput').value;
    document.getElementById('msgInput').value = '';

    if(message.length > 0) {
        socket.emit('sendMessage', message);
        createMessage(message, 'Vous', 'right');
    }
}

// Global functions
function createMessage(message, pseudo, side) {
    const div = document.createElement('div');
    div.classList.add('message', side);
    div.innerText = pseudo + ': ' + message;
    document.getElementById('msgContainer').appendChild(div);
}
function newUserNotif(pseudo) {
    const div = document.createElement('div');
    div.innerText = pseudo + ' a rejoint le chat.';
    document.getElementById('msgContainer').appendChild(div);
}