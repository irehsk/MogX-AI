function startApp() {
  const landing = document.getElementById("landing");
  const chat = document.getElementById("chat");

  if (!landing || !chat) {
    console.error("Landing or Chat element not found", { landing, chat });
    return;
  }

  // Fade out landing
  landing.classList.add("fade-out");

  // After fade, show chat
  setTimeout(() => {
    chat.classList.add("active");
    window.scrollTo(0, 0);
  }, 700);
}
