// Simple interactions for the new landing page.
// - Smooth scrolling for nav links
// - Open chat modal (Botpress iframe) via prompt send button or CTA
// - Close chat modal
// - Populate year in footer

document.addEventListener('DOMContentLoaded', () => {
  // set year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // Smooth scroll for internal anchors (About/Pricing/FAQ/etc).
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Open chat modal (Botpress iframe)
  const chatModal = document.getElementById('chatModal');
  const chatBackdrop = document.getElementById('chatBackdrop') || document.querySelector('.chat-modal-backdrop');
  const openButtons = [
    document.getElementById('openChat'),
    document.getElementById('startFree'),
    document.getElementById('watchDemo'),
    document.getElementById('learnMore')
  ].filter(Boolean);

  const showChat = () => {
    if (!chatModal) return;
    chatModal.setAttribute('aria-hidden', 'false');
    // ensure iframe loads (some CSP or lazy load needs time) - optionally refresh src
    const iframe = document.getElementById('botIframe');
    if (iframe && (!iframe.getAttribute('src') || iframe.getAttribute('data-src'))) {
      // If you used data-src to avoid loading, move to src here
      const src = iframe.getAttribute('data-src') || iframe.getAttribute('src');
      iframe.setAttribute('src', src);
      iframe.removeAttribute('data-src');
    }
    document.body.style.overflow = 'hidden';
  };

  const hideChat = () => {
    if (!chatModal) return;
    chatModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openButtons.forEach(b => b.addEventListener('click', (e) => {
    e.preventDefault();
    showChat();
  }));

  const closeBtn = document.getElementById('closeChat');
  if (closeBtn) closeBtn.addEventListener('click', hideChat);
  if (chatBackdrop) chatBackdrop.addEventListener('click', hideChat);

  // Top login/signup small handlers (example UX)
  document.getElementById('loginTop')?.addEventListener('click', () => {
    alert('Login flow not connected in this demo. Replace with your auth flow.');
  });
  document.getElementById('signupTop')?.addEventListener('click', () => {
    alert('Signup flow not connected in this demo. Replace with your auth flow.');
  });

  // accessibility: close Modal with Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideChat();
  });
});
