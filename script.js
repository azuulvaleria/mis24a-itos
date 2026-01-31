// 🎵 MÚSICA
const playButton = document.getElementById("playMusic");
const iframe = document.getElementById("youtubePlayer");

playButton.addEventListener("click", () => {
  iframe.src += "&autoplay=1";
  playButton.style.display = "none";
});

// ⏳ CUENTA REGRESIVA
const eventDate = new Date("March 28, 2026 21:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
