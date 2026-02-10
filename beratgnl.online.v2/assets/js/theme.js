const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) body.dataset.theme = savedTheme;

toggleBtn.addEventListener("click", () => {
  const next = body.dataset.theme === "dark" ? "light" : "dark";
  body.dataset.theme = next;
  localStorage.setItem("theme", next);
});

document.getElementById("theme-icon-dark").classList.toggle("hidden");
document.getElementById("theme-icon-light").classList.toggle("hidden");