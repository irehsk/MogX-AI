// Update year
document.getElementById('year').textContent = new Date().getFullYear();

// Chat open/close handlers
const chatWrapper = document.getElementById('chat-wrapper');
const openBtn = document.getElementById('open-chat') || document.getElementById('start-chat');
const closeBtn = document.getElementById('close-chat');

function openChat(e) {
  e && e.preventDefault();
  chatWrapper.classList.add('open');
  chatWrapper.setAttribute('aria-hidden','false');
}
function closeChat(e) {
  e && e.preventDefault();
  chatWrapper.classList.remove('open');
  chatWrapper.setAttribute('aria-hidden','true');
}

if (openBtn) openBtn.addEventListener('click', openChat);
if (closeBtn) closeBtn.addEventListener('click', closeChat);

console.log("MOGX Chat Centered UI Loaded");

