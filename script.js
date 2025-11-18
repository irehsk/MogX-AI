document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const iframe = document.getElementById('botpressFrame');
  const spinner = document.getElementById('spinner');

  if (!iframe) {
    console.warn('MOGX: iframe missing. Replace YOUR_BOTPRESS_IFRAME_URL_HERE in index.html with your Botpress iframe URL.');
    return;
  }

  // Hide the ghost spinner when iframe loads
  iframe.addEventListener('load', () => {
    if (spinner) spinner.style.display = 'none';
    // minor resize adjustment
    setTimeout(() => {
      try {
        iframe.style.height = iframe.parentElement.clientHeight + 'px';
      } catch (e) {}
    }, 120);
  });

  // safety hide after 6s
  setTimeout(() => {
    if (spinner) spinner.style.display = 'none';
  }, 6000);
});
