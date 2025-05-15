// Função para atualizar o contador de tempo 
function updateTimer() {
  const startDate = new Date("2025-01-23T00:00:00");
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const totalDays = Math.floor(hours / 24);

  const months = Math.floor(totalDays / 30.44);
  const days = Math.floor(totalDays % 30.44);
  const hrs = hours % 24;
  const mins = minutes % 60;
  const secs = seconds % 60;

  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hrs;
  document.getElementById("minutes").textContent = mins;
  document.getElementById("seconds").textContent = secs;
}

// Inicializando o contador
setInterval(updateTimer, 1000);
updateTimer();
