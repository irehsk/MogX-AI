// MOGX UI helpers
document.addEventListener('DOMContentLoaded', ()=> {
  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Elements
  const iframe = document.getElementById('botpressFrame');
  const spinner = document.getElementById('spinner');
  const iframeWrap = document.getElementById('iframeWrap');

  // If the iframe src was left as placeholder, show clear console message
  if (iframe && iframe.src.includes('YOUR_BOTPRESS_IFRAME_URL_HERE')) {
    console.warn('MOGX: Replace YOUR_BOTPRESS_IFRAME_URL_HERE in index.html with your Botpress iframe URL.');
  }

  // Wait for iframe to load then hide spinner
  if (iframe) {
    iframe.addEventListener('load', ()=> {
      if (spinner) spinner.style.display = 'none';
      // Ensure iframe resizes properly on mobile (give it a tiny delay)
      setTimeout(()=> {
        try { iframe.style.height = iframeWrap.clientHeight + 'px'; } catch(e){}
      }, 120);
    });

    // in case iframe is cross-origin and load event is fired earlier, ensure spinner timeout
    setTimeout(()=> { if (spinner) spinner.style.display = 'none'; }, 5000);
  }
});
