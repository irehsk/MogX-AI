function startApp() {
  const landing = document.getElementById("landing");
  const chat = document.getElementById("chat");

  // fade out landing
  landing.classList.add("fade-out");

  // activate chat screen after fade
  setTimeout(() => {
    chat.classList.add("active");
  }, 600);
}
