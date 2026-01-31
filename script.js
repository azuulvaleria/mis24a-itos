// 🎵 MUSICA
const playButton = document.getElementById("playMusic");
const musicContainer = document.getElementById("musicContainer");

playButton.addEventListener("click", () => {
  musicContainer.innerHTML = `
    <iframe
      width="0"
      height="0"
      src="https://www.youtube.com/embed/wYn2fUMAQlk?autoplay=1"
      frameborder="0"
      allow="autoplay">
    </iframe>
  `;
  playButton.style.display = "none";
});

// ⏳ COUNTDOWN
const timer = document.getElementById("timer");
const eventDate = new Date("March 28, 2026 21:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

// 🎊 CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

document.getElementById("confirmBtn").addEventListener("click", () => {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: -10,
      r: Math.random() * 6 + 4,
      d: Math.random() * 5 + 2
    });
  }
});

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((c, i) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = ["#4da6ff", "#ffffff", "#80c1ff"][i % 3];
    ctx.fill();
    c.y += c.d;
  });

  confetti = confetti.filter(c => c.y < canvas.height);
  requestAnimationFrame(drawConfetti);
}

drawConfetti();
