const landing = document.getElementById("landing");
const chatScreen = document.getElementById("chatScreen");
const getStarted = document.getElementById("getStarted");
const backBtn = document.getElementById("backBtn");

getStarted.addEventListener("click", () => {
    landing.classList.remove("show");
    landing.classList.add("hidden");

    setTimeout(() => {
        chatScreen.classList.remove("hidden");
        chatScreen.classList.add("show");
    }, 500);
});

backBtn.addEventListener("click", () => {
    chatScreen.classList.remove("show");
    chatScreen.classList.add("hidden");

    setTimeout(() => {
        landing.classList.remove("hidden");
        landing.classList.add("show");
    }, 500);
});
