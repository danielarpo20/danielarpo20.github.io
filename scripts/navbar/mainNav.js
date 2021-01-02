import {
  ShowMenuMobile,
  CloseMenuMobile,
  goPrincpalPage,
  switchTheme,
} from "./navController.js";

export function imageClick() {
  const img = document.querySelector(".header-imgContainer");
  img.addEventListener("click", goPrincpalPage);
}

export function nemuIconClick() {
  let icon = document.getElementById("icon");
  icon.addEventListener("click", ShowMenuMobile);
}

export function xIconClick() {
  let iconX = document.getElementById("iconX");
  iconX.addEventListener("click", CloseMenuMobile);
}

export function changeModeClick() {
  const mode = document.querySelector(".mode");
  mode.addEventListener("click", switchTheme);
}
