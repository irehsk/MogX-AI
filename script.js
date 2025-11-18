document.addEventListener('DOMContentLoaded', () => {
  // year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // iframe + spinner
  const iframe = document.getElementById('botpressFrame');
  const spinner = document.getElementById('spinner');
  const iframeWrap = document.getElementById('iframeWrap');

  if (!iframe) {
    console.warn('MOGX: iframe missing. Make sure index.html contains your Botpress iframe URL.');
    if (spinner) spinner.style.display = 'none';
    return;
  }

  // hide spinner when iframe fully loads
  iframe.addEventListener('load', () => {
    if (spinner) spinner.style.display = 'none';
    // slight resize fix
    setTimeout(() => {
      try { iframe.style.height = iframe.parentElement.clientHeight + 'px'; } catch (e) {}
    }, 120);
  });

  // fallback hide
  setTimeout(() => { if (spinner) spinner.style.display = 'none'; }, 7000);
});
