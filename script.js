document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('user-input-form');
    var chatBox = document.getElementById('chat-box');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var userMessageInput = document.getElementById('user-message');
        var userMessage = userMessageInput.value;

        // Display user's message
        var userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.innerHTML = '<p>' + userMessage + '</p>';
        chatBox.appendChild(userMessageDiv);

        // Clear input field
        userMessageInput.value = '';

        // Send user's message to server and get bot's response
        fetch('/get_response', {
            method: 'POST',
            body: new URLSearchParams({
                user_message: userMessage
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.text())
        .then(botResponse => {
            // Display bot's response
            var botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('bot-message');
            botMessageDiv.innerHTML = '<p>' + botResponse + '</p>';
            chatBox.appendChild(botMessageDiv);

            // Scroll to bottom
            chatBox.scrollTop = chatBox.scrollHeight;
        });
    });
});
