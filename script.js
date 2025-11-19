document.addEventListener("DOMContentLoaded", () => {

  const landing = document.getElementById("landing");
  const chat = document.getElementById("chat");
  const startBtn = document.getElementById("startBtn");
  const backBtn = document.getElementById("backBtn");

  startBtn.onclick = () => {
    landing.classList.add("fade-out");

    setTimeout(() => {
      chat.classList.add("active");
      window.scrollTo(0,0);
    }, 600);
  };

  backBtn.onclick = () => {
    chat.classList.remove("active");

    setTimeout(() => {
      landing.classList.remove("fade-out");
      window.scrollTo(0,0);
    }, 200);
  };

});
