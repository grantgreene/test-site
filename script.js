document.querySelector(".nav-btn").addEventListener("click", e => {
  document.querySelector(".nav-btn").classList.toggle("open");
  document.querySelector("header nav").classList.toggle("open");
});

document.querySelectorAll(".dropdown-btn").forEach(dropdown => {
  let viewportWidth;
  dropdown.addEventListener("mouseenter", e => {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 970) {
      e.target.firstElementChild.firstElementChild.textContent = "‒";
    }
  });
  dropdown.addEventListener("mouseleave", e => {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 970) {
      e.target.firstElementChild.firstElementChild.textContent = "+";
    }
  });
  dropdown.addEventListener("click", e => {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 970) {
      if (e.target.nextElementSibling.classList.contains("open")) {
        e.target.nextElementSibling.classList.remove("open");
        e.target.firstElementChild.textContent = "+";
      } else {
        e.target.nextElementSibling.classList.add("open");
        e.target.firstElementChild.textContent = "‒";
      }
    }
  });
});
