document.addEventListener('DOMContentLoaded', () => {
  // Subscription buttons
  const subscribeButtons = document.querySelectorAll('#ctaSubscribe, #subscribeTop, #subscribePricing');
  subscribeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = 'https://your-warp-subscription-link.com'; // Replace with Warp/WAPT link
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

  // Chatbot toggle
  const chatWidget = document.getElementById('moogx-chat-widget');
  const chatToggle = document.getElementById('moogx-chat-toggle');
  chatToggle.addEventListener('click', () => {
    chatWidget.classList.toggle('open');
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();
});
