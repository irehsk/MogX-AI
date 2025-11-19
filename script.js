const chatScreen = document.getElementById("chat-screen");

function openChat() {
    chatScreen.style.display = "block";
    setTimeout(() => {
        chatScreen.style.opacity = "1";
    }, 20);
}

function closeChat() {
    chatScreen.style.opacity = "0";
    setTimeout(() => {
        chatScreen.style.display = "none";
    }, 500);
}
