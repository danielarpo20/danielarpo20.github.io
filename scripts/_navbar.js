// Navbar
export function activeMenu() {
  let icon = document.getElementById("icon");
  icon.addEventListener("click", () => {
    console.log(icon);
    document.querySelector(".navbar").classList.add("active");
    document.querySelector(".header-icon").classList.add("active");
    document.querySelector(".header-iconX").classList.add("active");
  });
}

export function inactiveMenu() {
  let iconX = document.getElementById("iconX");
  iconX.addEventListener("click", () => {
    document.querySelector(".navbar").classList.remove("active");
    document.querySelector(".header-icon").classList.remove("active");
    document.querySelector(".header-iconX").classList.remove("active");
  });
}