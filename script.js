document.addEventListener('DOMContentLoaded', () => {

  // Subscription buttons
  const subscribeButtons = document.querySelectorAll('#ctaSubscribe, #subscribeTop, #subscribePricing');
  subscribeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = 'https://your-warp-subscription-link.com'; // Replace
    });
  });

  // FAQ toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    a.style.display = 'none';
    q.addEventListener('click', () => {
      const isVisible = a.style.display === 'block';
      a.style.display = isVisible ? 'none' : 'block';
    });
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Fade transition to chatbot
  const getStartedBtns = document.querySelectorAll('#getStartedBtn, #getStartedBtn2');
  getStartedBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.style.transition = 'opacity 0.5s';
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = 'chatbot.html';
      }, 500);
    });
  });

});
