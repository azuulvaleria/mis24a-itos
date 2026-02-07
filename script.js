// =======================
// CUENTA REGRESIVA
// =======================
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const eventDate = new Date("2026-03-28T21:00:00"); 
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdownEl.innerHTML = "🎉 ¡HOY ES EL CUMPLEAÑITO! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.innerHTML = `${days} días, ${hours} hs, ${minutes} min, ${seconds} seg`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// =======================
// CONFETTI
// =======================
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let confetti = [];

function launchConfetti() {
  confetti = [];

  for (let i = 0; i < 250; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 8 + 4,
      h: Math.random() * 8 + 4,
      speed: Math.random() * 6 + 2,
      swing: Math.random() * 2 + 1,
      color: ["#4da6ff", "#ffffff", "#80c1ff", "#1e90ff"][Math.floor(Math.random() * 4)]
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach(c => {
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.w, c.h);

    c.y += c.speed;
    c.x += Math.sin(c.y * 0.02) * c.swing;
  });

  confetti = confetti.filter(c => c.y < canvas.height);

  requestAnimationFrame(drawConfetti);
}

drawConfetti();


// =======================
// BOTON CONFIRMAR
// =======================
const confirmBtn = document.getElementById("confirmBtn");
const messageEl = document.getElementById("message");

confirmBtn.addEventListener("click", () => {
  launchConfetti();

  messageEl.innerHTML = "🎉 TE ESTOY LLEVANDO AL FORMULARIO... 💙";

  confirmBtn.disabled = true;
  confirmBtn.style.opacity = "0.6";

  setTimeout(() => {
    document.getElementById("formLink").click();
    confirmBtn.disabled = false;
    confirmBtn.style.opacity = "1";
  }, 1200);
});


// =======================
// BOTON MAPA
// =======================
const mapBtn = document.getElementById("mapBtn");

mapBtn.addEventListener("click", () => {
  document.getElementById("mapLink").click();
});
