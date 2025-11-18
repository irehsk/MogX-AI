document.addEventListener('DOMContentLoaded', () => {
  const getStarted = document.getElementById('getStarted');
  const getStartedTop = document.getElementById('getStartedTop');
  const backBtn = document.getElementById('backBtn');
  const app = document.getElementById('app');
  const spinner = document.getElementById('spinner');
  const iframe = document.getElementById('botpressFrame');

  // helper to show chat
  function showChat() {
    // add class to body/app to trigger CSS transitions
    document.body.classList.add('show-chat');
    app.classList.remove('screen-landing');
    app.classList.add('screen-chat');
    // update aria
    document.getElementById('landingScreen').setAttribute('aria-hidden', 'true');
    document.getElementById('chatScreen').setAttribute('aria-hidden', 'false');

    // focus iframe after small delay
    setTimeout(() => {
      try { iframe.focus(); } catch (e){}
    }, 600);
  }

  // helper to go back
  function hideChat() {
    document.body.classList.remove('show-chat');
    app.classList.add('screen-landing');
    app.classList.remove('screen-chat');
    document.getElementById('landingScreen').setAttribute('aria-hidden', 'false');
    document.getElementById('chatScreen').setAttribute('aria-hidden', 'true');
  }

  // click handlers
  if (getStarted) getStarted.addEventListener('click', showChat);
  if (getStartedTop) getStartedTop.addEventListener('click', showChat);
  if (backBtn) backBtn.addEventListener('click', hideChat);

  // iframe load handling
  if (iframe) {
    iframe.addEventListener('load', () => {
      if (spinner) spinner.style.display = 'none';
      // small resize fix
      setTimeout(() => { try { iframe.style.height = iframe.parentElement.clientHeight + 'px'; } catch(e){} }, 120);
    });
    // fallback hide
    setTimeout(() => { if (spinner) spinner.style.display = 'none'; }, 7000);
  }

  // accessibility: allow Enter on call-to-action when focused
  [getStarted, getStartedTop].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showChat();
      }
    });
  });
});
