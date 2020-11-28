// Dark Mode
function darkMode() {
  let element = document.body;
  console.log(element);
  element.classList.toggle("dark-mode");

  let line = document.querySelector(".line");
  line.classList.toggle("dark-mode-line");

  let linksMenu = document.querySelector('.navbar-items-item-link')
  linksMenu.classList.toggle('dark-menu')
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
