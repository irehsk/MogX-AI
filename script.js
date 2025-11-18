// Update year
document.getElementById('year').textContent = new Date().getFullYear();

// Chat open/close handlers
const chatWrapper = document.getElementById('chat-wrapper');
const openBtn = document.getElementById('open-chat') || document.getElementById('start-chat');
const closeBtn = document.getElementById('close-chat');

function openChat(e){
  e && e.preventDefault();
  chatWrapper.classList.add('open');
  chatWrapper.setAttribute('aria-hidden','false');
  // scroll iframe into view (mobile)
  const frame = document.querySelector('.chat-frame');
  if (frame) frame.scrollIntoView({behavior:'smooth'});
}
function closeChat(e){
  e && e.preventDefault();
  chatWrapper.classList.remove('open');
  chatWrapper.setAttribute('aria-hidden','true');
}

if(openBtn) openBtn.addEventListener('click', openChat);
if(closeBtn) closeBtn.addEventListener('click', closeChat);

// auto-open small delay on first visit (optional)
// setTimeout(()=> openChat(), 1200);

// Console friendly
console.log("MOGX UI loaded — dark theme with blue gradient");
