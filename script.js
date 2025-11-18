function startApp() {
  const landing = document.getElementById("landing");
  const chat = document.getElementById("chat");

  // fade out landing page
  landing.classList.add("fade-out");

  // after fade, show chat
  setTimeout(() => {
    chat.classList.add("active");
  }, 700);
}
