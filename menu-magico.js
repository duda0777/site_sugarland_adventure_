document.getElementById("menu-button").addEventListener("click", () => {
  const menu = document.getElementById("menu-list");
  menu.classList.toggle("hidden");
  menu.style.display = menu.classList.contains("hidden") ? "none" : "block";
});
