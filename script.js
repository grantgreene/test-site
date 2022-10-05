const navToggler = document.querySelector(".nav-toggler");
const navTogglerIcon = document.querySelector(".nav-toggler-icon");
const navMenu = document.querySelector("header ul");
const archivesFilterBtn = document.querySelector(".archives-filter-btn");
const archivesFilter = document.querySelector(".archives-filter");

navToggler.addEventListener("click", () => {
  navTogglerIcon.classList.toggle("open");
  navMenu.classList.toggle("open");
});

archivesFilterBtn.addEventListener("click", () => {
  if (archivesFilterBtn.classList.contains("open")) {
    archivesFilterBtn.classList.remove("open");
    archivesFilterBtn.textContent = "Open Filter ▼";
  } else {
    archivesFilterBtn.classList.add("open");
    archivesFilterBtn.textContent = "Close Filter ▲";
  }
  archivesFilter.classList.toggle("open");
});
