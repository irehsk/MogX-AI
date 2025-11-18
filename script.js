// Set current year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Open / Close chat
const openChatBtn = document.getElementById('open-chat');
const closeChatBtn = document.getElementById('close-chat');
const chatModal = document.getElementById('chat-modal');

if (openChatBtn) {
  openChatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    chatModal.classList.add('open');
    chatModal.setAttribute('aria-hidden', 'false');
  });
}

if (closeChatBtn) {
  closeChatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    chatModal.classList.remove('open');
    chatModal.setAttribute('aria-hidden', 'true');
  });
}
