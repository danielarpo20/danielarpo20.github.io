import { active, inactive, refreshPage } from "./navbar.js";
import { switchTheme } from "./darkMode.js";

export function activeMenu() {
  let icon = document.getElementById("icon");
  icon.addEventListener("click", active);
}

export function inactiveMenu() {
  let iconX = document.getElementById("iconX");
  iconX.addEventListener("click", inactive);
}

export function darkMode() {
  const mode = document.querySelector(".mode");
  mode.addEventListener("click", switchTheme);
}

export function principalPage() {
  const img = document.querySelector(".prueba");
  img.addEventListener("click", refreshPage);
}
