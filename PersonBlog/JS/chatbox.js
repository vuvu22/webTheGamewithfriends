function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();
    if (message !== "") {
        var chatMessages = document.getElementById("chat-messages");
        var messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value = "";
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
