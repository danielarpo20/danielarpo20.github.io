function darkMode() {
  let element = document.body;
  let line = document.getElementById("line");

  element.classList.toggle("dark-mode");

  console.log(element);
  console.log(line);
  line.classList.toggle("dark-mode-line");
}

// Navbar 
function activeMenu() {
  document.getElementById("icon");
  document.querySelector(".navbar").classList.add("active");
  document.querySelector(".header-icon").classList.add("active");
  document.querySelector(".header-iconX").classList.add("active");
}

function inactiveMenu() {
  document.getElementById("iconX");
  document.querySelector(".navbar").classList.remove("active");
  document.querySelector(".header-icon").classList.remove("active");
  document.querySelector(".header-iconX").classList.remove("active");
}
