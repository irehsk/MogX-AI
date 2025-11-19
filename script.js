const landing = document.getElementById("landing");
const chat = document.getElementById("chat");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");

startBtn.onclick = () => {
  landing.classList.remove("visible");
  setTimeout(() => {
    chat.classList.add("visible");
  }, 300);
};

backBtn.onclick = () => {
  chat.classList.remove("visible");
  setTimeout(() => {
    landing.classList.add("visible");
  }, 300);
};
