// debug loader
console.log('script.js loaded — MOGX UI controller');

document.addEventListener('DOMContentLoaded', () => {
  const landing = document.getElementById('landing');
  const chat = document.getElementById('chat');
  const getStarted = document.getElementById('getStarted');
  const backBtn = document.getElementById('backBtn');
  const spinner = document.getElementById('spinner');
  const iframe = document.getElementById('botpressFrame');
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const learnMore = document.getElementById('learnMore');

  // safe-guards
  if (!landing) console.error('landing element missing');
  if (!chat) console.error('chat element missing');

  // show chat (fade landing -> activate chat)
  function showChat() {
    try {
      landing.classList.add('fade-out');
      // ensure landing removed from flow
      setTimeout(() => {
        chat.classList.add('active');
        chat.setAttribute('aria-hidden', 'false');
        landing.setAttribute('aria-hidden', 'true');
        window.scrollTo(0, 0);
        // focus iframe if available
        try { iframe && iframe.contentWindow && iframe.contentWindow.focus(); } catch (e) {}
        console.log('chat activated');
      }, 700);
    } catch (e) { console.error(e) }
  }

  // hide chat, go back
  function hideChat() {
    try {
      chat.classList.remove('active');
      landing.classList.remove('fade-out');
      chat.setAttribute('aria-hidden', 'true');
      landing.setAttribute('aria-hidden', 'false');
      window.scrollTo(0, 0);
    } catch (e) { console.error(e) }
  }

  // event bindings
  if (getStarted) getStarted.addEventListener('click', showChat);
  if (backBtn) backBtn.addEventListener('click', hideChat);

  // login / signup (placeholders)
  if (loginBtn) loginBtn.addEventListener('click', () => {
    // replace with your auth/whop link
    window.location.href = 'https://whop.com/login';
  });
  if (signupBtn) signupBtn.addEventListener('click', () => {
    // replace with your product checkout link
    window.location.href = 'https://whop.com/YOUR_PRODUCT_ID';
  });

  if (learnMore) learnMore.addEventListener('click', () => {
    // simple modal or scroll; placeholder: open chat preview then return
    alert('MOGX gives a personalized 30/90 day transformation: skin, hair, posture, diet & confidence. Premium features unlock tailored plans and daily tasks.');
  });

  // iframe load handling: hide spinner once iframe loaded
  if (iframe) {
    iframe.addEventListener('load', () => {
      console.log('iframe loaded');
      if (spinner) spinner.style.display = 'none';
    });
    // fallback hide spinner
    setTimeout(() => { if (spinner) spinner.style.display = 'none'; }, 7000);
  }

  // accessibility: Enter triggers
  [getStarted, loginBtn, signupBtn].forEach(el => {
    if (!el) return;
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });
});
