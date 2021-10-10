document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

const newYear = document.querySelector(".year");
const yearUpdate = new Date().getFullYear();
newYear.textContent = yearUpdate;
